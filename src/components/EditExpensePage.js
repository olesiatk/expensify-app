import React from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    const params = useParams()
    const currentExpense = props.expenses.find((expense) => expense.id === params.id)
    const navigation = useNavigate()

    console.log('currentExpense', currentExpense)

    return (
        <div>
            <ExpenseForm
                expense={currentExpense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(currentExpense.id, expense))
                    navigation('/')
                }}
            />
            <button 
                onClick={() => {
                    props.dispatch(removeExpense(currentExpense.id))
                    navigation('/')
                }}
            >
                Remove
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
    }
}

export default connect(mapStateToProps)(EditExpensePage)