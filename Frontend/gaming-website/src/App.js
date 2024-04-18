import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
import Home from './components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/Contact/ContactUs';
import AdminPanel from './AdminPanel/AdminPage/AdminPage';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/adminpanel' element={<AdminPanel />} />

      </Routes>
      <Footer />
    </Router>
      </>
  );
}

export default App;
