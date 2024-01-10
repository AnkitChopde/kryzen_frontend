import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Form from '../pages/Form'
import PrivateRoutes from './PrivateRoutes'
import Preview from '../pages/preview'

const AllRoutes = () => {
  return ( <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/form" element={<PrivateRoutes><Form/></PrivateRoutes>}/>
    <Route path="/preview" element={<PrivateRoutes><Preview/></PrivateRoutes>}/>
  </Routes>
  )
}

export default AllRoutes
