import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
import Home from './components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/login" element = {<Login />} />
        <Route path='/signup' element = {<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
