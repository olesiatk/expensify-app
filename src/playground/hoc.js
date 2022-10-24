// Hight Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import {createRoot} from 'react-dom/client'


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrapperdComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrapperdComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrapperdComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrapperdComponent {...props}/>) : (<p>Please login to view the info</p>)}
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

const root = createRoot(document.getElementById('app'))

root.render(<AuthInfo isAuthenticated={false} info='There are the details'/>)