import React from 'react'
import { unstable_HistoryRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage' 
import PrivateRoute from './PrivateRoute' 
import PublicRoute from './PublicRoute' 

export const history = createBrowserHistory();

const AppRouter = () => (
    <BrowserRouter history={history}>
        <Routes>
            <Route path='/' element={<PublicRoute><LoginPage /></PublicRoute>}/>
            <Route 
                path='/dashboard' 
                element={<PrivateRoute><ExpenseDashboardPage /></PrivateRoute>} 
            />
            <Route 
                path='/create' 
                element={<PrivateRoute><AddExpensePage /></PrivateRoute>} 
            />
            <Route 
                path='/edit/:id' 
                element={<PrivateRoute><EditExpensePage/></PrivateRoute>} 
            />
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
)

export default AppRouter