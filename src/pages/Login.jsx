import React, { useContext, useState } from 'react'
import '../css/RegistorForm.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
    const {handlelogin} =useContext(authContext)
    const navigate = useNavigate()
    const [state, setState] = useState({
        username: "",
        password: "",
        loading:false
      });
      const { username, password,loading } = state;
    
      const handleLogin = async (e) => {
        e.preventDefault();
        const payload = {
          username: username,
          password: password,
        };
        console.log(payload)
        setState({...state,loading:true})
        try {
            const response = await axios.post("https://kryzen-backend.onrender.com/user/login",payload)
            if(response){
                console.log(response)
               
                alert(response?.data.msg)
                handlelogin(response?.data?.token)
                navigate("/form")
            }
        } catch (e) {
         console.log(e)
         alert(e.response.data.msg)
         setState({...state,loading:false})
        
    }
      };
    
  return (
    <div>
      <div className="register-container">
      
      <form className="register-form" onSubmit={handleLogin}>
      <h2 style={{textAlign:"center"}}>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" 
          value={username}
          onChange={(e) => setState({ ...state, username: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" 
          value={password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </div>
        <button type="submit">{loading?"Logging...":"Login"}</button>
        <div>
        <h5>Not a user ? <Link to="/register"><span style={{color:"blue"}}>Register</span></Link></h5>
        </div>
      </form>
      
    </div>
    </div>
  )
}

export default Login
