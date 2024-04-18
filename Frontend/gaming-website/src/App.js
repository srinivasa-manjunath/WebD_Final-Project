import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
import Home from './components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
// import ContactUs from './components/Contact/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/aboutus" element = {<AboutUs />} />
        {/* <Route path="/contactus" element = {<ContactUs />} /> */}
        <Route path="/login" element = {<Login />} />
        <Route path='/signup' element = {<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
