import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Preview = () => {
   const [formDetails,setFormDetails] = useState([]);

   useEffect(()=>{
     fetchFormData()
   },[]);

   const fetchFormData=async()=>{
    try{
     const res = axios.get("https://kryzen-backend.onrender.com/form/getFormDetails")
    
     console.log(res)
    }
    catch(e){
     console.log(e)
     alert(e.response.data.msg)
    }
   }

  return (
    <div  className='register-container'>

      <div className="register-form">
      <h2>Form Preview</h2>
      <div >
        <p>Name: </p>
        <p>Age: </p>
        <p>Address: </p>
        <img src={``} alt="User's Photo" style={{ maxWidth: '300px' }} />
      </div>
      <button >Download as PDF</button>
    </div>
    </div>
  )
}

export default Preview
