import confiqureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses'
import { expenses } from '../fixtures/expenses'
import { database } from '../../firebase/firebase'
import { get } from '@firebase/database'

const createMockStore = confiqureMockStore([thunk])

test('should setup remove expense action object', ()=>{
    const action = removeExpense('123abc')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', ()=>{
    const action = editExpense('123abc', {note: 'New note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    })
})

test('should setup add expense action oject with provided values', ()=>{
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', () => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: '',
        createAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return get(ref(database, `expenses/${actions[0].expense.id}`))
    }).then((snapshot) => {
        expect(snapshot.val().toEqual(expenseData))
        done()
    })
})

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({})
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return get(ref(database, `expenses/${actions[0].expense.id}`))
    }).then((snapshot) => {
        expect(snapshot.val().toEqual(expenseData))
        done()
    })
})

// test('should setup add expense action oject with default values', ()=>{
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: ''
//         }
//     })
// })