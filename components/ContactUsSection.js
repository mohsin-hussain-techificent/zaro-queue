import { useState } from "react";
import { Box, Typography, Button, Container, TextField } from "@mui/material";
import { pricingAndFAQStyles } from "../styles/pricingAndFAQStyles";

const ContactUsSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (value) => {
    // Simple email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(value.length > 0 && !validateEmail(value));
  };

  return (
    <Box sx={pricingAndFAQStyles.contactSection}>
      <Container maxWidth="md" sx={pricingAndFAQStyles.contactContainer}>
        <Box sx={pricingAndFAQStyles.contactContent}>
          <Typography sx={pricingAndFAQStyles.contactTitle}>
            Let's Build Your Custom AI Chatbot
          </Typography>

          <Typography sx={pricingAndFAQStyles.contactSubtitle}>
            Boost engagement, save time, and drive conversions with a smart
            chatbot built specifically for your business.
          </Typography>

          <Box sx={pricingAndFAQStyles.contactForm}>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              sx={pricingAndFAQStyles.emailInput}
              type="email"
              value={email}
              onChange={handleChange}
              error={error}
              helperText={error ? "Please enter a valid email address" : ""}
            />
            <Button sx={pricingAndFAQStyles.subscribeButton}>Subscribe</Button>
          </Box>

          <Typography sx={pricingAndFAQStyles.contactFooter}>
            Our sales team will contact you in 1-2 office days ~{" "}
            <span style={{ fontWeight: "bold" }}>ZeroQ</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsSection;
