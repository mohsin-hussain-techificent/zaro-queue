import { useState } from "react";
import { Box, Typography, Button, Container, TextField } from "@mui/material";
import { pricingAndFAQStyles } from "../styles/pricingAndFAQStyles";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(value.length > 0 && !validateEmail(value));
  };

  const handleSubmit = async () => {
    if (!captchaToken) {
      alert("Please complete the CAPTCHA before submitting.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, captchaToken }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while sending email");
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
          <ReCAPTCHA
            sitekey="6LfsXKQrAAAAAF8UqObdc6IK7whmlHqOd7nrgE8p"
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
          />


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


            <Button sx={pricingAndFAQStyles.subscribeButton} onClick={handleSubmit}>
              Contact
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
