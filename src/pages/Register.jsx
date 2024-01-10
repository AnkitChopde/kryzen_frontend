import React, { useState } from "react";
import "../css/RegistorForm.css";
import axios from "axios";
import { Link,  useNavigate } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    loading:false
  });
  const navigate = useNavigate()
  const { username, password ,loading} = state;

  const handleRegister = async (e) => {
    e.preventDefault();
    const payload = {
      username: username,
      password: password,
    };
    setState({...state,loading:true})
    try {
        const response = await axios.post("https://kryzen-backend.onrender.com/user/register",payload)
        if(response){
            console.log(response)
            alert(response?.data.msg)
            navigate("/form")
        }
    } catch (e) {
     console.log(e)
     alert(e.response.data.msg)
     setState({...state,loading:false})
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={(e) => handleRegister(e)}>
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setState({ ...state, username: e.target.value })}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">{loading?"Loading...":"Register"}</button>
        <div>
        <h5>Already a user ?<Link to="/login"><span style={{color:"blue"}}>  Login</span></Link>
      </h5>
        </div>
      </form>
     
    </div>
  );
};

export default Register;
