import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import "./Contact.css"; // Ensure you create this CSS file for styling

const Contact = () => {
  return (
    <Container className="contact-container" maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form>
        <TextField 
          label="Email" 
          type="email" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          required 
        />
        
        <TextField 
          label="Message" 
          multiline 
          rows={4} 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          required 
        />
        
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
