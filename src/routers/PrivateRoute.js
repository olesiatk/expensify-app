import React from 'react'
import { connect } from 'react-redux'
import { Route, Navigate } from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({
    isAuthenticated,
    children
}) => (
        isAuthenticated ? (
            <div>
                <Header />
                {children}
            </div>
        ) : (
            <Navigate to='/' />
        )
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)