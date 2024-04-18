import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import SignupImage from '../images/loginimg.jpg';

import './SignUp.css';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [errors, setErrors] = useState({});

  const inputChange = (e) => {   
    setFormData({...formData, [e.target.name]: e.target.value});
    // Clears the error message when user starts typing in a field
    setErrors({...errors, [e.target.name]: ''});
  }

  const validateForm = () => {
    const { username, email, password, confirmpassword } = formData;
    const newErrors = {};

    // Username validation
    if (!username || username.length < 3 || username.length > 20) {
      newErrors.username = 'Username must be between 3 and 20 characters';
    }

    // Email validation using regex
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    // Confirm password validation
    if (password !== confirmpassword) {
      newErrors.confirmpassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const submitting = async (e) => {
    e.preventDefault();

    if (!validateForm()){
        return; // Stop submission if validation fails
    } 

    console.log(formData);

    try {
      const response = await axios.post('http://localhost:7000/signup', formData);
      console.log(response.data);
      console.log(response.data.message);

      if (response.data.message === 'User created successfully') {
          navigate('/login');
      }
        alert('user already exists.');
    } catch (error) {
      console.error('Error submitting login form:', error);
    }
  };

  return (
    <div id='container6'>
      <div id='container7'>
        <div id='container8'>
            <img src={SignupImage} alt=''/>
        </div>
        <div id='container9'>
            <h2>Sign Up</h2>
            <div id='container10'>
                <div>
                    <div>
                      <input id='username' name='username' placeholder='username' value={formData.username} onChange={inputChange}/>
                        <div className="error">{errors.username}</div>
                    </div>
                    <div>
                        <input id='signupemail' name='email' placeholder='Email' value={formData.email} onChange={inputChange}/>
                        <div className="error">{errors.email}</div>
                    </div>
                    <div>
                        <input id='signuppass' name='password' placeholder='Password' value={formData.password} onChange={inputChange} type="password"/>
                        <div className="error">{errors.password}</div>
                    </div>
                    <div>
                        <input id='signupconfirm' name='confirmpassword' placeholder='Confirm Password' value={formData.confirmpassword} onChange={inputChange} type="password"/>
                        <div className="error">{errors.confirmpassword}</div>
                    </div>
                    <div id='signuplinks'>
                        <div>Already have an account? <Link to="/login">Login</Link></div>
                    </div>

                    <button id='signupbutton' onClick={submitting}>Sign Up</button>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
