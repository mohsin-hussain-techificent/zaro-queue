import { Box, Typography, Button, Container, TextField } from '@mui/material';
import { pricingAndFAQStyles } from '../styles/pricingAndFAQStyles';

const ContactUsSection = () => {
  return (
    <Box sx={pricingAndFAQStyles.contactSection}>
      <Container maxWidth="md" sx={pricingAndFAQStyles.contactContainer}>
        <Box sx={pricingAndFAQStyles.contactContent}>
          <Typography variant="h1" sx={pricingAndFAQStyles.contactTitle}>
            Let's Build Your Custom AI Chatbot
          </Typography>
          
          <Typography sx={pricingAndFAQStyles.contactSubtitle}>
            Boost engagement, save time, and drive conversions with a smart chatbot built specifically for your business
          </Typography>
          
          <Box sx={pricingAndFAQStyles.contactForm}>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              sx={pricingAndFAQStyles.emailInput}
            />
            <Button sx={pricingAndFAQStyles.subscribeButton}>
              Subscribe
            </Button>
          </Box>
          
          <Typography sx={pricingAndFAQStyles.contactFooter}>
            Our sales team will contact you in 1-2 office days ~ <span style={{ fontWeight: 'bold' }}>ZeroQ</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsSection; 