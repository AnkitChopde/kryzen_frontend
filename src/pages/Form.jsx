import axios from "axios";
import React, { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [state, setState] = useState({
    name: "",
    age: 0,
    address: "",
    photo: null,
    loading: false,
  });
  const { isAuth } = useContext(authContext);
  const navigate = useNavigate();
  const { name, age, address, photo, loading } = state;

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setState({
      ...state,
      photo: file,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("address", address);
    formData.append("photo", photo);
    setState({ ...state, loading: true });
    try {
      const response = await axios.post(
        "https://kryzen-backend.onrender.com/form/addFormDetails",
        formData,
        {headers: {
            'Content-Type': 'multipart/form-data', // Set content type for file upload
            'token': isAuth.token,
          }}
      );
      console.log(response);
      navigate("/preview");
    } catch (e) {
      setState({ ...state, loading: false });
      console.log(e);
    }
  };
  return (
    <div>
      <div className="register-container">
        <form className="register-form" onSubmit={handleForm} encType="multipart/form-data">
          <h2 style={{ textAlign: "center" }}>User Details Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => {
                if (
                  /^[0-9.:]*$/.test(e.target.value) &&
                  parseInt(e.target.value, 10) > 0
                ) {
                  setState({ ...state, age: e.target.value });
                }
              }}
              placeholder="Enter your Age"
            />
          </div>
          <div className="form-group">
            <label htmlFor="addredd">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setState({ ...state, address: e.target.value })}
              placeholder="Enter your Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">User Photo:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handlePhotoChange}
              accept="image/*"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
