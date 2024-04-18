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

  const inputChange = (e) => {   
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const submitting = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
        const response = await axios.post('http://localhost:7000/', formData, { withCredentials: true });
        console.log(response.data);

        if (response.data.message === 'Login successful' & response.data.Name === "Admin" ) {
            navigate('/');
          } 
          else if(response.data.message === 'Login successful' & response.data.Name === "Employee"){
            navigate('/');
          }
          else {
            navigate('/');
          }
    } catch (error){
        console.error('Error submitting login form:', error);
    }
}

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
                    </div>
                    <div>
                        <input id='signupemail' name='email' placeholder='Email' value={formData.email} onChange={inputChange}/>
                    </div>
                    <div>
                        <input id='signuppass' name='password' placeholder='Password' value={formData.password} onChange={inputChange}/>
                    </div>
                    <div>
                        <input id='signupconfirm' name='confirmpassword' placeholder='Confirm Password' value={formData.confirmpassword} onChange={inputChange}/>
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
