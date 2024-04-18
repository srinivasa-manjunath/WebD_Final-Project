import { Container, Typography, Box, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import './Contactus.css';


const Contact = () => {

  return (
    <>
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
                  <TextField label="Your Name" variant="outlined" fullWidth required className="textfield" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Your Email" variant="outlined" fullWidth required className="textfield" />
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth className="button" >
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
