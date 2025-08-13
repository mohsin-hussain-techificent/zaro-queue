import { Box, Typography, Button, Card, CardContent, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const PricingPlans = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "$199/month",
      features: ["Inbound voice, basic training", "Monthly minutes: 1,000 mins"],
      isHighlighted: false
    },
    {
      id: 2,
      name: "Pro",
      price: "$499/month",
      features: ["CRM integrations, smart escalation routing", "Monthly minutes: 4,000 mins"],
      isHighlighted: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom quote",
      features: ["White-label, multi-agent setup, priority SLA", "Monthly minutes: Unlimited"],
      isHighlighted: false
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

  const StyledCard = styled(Card)(({ theme, isHighlighted }) => ({
    background: isHighlighted 
      ? 'linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%)'
      : 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '40px 30px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
    }
  }));

  const StyledButton = styled(Button)(({ theme, isHighlighted }) => ({
    width: '100%',
    padding: '16px 24px',
    borderRadius: '8px',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    background: isHighlighted ? '#ffffff' : 'rgba(255, 255, 255, 0.1)',
    color: isHighlighted ? '#000000' : '#ffffff',
    border: isHighlighted ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
    '&:hover': {
      background: isHighlighted ? '#f5f5f5' : 'rgba(255, 255, 255, 0.2)',
      transform: 'translateY(-2px)'
    }
  }));

  const FeatureItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '15px',
    '& .check-icon': {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }));

  return (
    <StyledSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: '#ffffff', 
              fontSize: '14px', 
              fontWeight: 500,
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              letterSpacing: '2px',
              mb: 1
            }}
          >
            PLANS
          </Typography>
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
            Pricing Plans
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={3}>
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.id}>
              <StyledCard isHighlighted={plan.isHighlighted}>
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  padding: '0 !important'
                }}>
                  {/* Plan Name */}
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: '#ffffff', 
                      fontSize: '28px',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      mb: 2
                    }}
                  >
                    {plan.name}
                  </Typography>

                  {/* Price */}
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: '#ffffff', 
                      fontSize: '32px',
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      mb: 3
                    }}
                  >
                    {plan.price}
                  </Typography>

                  {/* Divider */}
                  <Box sx={{ 
                    width: '100%', 
                    height: '1px', 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    mb: 3 
                  }} />

                  {/* Features */}
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#ffffff', 
                        fontSize: '16px',
                        fontWeight: 600,
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        mb: 2
                      }}
                    >
                      FEATURES
                    </Typography>
                    {plan.features.map((feature, index) => (
                      <FeatureItem key={index}>
                        <Box className="check-icon">✓</Box>
                        <Typography 
                          sx={{ 
                            color: '#ffffff', 
                            fontSize: '16px',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            lineHeight: 1.4
                          }}
                        >
                          {feature}
                        </Typography>
                      </FeatureItem>
                    ))}
                  </Box>

                  {/* Button */}
                  <Box sx={{ mt: 'auto' }}>
                    <StyledButton isHighlighted={plan.isHighlighted}>
                      Buy now
                    </StyledButton>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default PricingPlans; 