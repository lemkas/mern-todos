import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import TodosPage from './pages/TodosPage'

export default function useRoutes(isAuthenticated) {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/todos" exact>
                    <TodosPage />
                </Route>
                <Redirect to="/todos"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
