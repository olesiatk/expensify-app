import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' className={({isActive}) => (isActive ? 'is-active' : '')} end>Dashboard</NavLink>
        <NavLink to='/create' className={({isActive}) => (isActive ? 'is-active' : '')}>Create Expense</NavLink>
        <NavLink to='/help' className={({isActive}) => (isActive ? 'is-active' : '')}>Help</NavLink>
    </header>
)

export default Header