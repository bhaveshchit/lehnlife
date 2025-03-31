import { Container, Typography, Box, Button, Paper, Grid } from '@mui/material';
import {  ShoppingBag, Diamond, LocalDining, Campaign } from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Link} from 'react-router-dom';
import MusicPlayer from '../../components/Music';


const BusinessPlan = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const headerControls = useAnimation();

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
  }, [headerControls, headerInView]);

  const BusinessSection = ({ icon, title, content, image, reverse = false }) => {
    const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
    const sectionControls = useAnimation();

    useEffect(() => {
      if (sectionInView) {
        sectionControls.start("visible");
      }
    }, [sectionControls, sectionInView]);

    return (
      <Grid 
        container 
        spacing={6} 
        sx={{ 
          mb: 12,
          flexDirection: { xs: 'column-reverse', md: reverse ? 'row-reverse' : 'row' }
        }}
        ref={sectionRef}
      >
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={sectionControls}
            variants={{
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              },
              hidden: { opacity: 0 }
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 4,
                background: 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              {title}
            </Typography>
            {content}
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={sectionControls}
            variants={{
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.6, ease: "backOut", delay: 0.2 }
              },
              hidden: { opacity: 0 }
            }}
            style={{ height: '100%' }}
          >
            <Paper 
              elevation={6} 
              sx={{ 
                height: '100%',
                minHeight: 400,
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                '&:hover': {
                  '& .business-image': {
                    transform: 'scale(1.05)'
                  },
                  '& .business-overlay': {
                    opacity: 0.9
                  }
                }
              }}
            >
              <motion.div
                className="business-image"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              
              <motion.div 
                className="business-overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255,107,107,0.7) 0%, rgba(72,219,251,0.7) 100%)',
                  display: 'flex',
                  flexDirecwhitepapertion: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 4,
                  opacity: 0.7,
                  transition: 'opacity 0.5s ease'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 20%, transparent 40%), linear-gradient(145deg, #48DBFB 0%, #FF6B6B 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    mb: 3
                  }}
                >
                  {icon}
                </motion.div>
                
                <Typography variant="h4" sx={{ 
                  color: 'white', 
                  fontWeight: 700,
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                  mb: 1
                }}>
                  Projected Revenue
                </Typography>
                <Typography variant="h3" sx={{ 
                  color: 'white',
                  fontWeight: 800,
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>
                  $2.4M/year
                </Typography>
              </motion.div>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Animated Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -50 }}
        animate={headerControls}
        variants={{
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          },
          hidden: { opacity: 0 }
        }}
      >


        
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.5px',
            background: 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 3
          }}>
            Lehn Business Empire
          </Typography>
          <Typography variant="h5" sx={{ 
            maxWidth: '800px', 
            mx: 'auto',
            background: 'linear-gradient(90deg, #FFFFFF 0%, #AAAAAA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Revenue-generating ventures powering the $LEHN ecosystem
          </Typography>
        </Box>
      </motion.div>

      {/* Merchandise */}
      <BusinessSection
        icon={<ShoppingBag sx={{ fontSize: '3rem', color: 'white' }} />}
        title="🚀 Limited-Edition Lehn Crypto Merch"
        content={
          <>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Our premium merchandise line serves as both brand builder and revenue generator, 
              creating physical touchpoints with the Lehn ecosystem.
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Product Lines:</Typography>
              <ul style={{ paddingLeft: '20px' }}>
                <li><Typography>Lehn-branded hoodies (3 seasonal designs)</Typography></li>
                <li><Typography>Signature T-shirt collection (5 designs)</Typography></li>
                <li><Typography>Ceramic mugs with NFC chips for digital verification</Typography></li>
                <li><Typography>Premium dog collars with QR code tags</Typography></li>
                <li><Typography>"Diamond Paw" NFT-linked hoodie (exclusive to NFT holders)</Typography></li>
              </ul>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Business Model:</Typography>
              <Typography paragraph>
                - 30% profit margin on standard items<br />
                - 50% margin on NFT-linked exclusive items<br />
                - 5% of all sales distributed to $LEHN stakers<br />
                - Accepts both fiat and $LEHN (15% discount for $LEHN payments)
              </Typography>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Roadmap:</Typography>
              <Typography paragraph>
                Q1 2024: Launch core collection (hoodies, shirts)<br />
                Q2 2024: Introduce NFC-enabled products<br />
                Q3 2024: "Diamond Paw" NFT integration<br />
                Q4 2024: Physical retail partnerships
              </Typography>
            </Box>
          </>
        }
        image="https://i.ibb.co/608ZHz0r/Whats-App-Image-2025-03-30-at-14-41-35-c79278cf-removebg-preview.png"
      />

      {/* Digital Advertising */}
      <BusinessSection
        icon={<Campaign sx={{ fontSize: '3rem', color: 'white' }} />}
        title="📺 Digital Advertising Network"
        content={
          <>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Lehn as brand ambassador with revenue share to $LEHN stakers
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Offerings:</Typography>
              <ul style={{ paddingLeft: '20px' }}>
                <li><Typography>Sponsored social media content (Instagram/TikTok)</Typography></li>
                <li><Typography>Exclusive brand partnership deals</Typography></li>
                <li><Typography>Product placement in Lehn content</Typography></li>
                <li><Typography>Co-branded marketing campaigns</Typography></li>
              </ul>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Revenue Model:</Typography>
              <Typography paragraph>
                - 70/30 revenue split (70% to Lehn Inc, 30% to $LEHN stakers)<br />
                - Tiered sponsorship packages ($50k-$500k)<br />
                - Performance-based influencer collaborations<br />
                - Programmatic ad inventory sales
              </Typography>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Projections:</Typography>
              <Typography paragraph>
                Year 1: 10 brand partnerships @ avg $150k each<br />
                Year 2: Expand to 25 partners with premium offerings<br />
                Year 3: Launch Lehn Advertising Network platform
              </Typography>
            </Box>
          </>
        }
        image="https://i.ibb.co/R4BLndzK/Chat-GPT-Image-Mar-30-2025-06-28-33-PM-1.png"
        reverse
      />

      {/* NFT Collectibles */}
      <BusinessSection
        icon={<Diamond sx={{ fontSize: '3rem', color: 'white' }} />}
        title="🖼️ NFT Collectibles"
        content={
          <>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              High-value digital assets with real-world perks and experiences
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Collections:</Typography>
              <ul style={{ paddingLeft: '20px' }}>
                <li><Typography>"Billionaire Paws" - 10,000 generative PFPs</Typography></li>
                <li><Typography>"Lehn Legacy" - 100 ultra-rare 1/1 artworks</Typography></li>
                <li><Typography>"Puppy Partners" - dynamic NFTs that evolve</Typography></li>
                <li><Typography>"VIP Access" - event tickets and experiences</Typography></li>
              </ul>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Utility:</Typography>
              <Typography paragraph>
                - Exclusive merchandise access<br />
                - Real-world event invitations<br />
                - Revenue share from secondary sales<br />
                - Governance rights in LehnDAO<br />
                - Staking rewards in $LEHN
              </Typography>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Pricing Strategy:</Typography>
              <Typography paragraph>
                PFPs: 0.25 ETH mint price<br />
                1/1s: Auction-based starting at 5 ETH<br />
                Dynamic NFTs: Subscription model (0.1 ETH/month)<br />
                VIP Passes: Tiered pricing $500-$5,000
              </Typography>
            </Box>
          </>
        }
        image="https://i.ibb.co/1fn7BJFB/Chat-GPT-Image-Mar-30-2025-05-12-53-PM.png"
      />

      {/* Premium Foods */}
      <BusinessSection
        icon={<LocalDining sx={{ fontSize: '3rem', color: 'white' }} />}
        title="🍗 Lehn Premium Foods"
        content={
          <>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Gourmet pet nutrition with crypto-powered rewards
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Product Lines:</Typography>
              <ul style={{ paddingLeft: '20px' }}>
                <li><Typography>"Filet Mignon" freeze-dried raw food</Typography></li>
                <li><Typography>"Billionaire Blend" superfood kibble</Typography></li>
                <li><Typography>"Crypto Crunch" training treats</Typography></li>
                <li><Typography>Limited-edition seasonal flavors</Typography></li>
              </ul>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Token Integration:</Typography>
              <Typography paragraph>
                - 5% cashback in $LEHN on all purchases<br />
                - Subscription model with NFT-based memberships<br />
                - Token holders get early access to new products<br />
                - 10% of profits distributed to stakers quarterly
              </Typography>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Distribution:</Typography>
              <Typography paragraph>
                Direct-to-consumer ecommerce<br />
                Select boutique pet stores<br />
                NFT-gated exclusive products<br />
                Monthly subscription boxes
              </Typography>
            </Box>
          </>
        }
        image="https://i.ibb.co/Y4PGcTSn/Chat-GPT-Image-Mar-30-2025-05-05-10-PM.png"
        reverse
      />

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box sx={{ 
          mt: 10,
          p: 6,
          borderRadius: 3,
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255,107,107,0.2) 0%, rgba(72,219,251,0.2) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated floating elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                background: 'white',
                borderRadius: '50%',
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
                opacity: 0.3
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() > 0.5 ? 10 : -10, 0],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          ))}
          
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, position: 'relative' }}>
            Ready to Invest in the Lehn Ecosystem?
          </Typography>
          <Typography sx={{ mb: 4, maxWidth: '600px', mx: 'auto', position: 'relative' }}>
            Join thousands of investors and brand enthusiasts building the future of pet-related crypto ventures.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ position: 'relative' }}
          >
            <Button 
              variant="contained"
              size="large"
              component={Link}
              to="/buy" // or href="/buy-lehn" if not using React Router      
              sx={{
                background: 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)',
                color: 'white',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 700,
                borderRadius: '50px',
                boxShadow: '0 10px 30px rgba(255, 105, 135, 0.4)'
              }}
            >
              Buy $LEHN Now
            </Button>
          </motion.div>
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

export default BusinessPlan;