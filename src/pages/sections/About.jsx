import { Container, Typography, Box, Grid, Paper, Button, Avatar, IconButton, Tooltip } from '@mui/material';
import { Twitter, Instagram, Telegram, Reddit } from '@mui/icons-material';
import { motion } from 'framer-motion';
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
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const typographyStyles = {
  h2: {
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
    fontWeight: 700,
    lineHeight: 1.2
  },
  h4: {
    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
    lineHeight: 1.5
  }
};

const SectionWrapper = ({ children }) => (
  <Box component="section" sx={{ width: '100%' }}>
    {children}
  </Box>
);

const GRADIENT = 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)';

const imageUrls = [
  "https://i.ibb.co/SXn1D8h5/Whats-App-Image-2025-03-30-at-14-41-35-7daadc16-removebg-preview.png",
  "https://i.ibb.co/Rksm5djb/Whats-App-Image-2025-03-30-at-14-41-35-86bf9034-removebg-preview.png",
  "https://i.ibb.co/ZRSj4hWc/Whats-App-Image-2025-03-30-at-14-41-35-26874834-removebg-preview.png",
  "https://i.ibb.co/608ZHz0r/Whats-App-Image-2025-03-30-at-14-41-35-c79278cf-removebg-preview.png",
  "https://i.ibb.co/Zp5T1JXn/Whats-App-Image-2025-03-30-at-14-41-36-e01c73cc-removebg-preview.png",
  "https://i.ibb.co/HpFt1CKF/IMG-20250330-WA0009.jpg"
];

