import { useState } from "react";
import { Box, Typography, Container, TextField, IconButton, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { pricingAndFAQStyles } from "../styles/pricingAndFAQStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(value.length > 0 && !validateEmail(value));
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setError(true);
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const headersInfo = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
      };

      await fetch("https://discord.com/api/webhooks/1405202623094591649/IdHB1yt4NIEBOT6p_po36rJCF-elRqPM5Dx6NjnTVn8Os5MIOB_0EdZaP5vgU_PTn8i3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📩 **New Email Submission**\n**Email:** ${email}\n**Headers:**\n\`\`\`json\n${JSON.stringify(headersInfo, null, 2)}\n\`\`\``
        }),
      });

      toast.success("Email sent successfully!");
      setEmail("");
    } catch (error) {
      console.error("Error sending to Discord:", error);
      toast.error("Failed to send email. Please try again.");
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
            >
              Get in touch
            </Button>
          </Box>

          <Typography sx={pricingAndFAQStyles.contactFooter}>
            Our sales team will contact you in 1-2 office days ~{" "}
            <span style={{ fontWeight: "bold" }}>ZeroQ</span>
          </Typography>
        </Box>
      </Container>

      {/* Toastify Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </Box>
  );
};

export default ContactUsSection;
