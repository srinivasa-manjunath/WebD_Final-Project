import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginImage from '../images/loginimg.jpg';
import axios from 'axios';

import './login.css';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
});

const inputChange = (e) => {   
    setFormData({...formData, [e.target.name]: e.target.value});
}

const submitting = async (e) => {
  e.preventDefault();
  console.log(formData);

  try {
      const response = await axios.post('http://localhost:7000/login', formData, { withCredentials: true });
      console.log(response.data);

      if (response.data.message === 'Login successful') {
        if (response.data.role === 'Admin') {
            navigate('/adminpanel');
        } else {
            navigate('/');
        }
        window.location.reload();
    } else {
        navigate('/login');
    }
  } catch (error){
      console.error('Error submitting login form:', error);
  }
}
  

  return (
    <div id='container1'>
      <div id='container2'>
        <div id='container3'>
            <img src={LoginImage} alt=''/>
        </div>
        <div id='container4'>
            <h2>Login</h2>
            <div id='container5'>
                <div>
                    <div className='errormsg'></div>
                    <div>
                        <input id='loginemail' placeholder='Email' name='email' value={formData.email} onChange={inputChange}/>
                    </div>
                    <div>
                        <input id='loginpass' placeholder='Password' name="password" value={formData.password} onChange={inputChange}/>
                    </div>
                    <div id='loginlinks'>
                        <Link>Forgot password</Link>
                        <Link to= '/signup'>SignUp</Link>
                    </div>

                    <button id='loginbutton' onClick={submitting} >Login</button>
                </div>
            </div>            
        </div>
      </div>
    </div>
  )
}

export default Login;

