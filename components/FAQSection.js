import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(2); // Start with the third FAQ open

  const faqs = [
    {
      id: 1,
      question: "How do I train my AI agent?",
      answer: "Training your AI agent is simple and hassle-free. You provide your business information from your side, and we handle the training process for you. Our team ensures your agent is properly configured with your specific business requirements and workflows."
    },
    {
      id: 2,
      question: "Can it escalate to a human team?",
      answer: "Yes, absolutely! Zero Queue intelligently transfers complex calls to your human team when needed. Our system automatically detects when a call requires human intervention and seamlessly escalates to the appropriate team member, ensuring no customer is left waiting."
    },
    {
      id: 3,
      question: "Is my data secure?",
      answer: "Absolutely. All calls and transcripts are encrypted and stored with enterprise-grade security."
    }
  ];

  const StyledSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #4a148c 100%)',
    backgroundImage: 'url(/Background.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    padding: '100px 0',
    color: '#ffffff',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      zIndex: 1
    }
  }));

  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    marginBottom: '20px',
    backdropFilter: 'blur(10px)',
    '&:before': {
      display: 'none'
    },
    '&.Mui-expanded': {
      margin: '0 0 20px 0'
    }
  }));

  const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    padding: '30px 40px',
    '& .MuiAccordionSummary-content': {
      margin: 0
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
      color: '#ffffff',
      transform: 'rotate(0deg)',
      transition: 'transform 0.3s ease'
    },
    '&.Mui-expanded .MuiAccordionSummary-expandIconWrapper': {
      transform: 'rotate(180deg)'
    }
  }));

  const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: '0 40px 30px 40px'
  }));

  return (
    <StyledSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: '#ffffff', 
              fontSize: { xs: '32px', md: '48px' },
              fontWeight: 600,
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              mb: 2
            }}
          >
            FAQ's
          </Typography>
        </Box>
        
        {/* FAQ List */}
        <Box>
          {faqs.map((faq, index) => (
            <StyledAccordion 
              key={faq.id} 
              expanded={openIndex === index}
              onChange={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography 
                  sx={{ 
                    color: '#ffffff', 
                    fontSize: '18px',
                    fontWeight: 500,
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    lineHeight: 1.4
                  }}
                >
                  {faq.question}
                </Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography 
                  sx={{ 
                    color: '#ffffff', 
                    fontSize: '16px',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    lineHeight: 1.6,
                    opacity: 0.9
                  }}
                >
                  {faq.answer}
                </Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </Box>
      </Container>
    </StyledSection>
  );
} 