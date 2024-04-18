import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './Feedbacks.css';

const Feedbacks = () => {

    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:7000/usersinfo');
        const filteredUsers = response.data.filter(user => user.Name !== 'Admin');
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  
    return (
      
        <>
        <Navbar />
        
        <div className="users-container">
            <h1 className="users-header">Users</h1>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user._id} className="user-list-item">
                        <div className="user-name">Name: {user.Name}</div>
                        <div className="user-email">Email: {user.email}</div>
                        <div className="user-email">Feedbacks {user.email}</div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
  }

export default Feedbacks
