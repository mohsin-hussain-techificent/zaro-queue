import { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Grid, Container, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { pricingAndFAQStyles } from '../styles/pricingAndFAQStyles';

const PricingAndFAQSection = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(2); // Start with the third FAQ open

  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "$199",
      period: "/month",
      features: ["Inbound voice, basic training", "Monthly minutes: 1,000 mins"],
      isHighlighted: false
    },
    {
      id: 2,
      name: "Pro",
      price: "$499",
      period: "/month",
      features: ["CRM integrations, smart escalation routing", "Monthly minutes: 4,000 mins"],
      isHighlighted: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom quote",
      period: "",
      features: ["White-label, multi-agent setup, priority SLA", "Monthly minutes: Unlimited"],
      isHighlighted: false
    }
  ];

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

  return (
    <Box sx={pricingAndFAQStyles.section}>
      <Container maxWidth={false} sx={pricingAndFAQStyles.container}>
        {/* Pricing Section */}
        <Box sx={{ ...pricingAndFAQStyles.pricingHeader, px: { xs: 3, md: 6 } }}>
            <Typography variant="overline" sx={{ ...pricingAndFAQStyles.plansLabel, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              PLANS
            </Typography>
            <Typography variant="h2" sx={{ ...pricingAndFAQStyles.pricingTitle, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Pricing Plans
            </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={3} sx={{ mb: 12, px: { xs: 3, md: 6 } }}>
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.id}>
              <Card sx={pricingAndFAQStyles.pricingCard(plan.isHighlighted)}>
                <CardContent sx={pricingAndFAQStyles.cardContent}>
                  {/* Plan Name and Price on same line */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 , flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Typography variant="h4" sx={{ ...pricingAndFAQStyles.planName, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      {plan.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                      <Typography variant="h3" sx={{ ...pricingAndFAQStyles.planPrice, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                        {plan.price}
                      </Typography>
                      {plan.period && (
                        <Typography 
                          sx={{ 
                            color: '#ffffff',
                            fontSize: '24px',
                            fontWeight: 500,
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontStyle: 'normal',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            verticalAlign: 'middle',
                            ml: 1
                          }}
                        >
                          {plan.period}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  {/* Divider */}
                  <Box sx={pricingAndFAQStyles.divider} />

                  {/* Features */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ ...pricingAndFAQStyles.featuresTitle, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      FEATURES
                    </Typography>
                    {plan.features.map((feature, index) => (
                      <Box key={index} sx={pricingAndFAQStyles.featureItem}>
                        <Box sx={pricingAndFAQStyles.checkIcon}>
                          <img src="/ticksvgcardds.svg" alt="check" style={{ width: '20px', height: '20px' }} />
                        </Box>
                        <Typography sx={{ ...pricingAndFAQStyles.featureText, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Button */}
                  <Box sx={{ mt: 'auto' }}>
                    <Button sx={{ ...pricingAndFAQStyles.buyButton(plan.isHighlighted), fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      Buy now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQ Section - Full Width Background */}
      <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <Container maxWidth="lg" sx={{ ml: 0, mr: 'auto' }}>
          <Box sx={{ ...pricingAndFAQStyles.faqHeader, px: { xs: 3, md: 6 } }}>
            <Typography variant="h2" sx={{ ...pricingAndFAQStyles.faqTitle, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              FAQ's
            </Typography>
          </Box>
          
          {/* FAQ List */}
          <Box sx={{ px: { xs: 3, md: 6 } }}>
            {faqs.map((faq, index) => (
              <Accordion 
                key={faq.id}
                expanded={openFAQIndex === index}
                onChange={() => setOpenFAQIndex(openFAQIndex === index ? -1 : index)}
                sx={pricingAndFAQStyles.accordion}
              >
                <AccordionSummary 
                  expandIcon={null}
                  sx={pricingAndFAQStyles.accordionSummary}
                >
                  <Typography sx={{ ...pricingAndFAQStyles.questionText, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {faq.question}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: { xs: '20px', sm: '24px', md: '28px' },
                    ml: 'auto'
                  }}>
                    {openFAQIndex === index ? (
                      <CloseIcon />
                    ) : (
                      <AddIcon />
                    )}
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={pricingAndFAQStyles.accordionDetails}>
                  <Typography sx={{ ...pricingAndFAQStyles.answerText, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PricingAndFAQSection; 