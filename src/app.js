import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import {startSetExpenses} from './actions/expenses'
import { login, logout} from './actions/auth'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoadingPage from "./components/LoadingPage";

const store = configureStore()
const root = createRoot(document.getElementById('app'))

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    root.render(jsx)
    hasRendered = true
  }
}

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

root.render(<LoadingPage />)

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
});

