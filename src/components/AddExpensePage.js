import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startAddExpense} from '../actions/expenses'
import { useNavigate } from 'react-router-dom';

const AddExpensePage = (props) => {
    const navigate = useNavigate() 
    return (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm 
                onSubmit={(expense) => {
                    props.onSubmit(expense)
                    navigate('/')
                }}
            />
        </div>
    </div>
)}

const mapDispatchToProps = (dispatch) =>({
    onSubmit: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)