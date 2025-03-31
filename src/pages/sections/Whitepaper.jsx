import React from 'react';
import { Container, Typography, Box, Button, Paper, Grid, IconButton } from '@mui/material';
import { Twitter, Instagram, Telegram, GitHub,Reddit } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link} from 'react-router-dom';
import MusicPlayer from '../../components/Music';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "backOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

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
  body1: {
    fontSize: { xs: '1.1rem', md: '1.25rem' },
    lineHeight: 1.6
  }
};

const GRADIENT = 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)';

const WhitePaper = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box sx={{ 
        textAlign: 'center', 
        my: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 10,
            delay: 0.2
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <img 
            src="https://i.ibb.co/GfhrzY1M/Chat-GPT-Image-Mar-30-2025-10-52-05-AM.png" 
            alt="Lehn" 
            style={{ 
              width: 200, 
              height: 200, 
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }} 
          />
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <Typography variant="h1" sx={{ 
            mt: 4,
            mb: 3,
            background: GRADIENT,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            ...typographyStyles.h1
          }}>
            LehnCoin White Paper
          </Typography>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <Typography variant="h4" sx={{ 
            maxWidth: '800px',
            mx: 'auto',
            mb: 4,
            ...typographyStyles.body1
          }}>
            The Next Generation of Brand-Backed Digital Currency
          </Typography>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleUp}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
     {/* <Button 
            variant="contained"
            size="large"
            sx={{
              background: GRADIENT,
              color: 'white',
              padding: '12px 36px',
              fontSize: '1.2rem',
              fontWeight: 600,
              borderRadius: '50px',
              boxShadow: '0 8px 32px rgba(255, 105, 135, 0.3)',
              '&:hover': {
                boxShadow: '0 12px 40px rgba(255, 105, 135, 0.5)'
              }
            }}
          >
            Download PDF
          </Button>*/}
        </motion.div>
      </Box>

      {/* Abstract */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ mb: 8 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h2" sx={{ mb: 4, ...typographyStyles.h2 }}>
              1. Abstract
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography sx={{ mb: 3, ...typographyStyles.body1 }}>
              LehnCoin ($LEHN) is the official digital currency of the Lehn brand ecosystem, powering a revolutionary 
              model where brand engagement directly translates to financial participation. Backed by real-world 
              ventures including premium pet food lines, merchandise, digital advertising, and exclusive NFTs, 
              LehnCoin represents the future of brand loyalty programs.
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography sx={{ ...typographyStyles.body1 }}>
              Built on Solana's high-performance blockchain using Rust smart contracts, LehnCoin delivers 
              enterprise-grade speed and security while maintaining accessibility for all participants. 
              The token is designed for mass adoption with strategic marketing initiatives that make 
              cryptocurrency ownership simple and rewarding for everyone.
            </Typography>
          </motion.div>
        </Box>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ mb: 8 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h2" sx={{ mb: 4, ...typographyStyles.h2 }}>
              2. Introduction
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography sx={{ mb: 3, ...typographyStyles.body1 }}>
              In today's digital economy, brands need new ways to engage audiences and reward participation. 
              LehnCoin solves this by creating a virtuous cycle where every interaction with the Lehn brand - 
              from purchasing products to sharing content - earns tangible value in the form of $LEHN tokens.
            </Typography>
          </motion.div>
          
          <motion.div variants={scaleUp}>
            <Box sx={{ 
              p: 4, 
              my: 4, 
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(72,219,251,0.1) 100%)',
              borderLeft: '4px solid',
              borderImage: 'linear-gradient(to bottom, #FF6B6B, #48DBFB) 1'
            }}>
              <Typography variant="h4" sx={{ mb: 2, fontStyle: 'italic' }}>
                "We're not just creating a cryptocurrency - we're building an economic system where every fan 
                becomes a stakeholder in the Lehn brand's success."
              </Typography>
              <Typography>- Lehn, Founder & COO</Typography>
            </Box>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography sx={{ ...typographyStyles.body1 }}>
              The token launch coincides with major brand expansions into food products, apparel, and digital 
              collectibles, ensuring immediate utility and demand drivers for $LEHN.
            </Typography>
          </motion.div>
        </Box>
      </motion.div>

      {/* Ventures Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ mb: 8 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h2" sx={{ mb: 4, ...typographyStyles.h2 }}>
              3. Brand Ventures
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {[
              { 
                title: 'Lehn Premium Foods', 
                description: 'Gourmet pet food line accepting $LEHN with 5% of sales distributed to token holders',
                icon: '🍗'
              },
              { 
                title: 'Signature Merchandise', 
                description: 'Limited-edition apparel and accessories with exclusive NFT counterparts',
                icon: '👕'
              },
              { 
                title: 'Digital Advertising', 
                description: 'Lehn as brand ambassador with revenue share to $LEHN stakers',
                icon: '📺'
              },
              { 
                title: 'NFT Collectibles', 
                description: 'High-value digital assets with real-world perks and experiences',
                icon: '🖼️'
              }
            ].map((venture, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div 
                  variants={scaleUp}
                  whileHover={{ y: -10 }}
                >
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    height: '100%', 
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                        transition: { 
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.3
                        } 
                      }}
                    >
                      <Typography variant="h1" sx={{ mb: 2 }}>
                        {venture.icon}
                      </Typography>
                    </motion.div>
                    <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                      {venture.title}
                    </Typography>
                    <Typography>
                      {venture.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Technology Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ mb: 8 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h2" sx={{ mb: 4, ...typographyStyles.h2 }}>
              4. Technology
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography sx={{ mb: 3, ...typographyStyles.body1 }}>
              LehnCoin leverages cutting-edge blockchain technology to deliver unmatched performance and security:
            </Typography>
          </motion.div>
          
          <Grid container spacing={3} sx={{ my: 4 }}>
            {[
              { 
                title: 'Blockchain', 
                content: 'Solana - 65,000 TPS capability',
                specs: ['400ms block times', 'Sub-penny transaction fees']
              },
              { 
                title: 'Smart Contracts', 
                content: 'Rust-based for maximum security',
                specs: ['Audited code', 'Formal verification']
              },
              { 
                title: 'Security', 
                content: 'Enterprise-grade protections',
                specs: ['Multi-sig treasury', 'Timelock governance']
              },
              { 
                title: 'Accessibility', 
                content: 'Designed for mass adoption',
                specs: ['Fiat on-ramps', 'Simplified wallet experience']
              }
            ].map((tech, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div 
                  variants={scaleUp}
                  custom={index}
                >
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    height: '100%', 
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <Typography variant="h5" sx={{ mb: 1, color: 'primary.main' }}>
                      {tech.title}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      {tech.content}
                    </Typography>
                    <ul style={{ paddingLeft: '20px' }}>
                      {tech.specs.map((spec, i) => (
                        <li key={i} style={{ marginBottom: '8px' }}>
                          <Typography variant="body2">{spec}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ mb: 8 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h2" sx={{ mb: 4, ...typographyStyles.h2 }}>
              5. Team
            </Typography>
          </motion.div>
          
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <motion.div variants={scaleUp}>
                <Paper elevation={3} sx={{ 
                  p: 4, 
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  gap: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                  }
                }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Box sx={{ 
                      width: 150, 
                      height: 150, 
                      borderRadius: '50%', 
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                    }}>
                      <img 
                        src="https://i.ibb.co/ZRSj4hWc/Whats-App-Image-2025-03-30-at-14-41-35-26874834-removebg-preview.png" 
                        alt="Lehn" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </Box>
                  </motion.div>
                  <Box>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                      Lehn
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                      Founder & Chief Operating Officer
                    </Typography>
                    <Typography>
                      The visionary behind the Lehn brand empire. From pampered pup to business magnate, 
                      Lehn oversees all operations with a focus on community growth and sustainable economics.
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ 
          textAlign: 'center', 
          my: 10,
          p: 6,
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(255,107,107,0.2) 0%, rgba(72,219,251,0.2) 100%)'
        }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h3" sx={{ mb: 3, ...typographyStyles.h3 }}>
              Join the Brand Revolution
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography sx={{ mb: 4, maxWidth: '600px', mx: 'auto', ...typographyStyles.body1 }}>
              $LEHN is designed for everyone - no technical knowledge required. Participate in the future of 
              brand economics today.
            </Typography>
          </motion.div>
          
          <motion.div
            variants={scaleUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="contained"
              size="large"
               component={Link}
                      to="/buy-lehn" // or href="/buy-lehn" if not using React Router
              sx={{
                background: GRADIENT,
                color: 'white',
                padding: '16px 48px',
                fontSize: '1.5rem',
                fontWeight: 700,
                borderRadius: '50px',
                boxShadow: '0 8px 32px rgba(255, 105, 135, 0.3)',
                '&:hover': {
                  boxShadow: '0 12px 40px rgba(255, 105, 135, 0.5)'
                }
              }}
            >
              Get LehnCoin Now
            </Button>
          </motion.div>
        </Box>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Connect With Lehn
            </Typography>
          </motion.div>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {[
             { icon: <Twitter fontSize="inherit" />, name: "X (Twitter)", link: "https://x.com/LehnLife?t=16ME4k9jCrWeneDl02lbFA&s=08", color: "#000000" },
                     { icon: <Instagram fontSize="inherit" />, name: "Instagram", link: "https://www.instagram.com/lehn.life1?igsh=cWdhNmVheml4emgy", color: "#E1306C" },
                     { icon: <Telegram fontSize="inherit" />, name: "Telegram", link: "https://t.me/+cPbF0ZpY1VRlNzll", color: "#0088CC" },
                     { icon: <Reddit fontSize="inherit" />, name: "Reddit", link: "https://www.reddit.com/u/lehnlife/s/pk0eZv20QZ", color: "#FF5700" }
                 
            ].map((social, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover={{ 
                  y: -8,
                  scale: 1.1,
                  transition: { type: 'spring', stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton 
                  color="primary" 
                  sx={{ 
                    width: '4rem', 
                    height: '4rem',
                    fontSize: '2rem',
                    background: GRADIENT,
                    color: 'white',
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>
        </Box>
      </motion.div>
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

export default WhitePaper;