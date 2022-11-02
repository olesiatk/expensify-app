import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startAddExpense} from '../actions/expenses'
import { useNavigate } from 'react-router-dom';

const AddExpensePage = (props) => {
    const navigate = useNavigate() 
    return (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.onSubmit(expense)
                navigate('/')
            }}
        />
    </div>
)}

const mapDispatchToProps = (dispatch) =>({
    onSubmit: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)