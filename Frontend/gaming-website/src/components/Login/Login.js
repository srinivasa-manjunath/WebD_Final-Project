import React from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '../images/loginimg.jpg';

import './login.css';

const Login = () => {
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
                    <div>
                        <input id='loginemail' placeholder='Email'/>
                    </div>
                    <div>
                        <input id='loginpass' placeholder='Password'/>
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

