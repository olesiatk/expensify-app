import React from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    const params = useParams()
    const currentExpense = props.expenses.find((expense) => expense.id === params.id)
    const navigation = useNavigate()

    return (
        <div>
            <ExpenseForm
                expense={currentExpense}
                onSubmit={(expense) => {
                    props.dispatch(startEditExpense(currentExpense.id, expense))
                    navigation('/')
                }}
            />
            <button 
                onClick={() => {
                    props.dispatch(startRemoveExpense({id: currentExpense.id}))
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