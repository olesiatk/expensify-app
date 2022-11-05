import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({
    isAuthenticated,
    children
}) => (
        isAuthenticated ? (
            <Navigate to='/dashboard' />
        ) : children
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)