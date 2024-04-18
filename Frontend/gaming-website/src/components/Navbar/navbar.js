import React, {useState, useEffect} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/logo2.jpg';
import axios from 'axios';
import './Navbar.css';

const NavigationBar = () => {
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
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/"><img src={Logo} alt="Paradise Gaming Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/wallpapers">Wallpapers</Nav.Link>
                        <Nav.Link href="/aboutus">AboutUs</Nav.Link>
                        <Nav.Link href="/contactus">ContactUs</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className="auth-button">Logout</button>
                        ) : (
                            <Link to="/login" className="auth-button">Login</Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
