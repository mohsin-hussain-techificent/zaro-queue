export const pricingAndFAQStyles = {
  section: {
    backgroundImage: 'url(/Background.png)',
    backgroundSize: { xs: 'cover', sm: 'auto 100%' },
    backgroundPosition: { xs: 'center center', sm: 'right center' },
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    padding: { xs: '60px 0px', sm: '100px 0' },
    color: '#ffffff',
  
  
  },
  
  container: {
    position: 'relative',
    zIndex: 2
  },

  // Pricing Styles
  pricingHeader: {
    textAlign: 'left',
    mb: { xs: 4, sm: 6, md: 8 }
  },

  plansLabel: {
    color: '#ffffff',
    fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '16px' },
    fontWeight: 500,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    letterSpacing: '2px',
    mb: 1,
    textTransform: 'uppercase'
  },

  pricingTitle: {
    color: '#E9E9E7',
    fontSize: { xs: '32px', sm: '48px', md: '72px', lg: '96px', xl: '115.2px' },
    fontWeight: 300,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '40px', sm: '56px', md: '84px', lg: '112px', xl: '138.24px' },
    letterSpacing: '0%',
    verticalAlign: 'middle',
    mb: { xs: 1, sm: 2 }
  },

  pricingCard: (isHighlighted) => ({
    // background: isHighlighted 
    //   ? 'linear-gradient(135deg, #000000 0%, #0B0033 100%)'
    //   : 'rgba(255, 255, 255, 0.05)',
      background: isHighlighted 
      ? 'linear-gradient(135deg, #000000 0%, #0B0033 100%)'
      : 'rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: { xs: '12px', sm: '14px', md: '16px' },
    padding: { xs: '16px 12px', sm: '20px 15px', md: '30px 20px', lg: '40px 30px' },
    height: { xs: 'auto', sm: 'auto', md: '100%' },
    minHeight: { xs: 'auto', sm: '350px', md: '400px', lg: '450px' },
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
    }
  }),

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: { xs: 'auto', sm: 'auto', md: '100%' },
    padding: '0 !important',
    gap: { xs: 1, sm: 2, md: 3 }
  },

  planName: {
    color: '#ffffff',
    fontSize: { xs: '14px', sm: '18px', md: '19px', lg: '28px', xl: '34px' },
    fontWeight: 500,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '18px', sm: '22px', md: '26px', lg: '32px', xl: '38px' },
    letterSpacing: '0%',
    verticalAlign: 'middle',
    mb: { xs: 1, sm: 2 }
  },

  planPrice: {
    color: '#ffffff',
    fontSize: { xs: '16px', sm: '18px', md: '19px', lg: '25px', xl: '35px' },
    fontWeight: 500,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '20px', sm: '22px', md: '28px', lg: '36px', xl: '44px' },
    letterSpacing: '0%',
    verticalAlign: 'middle',
    mb: { xs: 1, sm: 2, md: 3 }
  },

  divider: {
    width: '100%',
    height: '1px',
    background: 'rgba(255, 255, 255, 0.2)',
    mb: { xs: 2, sm: 3 }
  },

  featuresTitle: {
    color: '#636161',
    fontSize: { xs: '12px', sm: '16px', md: '20px', lg: '24px', xl: '28px' },
    fontWeight: 500,
    fontFamily: 'Sometype Mono, monospace',
    fontStyle: 'normal',
    lineHeight: { xs: '16px', sm: '20px', md: '24px', lg: '28px', xl: '32px' },
    letterSpacing: '0%',
    verticalAlign: 'middle',
    mb: { xs: 1, sm: 2 },
    textTransform: 'uppercase'
  },

  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: '8px', sm: '10px', md: '12px' },
    mb: { xs: 1, sm: 1.5, md: 2 }
  },

  checkIcon: {
    width: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
    height: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: { xs: '8px', sm: '10px', md: '11px', lg: '12px' },
    fontWeight: 'bold',
    flexShrink: 0
  },

  featureText: {
    color: '#FFFFFF',
    fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '20px', xl: '24px' },
    fontWeight: 500,
    fontFamily: 'Helvetica Neue, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '16px', sm: '20px', md: '24px', lg: '28px', xl: '38px' },
    letterSpacing: '0%',
    verticalAlign: 'middle',
    wordWrap: 'break-word',
    overflowWrap: 'break-word'
  },

  buyButton: (isHighlighted) => ({
    width: '100%',
    padding: { xs: '8px 12px', sm: '10px 16px', md: '12px 18px', lg: '12px 20px' },
    borderRadius: { xs: '60px', sm: '70px', md: '90px' },
    textTransform: 'none',
    fontSize: { xs: '15px', sm: '18px', md: '22px', lg: '28px' },
    fontWeight: 500,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '12px', sm: '14px', md: '16px', lg: '18px' },
    letterSpacing: '0%',
    background: isHighlighted ? '#ffffff' : 'rgba(255, 255, 255, 0.1)',
    color: isHighlighted ? '#000000' : '#ffffff',
    border: isHighlighted ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
    mt: { xs: 1, sm: 2, md: 3 },
    height: { xs: '40px', sm: '50px', md: '60px', lg: '70px' },
    '&:hover': {
      background: isHighlighted ? '#f5f5f5' : 'rgba(255, 255, 255, 0.2)',
      transform: 'translateY(-2px)'
    }
  }),

  // FAQ Styles
  faqHeader: {
    mb: { xs: 4, sm: 5, md: 6 }
  },

  faqTitle: {
    color: '#E9E9E7',
    fontSize: { xs: '32px', sm: '48px', md: '72px', lg: '96px', xl: '115.2px' },
    fontWeight: 300,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '40px', sm: '56px', md: '84px', lg: '112px', xl: '138.24px' },
    letterSpacing: '0%',
    verticalAlign: 'middle',
    mb: { xs: 1, sm: 2 }
  },

  accordion: {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #3D3D3D',
    borderRadius: 0,
    mb: 0,
    '&:before': {
      display: 'none'
    },
    '&.Mui-expanded': {
      margin: 0
    }
  },

  accordionSummary: {
    padding: { xs: '16px 0', sm: '20px 0', md: '25px 0', lg: '30px 0' },
    '& .MuiAccordionSummary-content': {
      margin: 0
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
      color: '#ffffff',
      transform: 'rotate(0deg)',
      transition: 'transform 0.3s ease'
    },
    '&.Mui-expanded .MuiAccordionSummary-expandIconWrapper': {
      transform: 'rotate(45deg)'
    }
  },

  accordionDetails: {
    padding: { xs: '0 0 16px 0', sm: '0 0 20px 0', md: '0 0 25px 0', lg: '0 0 30px 0' }
  },

  questionText: {
    color: '#ffffff',
    fontSize: { xs: '16px', sm: '20px', md: '24px', lg: '28px', xl: '32px' },
    fontWeight: 500,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '20px', sm: '24px', md: '28px', lg: '32px', xl: '36px' },
    letterSpacing: '0%',
    verticalAlign: 'middle'
  },

  answerText: {
    color: '#ffffff',
    fontSize: { xs: '16px', sm: '20px', md: '24px', lg: '28px', xl: '32px' },
    fontWeight: 500,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '20px', sm: '24px', md: '28px', lg: '32px', xl: '36px' },
    letterSpacing: '0%',
    verticalAlign: 'middle',
    opacity: 0.9
  },

  // Contact Us Styles
  contactSection: {
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(/conntactus-background.jpeg)',
    backgroundSize: { xs: 'contain', sm: 'cover', md: 'cover', lg: 'cover' },
    backgroundPosition: { xs: 'center center', sm: 'center center', md: 'center center', lg: 'center center' },
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    padding: { xs: '60px 0px', sm: '80px 40px', md: '100px 60px', lg: '120px 80px' },
    color: '#ffffff',
    textAlign: 'center',
    minHeight: { xs: '400px', sm: '450px', md: '500px', lg: '500px' },
    display: 'block',
    '@media (min-width: 1024px)': {
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    '&::before': {
      display: 'none' // Disable the overlay since we're using gradient
    }
  },

  contactContainer: {
    position: 'relative',
    zIndex: 2
  },

  contactContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 3, sm: 4, md: 5, lg: 6 }
  },

  contactTitle: {
    color: '#FFFFFF',
    fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '42px' },
    fontWeight: 700,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: '100%',
    letterSpacing: '0%',
    textAlign: 'center',
    verticalAlign: 'middle',
    maxWidth: { xs: '100%', sm: '600px', md: '700px' }
  },

  contactSubtitle: {
    color: '#5A5A5A',
    fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px', xl: '24px' },
    fontWeight: 400,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '20px', sm: '24px', md: '28px', lg: '32px', xl: '34px' },
    letterSpacing: '0%',
    textAlign: 'center',
    verticalAlign: 'middle',
    maxWidth: { xs: '100%', sm: '500px', md: '600px' },
    opacity: 1
  },

  contactForm: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: { xs: 2, sm: 3 },
    width: '100%',
    maxWidth: { xs: '100%', sm: '500px', md: '600px' },
    alignItems: 'center',
    justifyContent: 'center'
  },

  emailInput: {
    width: {xs: '100%' , sm:"auto"},
    flex: 1,
    '& .MuiOutlinedInput-root': {
      // backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: { xs: '8px', sm: '10px', md: '12px' },
      border: '1px solid rgba(255, 255, 255, 0.2)',
      '& fieldset': {
        border: 'none'
      },
      '&:hover fieldset': {
        border: 'none'
      },
      '&.Mui-focused fieldset': {
        border: 'none'
      },
      '& input': {
        color: '#FFFFFF',
        fontSize: { xs: '14px', sm: '16px', md: '18px' },
        fontWeight: 400,
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        padding: { xs: '12px 16px', sm: '14px 18px', md: '16px 20px' },
        '&::placeholder': {
          color: '#B0B0B0',
          opacity: 1
        }
      }
    }
  },

  subscribeButton: {
    backgroundColor: '#8B5CF6',
    color: '#FFFFFF',
    fontSize: { xs: '14px', sm: '16px', md: '18px' },
    fontWeight: 600,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '16px', sm: '18px', md: '20px' },
    letterSpacing: '0%',
    textTransform: 'none',
    padding: { xs: '12px 24px', sm: '14px 28px', md: '16px 32px' },
    borderRadius: { xs: '8px', sm: '10px', md: '12px' },
    minWidth: { xs: '120px', sm: '140px', md: '160px' },
    '&:hover': {
      backgroundColor: '#7C3AED',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
    }
  },

  contactFooter: {
    color: '#B0B0B0',
    fontSize: { xs: '12px', sm: '14px', md: '16px' },
    fontWeight: 400,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontStyle: 'normal',
    lineHeight: { xs: '16px', sm: '18px', md: '20px' },
    letterSpacing: '0%',
    verticalAlign: 'middle',
    textAlign: 'center',
    opacity: 0.8
  }
}; 