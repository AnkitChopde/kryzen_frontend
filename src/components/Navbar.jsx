import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

const Navbar = () => {
    const {isAuth,handlelogout} = useContext(authContext)
  return (
    <div style={{display:"flex",justifyContent:"space-around",listStyle:"none",padding:"2rem",backgroundColor:"grey",color:"white",fontWeight:"bold"}}>
      
      <Link to="/form"><li>Form</li> </Link>
      {isAuth.auth ? <><li onClick={handlelogout}>Logout</li></>:(<><Link to="/login"><li>Login</li></Link>
      <Link to="/register"><li>Register</li></Link></> )}
    </div>
  )
}

export default Navbar
