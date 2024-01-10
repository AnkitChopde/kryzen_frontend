import React, { useContext } from 'react'
import { authContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
const {isAuth} = useContext(authContext)

if(!isAuth.auth){
    
    return <Navigate to="/login"/>
}


  return children
}

export default PrivateRoutes
