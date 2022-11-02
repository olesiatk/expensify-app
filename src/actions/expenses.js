import { v4 as uuid } from 'uuid'
import { database } from '../firebase/firebase'
import { ref, push } from 'firebase/database'


// ADD_EXPENSE

export const addExpense = (expense = {}) =>({
    type: 'ADD_EXPENSE',
    expense,
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = {description, note, amount, createdAt};
        return push(ref(database, 'expenses'), expense).then((ref) => {
            console.log('result', ref)
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })

    }
}

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// REMOVE_EXPENSE

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id,
})