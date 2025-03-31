import { Link} from 'react-router-dom';
import { Container, Grid, Typography, Button, Box, IconButton } from '@mui/material';
import { Twitter, Instagram, Telegram, GitHub, Lock,Reddit   } from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import MovingHeadlines from '../components/Header/Headline';
import MusicPlayer from '../components/Music';

// Enhanced typography variants
const typographyStyles = {
  h1: {
    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
    fontWeight: 800,
    lineHeight: 1.2,
    letterSpacing: '-0.5px'
  },
  h2: {
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
    fontWeight: 700,
    lineHeight: 1.3
  },
  h3: {
    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
    fontWeight: 600
  },
  h4: {
    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
    fontWeight: 600
  },
  body1: {
    fontSize: { xs: '1.1rem', md: '1.25rem' },
    lineHeight: 1.6
  }
};

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut"
    }
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 }
  }
};

const SectionWrapper = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      viewport={{ once: true }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <MovingHeadlines />
      {/* Hero Section */}
      <Box sx={{ height: '10vh' }} /> {/* Spacer */}
      
      <SectionWrapper>
        <Box sx={{ 
          textAlign: 'center', 
          my: { xs: 10, md: 15 },
          minHeight: { xs: '90vh', md: '80vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          {/* New Whoop's Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: 0.2
              }
            }}
            whileHover={{ scale: 1.05 }}
            style={{
              marginBottom: '2rem',
              position: 'relative',
              zIndex: 1
            }}
          >
            <Typography variant="h2" sx={{
              fontSize: { xs: '3rem', md: '4rem' },
              fontWeight: 900,
              lineHeight: 1,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              position: 'relative',
              display: 'inline-block',
              px: 4,
              py: 2,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)',
                borderRadius: '50px',
                zIndex: -1
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '-5px',
                left: '-5px',
                right: '-5px',
                bottom: '-5px',
                background: 'linear-gradient(45deg, #FF6B6B 0%, #48DBFB 100%)',
                borderRadius: '50px',
                zIndex: -2,
                filter: 'blur(10px)',
                opacity: 0.7
              }
            }}>
              Whoop's
            </Typography>
          </motion.div>

          {/* LehnCoin Image */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: 1,
              transition: { 
                type: "spring",
                stiffness: 100,
                damping: 10
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
             <img 
    src="https://i.ibb.co/ZRSj4hWc/Whats-App-Image-2025-03-30-at-14-41-35-26874834-removebg-preview.png" 
    alt="Lehn" 
    style={{ width: 500, height: 500, borderRadius: '50%' }} 
  />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.3 }
            }}
          >
            <Typography variant="h1" sx={{ 
              mt: 4,
              mb: 3,
              background: 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              ...typographyStyles.h1
            }}>
              LehnCoin: The Billionaire Dog Revolution
            </Typography>
            <Typography variant="h4" sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              ...typographyStyles.h4
            }}>
              From Spoiled Pup to Crypto Billionaire - Join Lehn's Journey Today!
            </Typography>
          </motion.div>
        </Box>
      </SectionWrapper>


