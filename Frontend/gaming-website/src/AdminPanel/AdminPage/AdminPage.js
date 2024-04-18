import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState('');
  
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('http://localhost:7000/authentication', { withCredentials: true });
        setIsLoggedIn(response.data.isLoggedIn);
        if (!response.data.isLoggedIn) {
          navigate('/');
        }
      } catch (error) {
        console.error('Failed to check login status', error);
        navigate('/');
      }
    };

    checkLoginStatus();
  }, [navigate]);

  return (
    <>
    <Navbar />
    <div id='container30'>
        <div id='container25'>
          <Link className='boxes' to= '/feedbacks'>
            Feedbacks
          </Link>
        </div>
    </div>
    </>
  )
}

export default AdminPage
