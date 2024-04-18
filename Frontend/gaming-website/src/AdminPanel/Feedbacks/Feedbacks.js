import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './Feedbacks.css';

const Feedbacks = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
          try {
            const response = await axios.get('http://localhost:7000/feedbacks');
            setUsers(response.data);
          } catch (error) {
            console.error('Error fetching feedbacks:', error);
          }
        };
      
        fetchFeedbacks();
      }, []);
      
  
    return (
      
        <>
        <Navbar />
        
        <div className="users-container">
            <h1 className="users-header">Feedbacks</h1>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user._id} className="user-list-item">
                        <div className="user-name">Name: {user.Name}</div>
                        <div className="user-email">Email: {user.email}</div>
                        <div className="user-feedback">Feedback: {user.feedback}</div>

                    </li>
                ))}
            </ul>
        </div>
        </>
    );
  }

export default Feedbacks
