import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '../images/loginimg.jpg';

import './login.css';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
});

const inputChange = (e) => {   
    setFormData({...formData, [e.target.name]: e.target.value});
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
                        <input id='loginpass' placeholder='Password' name='password' onChange={inputChange}/>
                    </div>
                    <div id='loginlinks'>
                        <Link>Forgot password</Link>
                        <Link to= '/signup'>SignUp</Link>
                    </div>

                    <button id='loginbutton' >Login</button>
                </div>
            </div>            
        </div>
      </div>
    </div>
  )
}

export default Login;

