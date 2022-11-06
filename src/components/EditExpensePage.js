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
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={currentExpense}
                    onSubmit={(expense) => {
                        props.dispatch(startEditExpense(currentExpense.id, expense))
                        navigation('/')
                    }}
                />
                <button 
                    className="button button--secondary"
                    onClick={() => {
                        props.dispatch(startRemoveExpense({id: currentExpense.id}))
                        navigation('/')
                    }}
                >
                    Remove Expense
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
    }
}

export default connect(mapStateToProps)(EditExpensePage)