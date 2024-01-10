import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AuthContextProvider from "./context/AuthContext.jsx"
import {BrowserRouter} from "react-router-dom"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <BrowserRouter>

<React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </AuthContextProvider>
  ,
)
