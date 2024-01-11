import { useConst } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/AuthContext';
import jsPDF from 'jspdf';

const Preview = () => {
   const [formDetails,setFormDetails] = useState([]);
  const {isAuth} = useContext(authContext)
   useEffect(()=>{
     fetchFormData()
   },[]);

   const fetchFormData=async()=>{
    try{
     const res =await axios.get("https://kryzen-backend.onrender.com/form/getFormDetails",{headers: {
            
     token: isAuth.token,
   }})
    
   if (res.data && res.data.data) {
    setFormDetails(res.data.data);
  }
    }
    catch(e){
     console.log(e)
     alert(e.response)
    }
   }
console.log(formDetails)


const downloadAsPDF = () => {
  // Create a new instance of jsPDF
  const pdfDoc = new jsPDF();

  // Define content for the PDF
  const content = `
    Name: ${formDetails[formDetails.length - 1].name}
    Age: ${formDetails[formDetails.length - 1].age}
    Address: ${formDetails[formDetails.length - 1].address}
  `;

  // Add content to the PDF
  pdfDoc.text(content, 10, 10);

  // Save the PDF as a file with a unique name (timestamp)
  const filename = `FormPreview_${Date.now()}.pdf`;
  pdfDoc.save(filename);
};

  return (
    <div className='register-container'>
      <div className="register-form">
        <h2>Form Preview</h2>
        {formDetails.length > 0 ? (
          <>
            <div>
              <p>Name: {formDetails[formDetails.length - 1].name} </p>
              <p>Age: {formDetails[formDetails.length - 1].age} </p>
              <p>Address: {formDetails[formDetails.length - 1].address}</p>
            </div>
            <button onClick={downloadAsPDF}>Download as PDF</button>
          </>
        ) : (
          <div>No data added</div>
        )}
      </div>
    </div>
  )
}

export default Preview