const getRandomImage = () => {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

const LehnStory = () => {
  const storyParts = [
    {
      title: "Life of Luxury",
      content: "Lehn, a dog from the wealthy Lehn's family, lives a pampered life in a grand mansion. He enjoys gourmet meals, diamond-studded toys, and is chauffeured in a limousine.",
      flip: false
    },
    {
      title: "Growing Discontent",
      content: "Despite his wealth, Lehn feels empty and embarrassed by his lack of personal achievements. He overhears his parents discussing the family business and realizes he has no idea how to contribute.",
      flip: true
    },
    {
      title: "The Turning Point",
      content: "Lehn decides to become a billionaire on his own, without relying on his family's fortune. He starts studying business, real estate, and entrepreneurship to learn how to build his own empire.",
      flip: false
    },
    {
      title: "Birth of Lehn Tech",
      content: "Lehn discovers the pet tech industry and launches LehnTech, creating luxury, high-tech products for pets. His first product, a health-monitoring collar, becomes a hit among wealthy pet owners.",
      flip: true
    },
    {
      title: "Expansion and Success",
      content: "Lehn Tech grows rapidly, expanding into smart pet toys, automated feeding systems, and luxury pet hotels. Investors take notice, and Lehn's company becomes a global leader in pet technology.",
      flip: false
    },
    {
      title: "Billionaire Status",
      content: "Lehn is featured on Forbes as the first dog billionaire entrepreneur. He donates millions to animal shelters and creates a foundation for underprivileged pets.",
      flip: true
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section with Random Image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div variants={scaleUp}>
            <Avatar
              src={getRandomImage()}
              sx={{
                width: 400,
                height: 400,
                mx: 'auto',
                mb: 4,
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
              }}
            />
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography variant="h1" sx={{ 
              mb: 3,
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 800,
              lineHeight: 1.2
            }}>
              Lehn: From Pampered Pup to Billionaire
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography variant="h4" sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6
            }}>
              The Inspirational Journey of a Dog Who Built an Empire
            </Typography>
          </motion.div>
        </Box>
      </motion.div>

      {/* Story Sections with Random Images */}
      {storyParts.map((part, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box sx={{ 
            mb: 8,
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            background: index % 2 === 0 
              ? 'linear-gradient(135deg, rgba(255,107,107,0.05) 0%, rgba(72,219,251,0.05) 100%)' 
              : 'rgba(255,255,255,0.02)',
            borderLeft: '4px solid',
            borderImage: index % 2 === 0 ? 'linear-gradient(to bottom, #FF6B6B, #48DBFB) 1' : 'linear-gradient(to bottom, #48DBFB, #FF6B6B) 1'
          }}>
            <Grid container spacing={4} alignItems="center" direction={part.flip ? "row-reverse" : "row"}>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeIn}>
                  <Typography variant="h2" sx={{ 
                    mb: 3,
                    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                    fontWeight: 700,
                    background: index % 2 === 0 ? GRADIENT : 'linear-gradient(45deg, #48DBFB 30%, #FF6B6B 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {index + 1}. {part.title}
                  </Typography>
                  <Typography sx={{ 
                    mb: 3,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6
                  }}>
                    {part.content}
                  </Typography>
                  
                  {/* Random small image within text */}
                  <motion.div 
                    variants={scaleUp}
                    whileHover={{ scale: 1.05 }}
                    style={{ display: 'inline-block', margin: '0 15px 15px 0', float: part.flip ? 'right' : 'left' }}
                  >
                    <img 
                      src={getRandomImage()} 
                      alt="Lehn" 
                      style={{ 
                        width: 120, 
                        height: 120, 
                        borderRadius: '50%',
                        objectFit: 'cover',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                      }} 
                    />
                  </motion.div>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div
                  variants={scaleUp}
                  whileHover={{ 
                    rotate: index % 2 === 0 ? 2 : -2,
                    transition: { type: 'spring', stiffness: 300 }
                  }}
                >
                  <Box sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      display: 'block',
                      paddingTop: '100%'
                    }
                  }}>
                    <motion.img
                      src={getRandomImage()}
                      alt={part.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#e0f7fa'
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      ))}

      {/* Legacy Section with Random Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ 
          p: 6,
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(72,219,251,0.1) 100%)',
          textAlign: 'center',
          my: 8,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Floating random image */}
          <motion.div
            style={{
              position: 'absolute',
              top: 50,
              right: 50,
              zIndex: 0,
              opacity: 0.2
            }}
            animate={{
              y: [0, 20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src={getRandomImage()} 
              alt="Lehn" 
              style={{ 
                width: 200, 
                height: 200,
                objectFit: 'contain'
              }} 
            />
          </motion.div>
          
          <motion.div variants={fadeIn} style={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" sx={{ 
              mb: 3,
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
              fontWeight: 700,
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Lehn's Legacy
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn} style={{ position: 'relative', zIndex: 1 }}>
            <Typography sx={{ 
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6
            }}>
              Lehn proves that with hard work and determination, even a spoiled dog can rise from nothing to build an empire. He becomes a global symbol of entrepreneurship and success, inspiring pets and humans alike to pursue their dreams.
            </Typography>
          </motion.div>
          
          <motion.div
            variants={scaleUp}
            whileHover={{ scale: 1.05 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <Box sx={{
              p: 3,
              borderRadius: 3,
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                "From Mansion to Millions - The Lehn Story"
              </Typography>
            </Box>
          </motion.div>
          
          {/* Another floating random image */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 30,
              left: 30,
              zIndex: 0,
              opacity: 0.15
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <img 
              src={getRandomImage()} 
              alt="Lehn" 
              style={{ 
                width: 150, 
                height: 150,
                objectFit: 'contain'
              }} 
            />
          </motion.div>
        </Box>
      </motion.div>

      {/* Gallery Section with All Images */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ my: 8 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h3" sx={{ 
              mb: 4,
              textAlign: 'center',
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              fontWeight: 700
            }}>
              Lehn's Journey in Pictures
            </Typography>
          </motion.div>
          
          <Grid container spacing={3}>
            {imageUrls.map((url, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <motion.div
                  variants={scaleUp}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    transition: { type: 'spring', stiffness: 400, damping: 10 }
                  }}
                >
                  <Paper elevation={6} sx={{ 
                    borderRadius: 2,
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                    }
                  }}>
                    <Box sx={{
                      position: 'relative',
                      '&:before': {
                        content: '""',
                        display: 'block',
                        paddingTop: '100%'
                      }
                    }}>
                      <img 
                        src={url} 
                        alt={`Lehn ${index + 1}`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          backgroundColor: '#f5f5f5'
                        }} 
                      />
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

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
            background: 'linear-gradient(135deg, rgba(255,107,107,0.05) 0%, rgba(72,219,251,0.05) 100%)',
            borderRadius: 4,
            p: 4,
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
            <Typography variant="h2" gutterBottom sx={{
              ...typographyStyles.h2,
              mb: 3,
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Join the Pack
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                maxWidth: "600px",
                ...typographyStyles.h4,
                color: 'text.secondary',
              }}
            >
              Follow Lehn's journey to world domination
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 2, sm: 4 },
              flexWrap: "wrap",
              maxWidth: "600px",
            }}
          >
            {[
              { icon: <Twitter fontSize="inherit" />, name: "X (Twitter)", link: "https://x.com/LehnLife?t=16ME4k9jCrWeneDl02lbFA&s=08", size: "3rem" },
              { icon: <Instagram fontSize="inherit" />, name: "Instagram", link: "https://www.instagram.com/lehn.life1?igsh=cWdhNmVheml4emgy", size: "3rem" },
              { icon: <Telegram fontSize="inherit" />, name: "Telegram", link: "https://t.me/+cPbF0ZpY1VRlNzll", size: "3rem" },
              { icon: <Reddit fontSize="inherit" />, name: "Reddit", link: "https://www.reddit.com/u/lehnlife/s/pk0eZv20QZ", size: "3rem" },
            ].map((social, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Tooltip title={social.name} arrow>
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
                </Tooltip>
              </motion.div>
            ))}
          </Box>
          <Typography variant="body1" sx={{ mt: 4, color: 'text.secondary', maxWidth: '600px' }}>
            Connect with us for exclusive updates and behind-the-scenes content!
          </Typography>
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

export default LehnStory;