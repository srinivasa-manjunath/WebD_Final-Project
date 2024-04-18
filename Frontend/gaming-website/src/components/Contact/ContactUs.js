import { Container, Typography, Box, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import './Contactus.css';
import Navbar from '../Navbar/navbar';
import React, { useState } from 'react';
import axios from 'axios';


const Contact = () => {

  const[formData, setFormData] = useState({
    Name: '',
    email: '',
    feedback: ''
  })

  const inputChange = (e) => {   
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const send = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7000/feedback', formData);
      console.log(response.data.message);

      setFormData({
        Name: '',
        email: '',
        feedback: ''
      });
    }
    catch (error) {
      console.error('Failed to send feedback', error);
    }

  }


  return (
    <>
    <Navbar />
      <Container maxWidth="sm" className="container">
        <Box py={5} textAlign="center">
          <Typography variant="h4" component="h1" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            We are here to help and answer any questions you might have. We look forward to hearing from you.
          </Typography>
        </Box>
        <Card className="card">
          <CardContent className="form">
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField label="Your Name" variant="outlined" fullWidth required className="textfield"   name='Name' value={formData.Name}  onChange={inputChange}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Your Email" variant="outlined" fullWidth required className="textfield"   name='email' value={formData.email}  onChange={inputChange}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    className="textfield"
                    name='feedback'
                    value={formData.feedback}
                    onChange={inputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth className="button"   onClick={send}>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        <Box mt={4} textAlign="center" className="contact-info">
          <Typography variant="subtitle1">
            Alternatively, you can reach us at:
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> contact@Paradise.com
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> +123 456 7890
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
