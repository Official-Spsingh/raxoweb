import React from 'react'
import { isUserAuthenticated } from '@utils/auth'
import { Route, Redirect } from 'react-router-dom'
export const PrivateRoute = (props) => {
    if (isUserAuthenticated()) {
        return <Route {...props}>
            {props.children}
        </Route>
    }
    else {
        return <Redirect to="/" />
    }
}