{/* Quote and CTA Section */}
<SectionWrapper>
        <Box sx={{ 
          position: 'relative',
          overflow: 'hidden',
          my: { xs: 10, md: 15 },
          minHeight: { xs: '60vh', md: '50vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(72,219,251,0.1) 100%)',
          borderRadius: '24px',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          p: 6,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 40%)',
            zIndex: -1
          }
        }}>
          {/* Floating Stars Background */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                background: 'white',
                borderRadius: '50%',
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(0.5px)',
                opacity: 0
              }}
              animate={{
                opacity: [0, 1, 0],
                transition: {
                  duration: Math.random() * 4 + 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 5,
                  delay: Math.random() * 3
                }
              }}
            />
          ))}

          {/* Glossy Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: 0.3
              }
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            style={{
              position: 'relative',
              zIndex: 1
            }}
          >
            <Typography variant="h3" sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 800,
              lineHeight: 1.3,
              background: 'linear-gradient(90deg, #FF6B6B 0%, #48DBFB 50%, #FF6B6B 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shine 3s linear infinite',
              display: 'inline-block',
              px: 2,
              py: 1,
              position: 'relative',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              '@keyframes shine': {
                '0%': { backgroundPosition: '0% center' },
                '100%': { backgroundPosition: '200% center' }
              }
            }}>
              "HUSTLE, PATIENCE, AND A VISION WILL MAKE YOU UNSTOPPABLE"
            </Typography>
          </motion.div>

          {/* CTA Button with Glass Effect */}
          <motion.div
            style={{ marginTop: '3rem', zIndex: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.5 }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="contained" 
              size="large"
              component={Link} // Use React Router's Link
              to="/whitepaper" // Link to the whitepaper page
              sx={{
                background: 'linear-gradient(45deg, rgba(255,107,107,0.7) 0%, rgba(72,219,251,0.7) 100%)',
                color: 'white',
                padding: '16px 48px',
                fontSize: '1.5rem',
                fontWeight: 700,
                borderRadius: '50px',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 8px 32px rgba(255, 105, 135, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.3) 50%, transparent 55%)',
                  backgroundSize: '300% 300%',
                  animation: 'shimmer 3s infinite linear',
                  opacity: 0.5,
                  zIndex: -1
                },
                '&:hover': {
                  boxShadow: '0 12px 40px rgba(255, 105, 135, 0.5)',
                  '&::before': {
                    animation: 'shimmer 2s infinite linear'
                  }
                },
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' }
                }
              }}
            >
              BUY $LEHN NOW
            </Button>
          </motion.div>
        </Box>
      </SectionWrapper>


      {/* Crypto Introduction Section */}
      <SectionWrapper>
        <Box sx={{ 
          my: { xs: 10, md: 15 },
          minHeight: { xs: '80vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center'
        }}>
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  pr: { md: 6 }
                }}>
                  <Box sx={{
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'center',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: 6
                  }}>
                    <motion.img 
                      src="https://i.ibb.co/ZRSj4hWc/Whats-App-Image-2025-03-30-at-14-41-35-26874834-removebg-preview.png" 
                      alt="LehnCoin" 
                      style={{ 
                        width: '100%', 
                        height: 'auto',
                        maxWidth: '500px'
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.4 }
                  }
                }}
              >
                <Box sx={{
                  pl: { md: 6 },
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  <Typography variant="h2" gutterBottom sx={typographyStyles.h2}>
                    Why Lehn Coin?
                  </Typography>
                  <Typography sx={{ 
                    maxWidth: '600px',
                    mx: { xs: 'auto', md: 0 },
                    ...typographyStyles.body1
                  }}>
                    Lehn was born into luxury, living in a mansion, eating filet mignon... until one day, he got thrown out! 
                    But this isn't a sad story—this is a comeback story of the century. With nothing but his street smarts 
                    and an unlimited supply of meme magic, Lehn is building a crypto empire that will shake the foundations 
                    of the financial world.
                  </Typography>
                  
                  {/* Learn More Button with Glossy Finish */}
                  <Box sx={{ mt: 4 }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="contained"
                        size="large"
                        component={Link} // Use React Router's Link
              to="/about" // Link to the whitepaper page
                        sx={{
                          background: 'linear-gradient(45deg, rgba(255,107,107,0.7) 0%, rgba(72,219,251,0.7) 100%)',
                          color: 'white',
                          padding: '12px 36px',
                          fontSize: '1.2rem',
                          fontWeight: 600,
                          borderRadius: '50px',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          boxShadow: '0 8px 32px rgba(255, 105, 135, 0.3)',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.3) 50%, transparent 55%)',
                            backgroundSize: '300% 300%',
                            animation: 'shimmer 3s infinite linear',
                            opacity: 0.5,
                            zIndex: -1
                          },
                          '&:hover': {
                            boxShadow: '0 12px 40px rgba(255, 105, 135, 0.5)',
                            '&::before': {
                              animation: 'shimmer 2s infinite linear'
                            }
                          },
                          '@keyframes shimmer': {
                            '0%': { backgroundPosition: '100% 50%' },
                            '100%': { backgroundPosition: '0% 50%' }
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </SectionWrapper>

      {/* Potential Partners Section */}
<SectionWrapper>
  <Box sx={{ 
    my: { xs: 10, md: 15 },
    minHeight: { xs: '80vh', md: '70vh' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }}>
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { delay: 0.2 }
        }
      }}
    >
      <Typography variant="h2" align="center" gutterBottom sx={typographyStyles.h2}>
        Potential Partners
      </Typography>
      <Typography variant="h5" align="center" sx={{ mb: 6, ...typographyStyles.h4 }}>
        Building bridges with industry leaders
      </Typography>
    </motion.div>
    
    {/* Partner Logos Grid */}
    <Grid container spacing={4} sx={{ mt: 6, justifyContent: 'center' }}>
      {[
        { 
          name: 'Gemini', 
          logo: 'https://i.ibb.co/7tDvxbrn/Whats-App-Image-2025-03-30-at-23-59-24-1.jpg',
          description: 'Cryptocurrency exchange and custodian'
        },
        { 
          name: 'BlackRock', 
          logo: 'https://i.ibb.co/0yP26tTM/Whats-App-Image-2025-03-30-at-23-59-23-1.jpg',
          description: 'Global investment management'
        },
        { 
          name: 'Coinbase', 
          logo: 'https://i.ibb.co/gby7pQFn/Whats-App-Image-2025-03-30-at-23-59-23.jpg',
          description: 'Digital currency exchange'
        },
        { 
          name: 'Nubank', 
          logo: 'https://i.ibb.co/bgzFxsDt/Whats-App-Image-2025-03-30-at-23-59-24.jpg',
          description: 'Digital banking platform'
        },
        { 
          name: 'Core Scientific', 
          logo: 'https://i.ibb.co/wNV5p9ct/Whats-App-Image-2025-03-30-at-23-59-22-1.jpg',
          description: 'Blockchain infrastructure'
        },
        { 
          name: 'R3', 
          logo: 'https://i.ibb.co/7d7gL0S4/Whats-App-Image-2025-03-30-at-23-59-22-2.jpg',
          description: 'Enterprise blockchain software'
        },
        { 
          name: 'Block', 
          logo: 'https://i.ibb.co/tpY1tVnx/Whats-App-Image-2025-03-31-at-00-04-37.jpg',
          description: 'Financial services and mobile payment'
        },
        { 
          name: 'Ripple', 
          logo: 'https://i.ibb.co/cX2xywCy/Whats-App-Image-2025-03-31-at-00-01-20.jpg',
          description: 'Enterprise blockchain solutions'
        }
      ].map((partner, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            style={{ height: '100%' }}
          >
            <Box sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: 'background.paper',
              height: '100%',
              textAlign: 'center',
              boxShadow: 3,
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FF6B6B 0%, #48DBFB 100%)'
              },
              '&:hover': {
                boxShadow: 6,
                transform: 'translateY(-5px)',
                '& .partner-overlay': {
                  opacity: 1
                }
              }
            }}>
              {/* Partner Logo */}
              <Box sx={{
                height: '80px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                position: 'relative'
              }}>
                <motion.img 
                  src={partner.logo} 
                  alt={partner.name}
                  style={{ 
                    maxHeight: '100%', 
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'grayscale(30%)'
                  }}
                  whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
                  transition={{ duration: 0.3 }}
                />
              </Box>
              
              {/* Hover Overlay with Description */}
              <Box className="partner-overlay" sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(72,219,251,0.9) 0%, rgba(255,107,107,0.9) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 3,
                opacity: 0,
                transition: 'opacity 0.3s ease',
                borderRadius: 3
              }}>
                <Typography variant="h6" sx={{ 
                  color: 'white',
                  fontWeight: 700,
                  mb: 2
                }}>
                  {partner.name}
                </Typography>
                <Typography sx={{ 
                  color: 'white',
                  fontSize: '0.9rem'
                }}>
                  {partner.description}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>

    {/* Partnership CTA */}
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.8 }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          variant="contained"
          size="large"
          sx={{
            background: 'linear-gradient(45deg, rgba(72,219,251,0.7) 0%, rgba(255,107,107,0.7) 100%)',
            color: 'white',
            padding: '12px 36px',
            fontSize: '1.2rem',
            fontWeight: 600,
            borderRadius: '50px',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 8px 32px rgba(72, 219, 251, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.3) 50%, transparent 55%)',
              backgroundSize: '300% 300%',
              animation: 'shimmer 3s infinite linear',
              opacity: 0.5,
              zIndex: -1
            },
            '&:hover': {
              boxShadow: '0 12px 40px rgba(72, 219, 251, 0.5)',
              '&::before': {
                animation: 'shimmer 2s infinite linear'
              }
            },
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' }
            }
          }}
        >
          Explore Partnership Opportunities
        </Button>
      </motion.div>
    </Box>
  </Box>
