import React from 'react'
import {Route, Redirect}from 'react-router-dom'
// import Dashboard from './PageTwo'
// import AppContext from '../AppContext'
;
function ProtectedRoute({Component, ...rest}) {
    // const myContext = useContext(AppContext)
    const isAuth = localStorage.getItem("isAuth")
    return (
        <Route {...rest} render={(props) =>{
            if(isAuth){
                return <Component/>

            } else {
                return <Redirect to="/login"/>
            }
        }}/>
        // <Route {...rest}>
        //     {isAuth? <Dashboard/>:<Redirect to="/login"/>}
        // </Route>
    )
}

export default ProtectedRoute
