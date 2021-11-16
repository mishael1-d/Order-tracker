import React, { useContext } from 'react'
import {Route, Redirect}from 'react-router-dom'
import AppContext from '../AppContext'
;
function ProtectedRoute({component:Component, ...rest}) {
    const myContext = useContext(AppContext)
    return (
        <Route {...rest} render={(props) =>{
            if(myContext.login){
                console.log(myContext.login);
                return <Component/>
            } else {
                return <Redirect to={{ pathname: "/", state: { from: props.location }}}/>
            }
        }}/>
    )
}

export default ProtectedRoute
