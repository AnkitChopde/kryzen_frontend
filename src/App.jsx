import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './AllRoutes/AllRoutes'
import Navbar from './components/Navbar'
import Preview from './pages/preview'

function App() {
  

  return (
    <>
      <Navbar/>
      <AllRoutes/>
      {/* <Navbar/>
      <Preview/> */}
    </>
  )
}

export default App
