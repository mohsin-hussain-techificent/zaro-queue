import { useState } from "react";
import { Box, Typography, Button, Container, TextField } from "@mui/material";
import emailjs from "emailjs-com";
import { pricingAndFAQStyles } from "../styles/pricingAndFAQStyles";

const ContactUsSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(value.length > 0 && !validateEmail(value));
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setError(true);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_1i6ely6",    
        "template_oh86qsg",   
        {
          name: "New Subscriber",
          email: email,
          message: "User entered their email for contact.",
          title: "Email Subscription"
        },
        "WP6glTR9m0fUJPRUL"    
      );
      alert("Email sent successfully!");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
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
            <Button
              sx={pricingAndFAQStyles.subscribeButton}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Get in touch"}
            </Button>
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