</SectionWrapper>
{/* Add this section above the Music Player */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '40px',
    marginBottom: '40px'
  }}
>
  {/* Lehn Shop Button */}
  <motion.div
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button
      component="a"
      href="https://www.lehn.shop"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
        color: 'white',
        px: 4,
        py: 2,
        fontSize: '1.1rem',
        fontWeight: 600,
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 102, 255, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
          opacity: 0,
          transition: 'opacity 0.5s ease'
        },
        '&:hover': {
          boxShadow: '0 12px 40px rgba(0, 102, 255, 0.5)',
          '&:before': {
            opacity: 0.3
          }
        }
      }}
    >
      {/* Stars */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={`star-shop-${i}`}
          sx={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: 'white',
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 5px 1px white',
            animation: 'twinkle 2s infinite alternate',
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
      Visit Lehn Shop
    </Button>
  </motion.div>

  {/* Lehn Live Button */}
  <motion.div
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button
      component="a"
      href="https://lehn.live"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
        color: 'white',
        px: 4,
        py: 2,
        fontSize: '1.1rem',
        fontWeight: 600,
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(138, 43, 226, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
          opacity: 0,
          transition: 'opacity 0.5s ease'
        },
        '&:hover': {
          boxShadow: '0 12px 40px rgba(138, 43, 226, 0.5)',
          '&:before': {
            opacity: 0.3
          }
        }
      }}
    >
      {/* Stars */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={`star-live-${i}`}
          sx={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: 'white',
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 5px 1px white',
            animation: 'twinkle 2s infinite alternate',
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
      Visit Lehn Live
    </Button>
  </motion.div>
</motion.div>

{/* Add this to your global styles or in the component's sx prop */}
<style jsx global>{`
  @keyframes twinkle {
    0% { opacity: 0.3; }
    100% { opacity: 1; }
  }
`}</style>
      {/* Tokenomics Section */}
      <SectionWrapper>
  <Box sx={{ 
    my: { xs: 10, md: 15 },
    minHeight: { xs: '80vh', md: '70vh' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }}>
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { delay: 0.2 }
        }
      }}
    >
      <Typography variant="h2" align="center" gutterBottom sx={typographyStyles.h2}>
        LehnCoin Tokenomics
      </Typography>
      <Typography variant="h5" align="center" sx={{ mb: 6, ...typographyStyles.h4 }}>
        Strong liquidity foundation for sustainable growth
      </Typography>
    </motion.div>
    
    <Grid container spacing={4} sx={{ mt: 6, justifyContent: 'center' }}>
      {[
        { title: 'Total Supply', value: '100,000,000 LEHN' },
        { title: 'Liquidity Allocation', value: '70,000,000 LEHN (70%)' },
        { title: 'Locked Reserve', value: '30,000,000 LEHN (30%)' },
        { title: 'Transaction Fee', value: '2% (1% Liquidity, 1% Rewards)' }
      ].map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
          >
            <Box sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: 'background.paper',
              height: '100%',
              textAlign: 'center',
              boxShadow: 3,
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FF6B6B 0%, #48DBFB 100%)'
              },
              '&:hover': {
                boxShadow: 6,
                transform: 'translateY(-5px)'
              }
            }}>
              <Typography variant="h4" sx={{ 
                color: 'primary.main',
                mb: 2,
                ...typographyStyles.h4
              }}>
                {item.title}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                {item.value}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>

    {/* Explore Button with Glossy Finish */}
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.8 }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          variant="contained"
          size="large"
          component={Link}
          to="/tokenomics"
          sx={{
            background: 'linear-gradient(45deg, rgba(72,219,251,0.7) 0%, rgba(255,107,107,0.7) 100%)',
            color: 'white',
            padding: '12px 36px',
            fontSize: '1.2rem',
            fontWeight: 600,
            borderRadius: '50px',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 8px 32px rgba(72, 219, 251, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.3) 50%, transparent 55%)',
              backgroundSize: '300% 300%',
              animation: 'shimmer 3s infinite linear',
              opacity: 0.5,
              zIndex: -1
            },
            '&:hover': {
              boxShadow: '0 12px 40px rgba(72, 219, 251, 0.5)',
              '&::before': {
                animation: 'shimmer 2s infinite linear'
              }
            },
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' }
            }
          }}
        >
          Explore Tokenomics
        </Button>
      </motion.div>
    </Box>
  </Box>
