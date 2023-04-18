import React from 'react'
import { Route, redirect } from 'react-router-dom'
import { useAuth } from './page/AuthContext'

export default function PrivateRouter({component : Component, ...rest}) {
const currentUser = useAuth();  
 return (
   <Route
     {...rest}
     render= {props=> {
     return currentUser ? <Component {...props}/> : redirect("/login")
     }}
     >
   </Route>
  )
}
