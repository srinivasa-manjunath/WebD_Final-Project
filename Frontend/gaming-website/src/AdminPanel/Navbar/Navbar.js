import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navbar.css';

const Navbar = () => {

  const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get('http://localhost:7000/authentication', { withCredentials: true });
                setIsLoggedIn(response.data.isLoggedIn);
            } catch (error) {
                console.error('Failed to check login status', error);
            }
        };

        checkLoginStatus();
    }, []);


    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:7000/logout', {}, { withCredentials: true });
            setIsLoggedIn(false);
            navigate('/');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

  return (
    <nav className='navbar2'>
      <div>
        <Link to = '/adminpanel'>Home</Link>
      </div>
            
      <div>
        <button id='button2' onClick={handleLogout}>LogOut</button>
      </div>
            
    </nav>
  )
}

export default Navbar