</SectionWrapper>

      {/* Business Ventures Section */}
      <SectionWrapper>
        <Box sx={{ 
          my: { xs: 10, md: 15 },
          minHeight: { xs: '100vh', md: '90vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { delay: 0.2 }
              }
            }}
          >
            <Typography variant="h2" align="center" gutterBottom sx={typographyStyles.h2}>
              Lehn's Empire
            </Typography>
            <Typography variant="h5" align="center" sx={{ mb: 6, ...typographyStyles.h4 }}>
              Building the future of canine crypto dominance
            </Typography>
          </motion.div>
          
          <Grid container spacing={6} sx={{ mt: 6, justifyContent: 'center' }}>
            {[
              { 
                title: 'Merch Store', 
                desc: 'Limited-edition crypto fashion & exclusive dog accessories that make you part of the pack',
                img: 'https://i.ibb.co/608ZHz0r/Whats-App-Image-2025-03-30-at-14-41-35-c79278cf-removebg-preview.png',
                status: 'coming-soon'
              },
              
              { 
                title: 'Lehn Nfts', 
                desc: 'Exclusive digital collectibles with real-world perks and VIP access to events',
                img: 'https://i.ibb.co/R4BLndzK/Chat-GPT-Image-Mar-30-2025-06-28-33-PM-1.png',
                status: 'coming-soon'
              },
              { 
                title: "Lehn's Treats", 
                desc: 'Premium crypto-powered dog food brand with portion of sales supporting shelters',
                img: 'https://i.ibb.co/Y4PGcTSn/Chat-GPT-Image-Mar-30-2025-05-05-10-PM.png',
                status: 'coming-soon'
              },
              {title: "Lehn's Ad Network",
  desc: 'AI-powered digital advertising platform connecting brands with targeted audiences',
  img: 'https://i.ibb.co/1fn7BJFB/Chat-GPT-Image-Mar-30-2025-05-12-53-PM.png',
  status: 'coming-soon'},
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  style={{ height: '100%' }}
                >
                  <Box sx={{
                    position: 'relative',
                    height: '100%',
                    minHeight: '400px',
                    '&:hover .glossy-lock': {
                      transform: 'scale(1.1) translate(-50%, -50%)'
                    }
                  }}>
                    {/* Glossy Lock Icon - Perfectly Centered */}
                    <Box className="glossy-lock" sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 3,
                      textAlign: 'center',
                      transition: 'transform 0.3s ease',
                      width: '100%',
                      maxWidth: 200
                    }}>
                      <Box sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: `
                          radial-gradient(circle at 30% 30%, 
                          rgba(255,255,255,0.8) 0%, 
                          rgba(255,255,255,0.1) 20%, 
                          transparent 40%),
                          linear-gradient(145deg, #48DBFB 0%, #FF6B6B 100%)
                        `,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: `
                          0 4px 20px rgba(0,0,0,0.3),
                          inset 0 2px 4px rgba(255,255,255,0.2),
                          inset 0 -2px 4px rgba(0,0,0,0.2)
                        `,
                        mx: 'auto',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)',
                          borderRadius: '50%'
                        }
                      }}>
                        <Lock sx={{ 
                          fontSize: '2.5rem',
                          color: 'white',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                        }} />
                      </Box>
                      <Typography variant="h6" sx={{
                        mt: 2,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.25rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}>
                        Coming Soon
                      </Typography>
                    </Box>

                    {/* Card with Overlay */}
                    <Box sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      gap: 4,
                      p: 4,
                      borderRadius: 3,
                      bgcolor: 'background.paper',
                      height: '100%',
                      boxShadow: 3,
                      filter: 'brightness(0.6)',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)',
                        borderRadius: 3,
                        zIndex: 1
                      }
                    }}>
                      <Box sx={{
                        width: { xs: '100%', md: '45%' },
                        height: { xs: '200px', md: '100%' },
                        minHeight: '200px',
                        borderRadius: 2,
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 2
                      }}>
                        <motion.img 
                          src={item.img} 
                          alt={item.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Box>
                      <Box sx={{
                        width: { xs: '100%', md: '55%' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 2
                      }}>
                        <Typography variant="h3" sx={{ 
                          mb: 2,
                          ...typographyStyles.h3,
                          color: 'text.secondary'
                        }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ 
                          mb: 3,
                          ...typographyStyles.body1,
                          color: 'text.secondary'
                        }}>
                          {item.desc}
                        </Typography>
                        <Button 
                          variant="text"
                          size="large"
                          sx={{ 
                            alignSelf: 'flex-start',
                            fontSize: '1.1rem',
                            px: 4,
                            color: 'text.secondary',
                            '&:hover': {
                              color: 'primary.light'
                            }
                          }}
                          disabled
                        >
                          Notify Me
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Explore Button with Glossy Finish */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.8 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(45deg, rgba(255,107,107,0.7) 0%, rgba(72,219,251,0.7) 100%)',
                  color: 'white',
                  padding: '16px 48px',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 8px 32px rgba(255, 105, 135, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.3) 50%, transparent 55%)',
                    backgroundSize: '300% 300%',
                    animation: 'shimmer 3s infinite linear',
                    opacity: 0.5,
                    zIndex: -1
                  },
                  '&:hover': {
                    boxShadow: '0 12px 40px rgba(255, 105, 135, 0.5)',
                    '&::before': {
                      animation: 'shimmer 2s infinite linear'
                    }
                  },
                  '@keyframes shimmer': {
                    '0%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' }
                  }
                }}
              >
                Explore Lehn's Empire
              </Button>
            </motion.div>
          </Box>
        </Box>
      </SectionWrapper>

      {/* Social Links Section */}
      <SectionWrapper>
  <Box
    sx={{
      textAlign: "center",
      my: { xs: 10, md: 15 },
      minHeight: { xs: "60vh", md: "50vh" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: 0.2 },
        },
      }}
    >
      <Typography variant="h2" gutterBottom sx={typographyStyles.h2}>
        Join the Billionaire Pack
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 6,
          maxWidth: "600px",
          ...typographyStyles.h4,
        }}
      >
        Follow Lehn's journey to world domination
      </Typography>
    </motion.div>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
        flexWrap: "wrap",
        maxWidth: "600px",
      }}
    >     
      {[
          { icon: <Twitter fontSize="inherit" />, name: "X (Twitter)", link: "https://x.com/LehnLife?t=16ME4k9jCrWeneDl02lbFA&s=08", color: "#000000" },
          { icon: <Instagram fontSize="inherit" />, name: "Instagram", link: "https://www.instagram.com/lehn.life1?igsh=cWdhNmVheml4emgy", color: "#E1306C" },
          { icon: <Telegram fontSize="inherit" />, name: "Telegram", link: "https://t.me/+cPbF0ZpY1VRlNzll", color: "#0088CC" },
          { icon: <Reddit fontSize="inherit" />, name: "Reddit", link: "https://www.reddit.com/u/lehnlife/s/pk0eZv20QZ", color: "#FF5700" },
        ].map((social, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          custom={index}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton
            component="a"
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{
              width: social.size,
              height: social.size,
              fontSize: "2rem",
              border: "2px solid",
              background: "linear-gradient(145deg, #48DBFB 0%, #FF6B6B 100%)",
              color: "white",
              "&:hover": {
                boxShadow: "0 5px 15px rgba(72, 219, 251, 0.4)",
              },
            }}
          >
            {social.icon}
          </IconButton>
        </motion.div>
      ))}
    </Box>
  </Box>
</SectionWrapper>

        {/* Music Player at very bottom */}
        <Box sx={{
        position: 'fixed',
        bottom: 16,
        right: { xs: '50%', sm: 20 }, // Center on mobile, right on desktop
        transform: { xs: 'translateX(50%)', sm: 'none' }, // Center horizontally on mobile
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <MusicPlayer />
      </Box>

    </Container>
  );
};

export default Home;