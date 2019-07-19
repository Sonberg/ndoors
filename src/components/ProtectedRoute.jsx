import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { useAuth } from '../context/auth';

export default ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    );
}
