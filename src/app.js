import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({description: 'Water bill', amount: 4500}))
store.dispatch(addExpense({description: 'Gass bill', createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent bill', amount: 109500}))
store.dispatch(setTextFilter('water'))

setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const root = createRoot(document.getElementById('app'))

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

root.render(jsx)
