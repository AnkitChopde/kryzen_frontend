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
    <div>

      <div>
      <h2>Form Preview</h2>
      <div ref={componentRef}>
        <p>Name: {formData.name}</p>
        <p>Age: {formData.age}</p>
        <p>Address: {formData.address}</p>
        <img src={`http://your-api-url/${formData.photoPath}`} alt="User's Photo" style={{ maxWidth: '300px' }} />
      </div>
      <button onClick={handlePrint}>Download as PDF</button>
    </div>
    </div>
  )
}

export default Preview
