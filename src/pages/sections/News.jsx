import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { CalendarToday } from '@mui/icons-material';
import { Link,useParams } from 'react-router-dom';
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

const GRADIENT = 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)';

const blogPosts = [
  {
    id: 1,
    title: "Launching LehnCoin: Why I Had to Create My Own Currency",
    excerpt: "The inside story behind my decision to launch a cryptocurrency and what it means for the future of pet entrepreneurship",
    image: "https://i.ibb.co/SXn1D8h5/Whats-App-Image-2025-03-30-at-14-41-35-7daadc16-removebg-preview.png",
    date: "April 5, 2025",
    tags: ["Finance", "Blockchain"],
    fullContent: `
      <h2>Breaking Free From Traditional Finance</h2>
      <p>As my empire grew, I found myself increasingly frustrated with traditional banking systems. The limitations of fiat currency became apparent when I tried to:</p>
      <ul>
        <li>Make international transactions for my luxury pet hotels</li>
        <li>Pay my global team of canine employees</li>
        <li>Invest in cutting-edge pet technology startups</li>
      </ul>
      
      <h2>The Vision Behind LehnCoin</h2>
      <p>LehnCoin isn't just another cryptocurrency - it's the foundation of a new economic system where:</p>
      <ul>
        <li>Every transaction supports animal welfare causes</li>
        <li>Holders get exclusive access to my products</li>
        <li>The value is backed by my real-world business ventures</li>
      </ul>
      
      <h2>Why This Matters</h2>
      <p>This isn't about getting rich (I already am). It's about creating financial independence for pets worldwide and proving that dogs can innovate in the fintech space too.</p>
    `
  },
  {
    id: 2,
    title: "Maintaining the Billionaire Dog Lifestyle: My Daily Routine",
    excerpt: "From morning caviar to evening yacht parties - how I sustain my luxurious lifestyle without burning out",
    image: "https://i.ibb.co/Rksm5djb/Whats-App-Image-2025-03-30-at-14-41-35-86bf9034-removebg-preview.png",
    date: "April 3, 2025",
    tags: ["Lifestyle", "Wellness"],
    fullContent: `
      <h2>5AM: The Early Dog Gets The Worm</h2>
      <p>My day begins before sunrise with:</p>
      <ul>
        <li>Private yoga session with my canine instructor</li>
        <li>Cold plunge in my diamond-encrusted pool</li>
        <li>Breakfast of organic free-range quail eggs</li>
      </ul>
      
      <h2>The Workday of a Canine Mogul</h2>
      <p>Between 8AM-5PM, I:</p>
      <ul>
        <li>Review investments with my financial advisors (all dogs)</li>
        <li>Inspect new properties and business ventures</li>
        <li>Record episodes for my podcast "Barking Up The Right Tree"</li>
      </ul>
      
      <h2>Evening Unwind Protocol</h2>
      <p>My secret to avoiding burnout includes:</p>
      <ul>
        <li>Massages from my personal pet masseuse</li>
        <li>Meditation in my sensory deprivation tank</li>
        <li>Strict no-screen time after 8PM</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Why I'm Selling My Private Jet (And What I'm Buying Instead)",
    excerpt: "The surprising reasons behind selling my $50M Gulfstream and my next big transportation investment",
    image: "https://i.ibb.co/Zp5T1JXn/Whats-App-Image-2025-03-30-at-14-41-36-e01c73cc-removebg-preview.png",
    date: "March 30, 2025",
    tags: ["Travel", "Innovation"],
    fullContent: `
      <h2>The Problem With Traditional Private Jets</h2>
      <p>After 3 years of luxury air travel, I realized:</p>
      <ul>
        <li>Carbon footprint was unacceptable for an eco-conscious dog</li>
        <li>Maintenance costs exceeded $2M/year</li>
        <li>Couldn't land at all my private islands</li>
      </ul>
      
      <h2>My New Transportation Solution</h2>
      <p>Meet the future of canine travel:</p>
      <ul>
        <li>Custom-designed electric helicopter with bone-shaped rotors</li>
        <li>Onboard grooming station and treat bar</li>
        <li>AI co-pilot trained on 10,000 hours of my barking patterns</li>
      </ul>
      
      <h2>The Bigger Picture</h2>
      <p>This isn't just about comfort - it's about leading the transition to sustainable luxury travel for high-net-worth pets.</p>
    `
  },
  {
    id: 4,
    title: "From Bark to Business: Launching My Latest Venture",
    excerpt: "How I identified a gap in the pet market and built another 8-figure business in just 6 months",
    image: "https://i.ibb.co/608ZHz0r/Whats-App-Image-2025-03-30-at-14-41-35-c79278cf-removebg-preview.png",
    date: "March 28, 2025",
    tags: ["Business", "Startups"],
    fullContent: `
      <h2>Identifying the Opportunity</h2>
      <p>While vacationing on my private island, I noticed:</p>
      <ul>
        <li>No luxury sunscreen formulated specifically for dogs</li>
        <li>Existing products used harmful chemicals</li>
        <li>Wealthy pets were using human products at risk</li>
      </ul>
      
      <h2>Building Canine Cosmetics</h2>
      <p>In just 180 days, we:</p>
      <ul>
        <li>Assembled a team of veterinary chemists</li>
        <li>Developed 12 patent-pending formulas</li>
        <li>Secured distribution in 14 countries</li>
      </ul>
      
      <h2>The Lesson for Aspiring Petrepreneurs</h2>
      <p>The key is to solve problems you experience firsthand - no focus groups needed when you're the target market.</p>
    `
  },
  {
    id: 5,
    title: "Crafting an Unbeatable Reputation: My PR Strategy",
    excerpt: "How I went from spoiled rich dog to respected business magnate through strategic reputation management",
    image: "https://i.ibb.co/HpFt1CKF/IMG-20250330-WA0009.jpg",
    date: "March 25, 2025",
    tags: ["Branding", "Media"],
    fullContent: `
      <h2>The Perception Problem</h2>
      <p>Early in my career, I was seen as:</p>
      <ul>
        <li>Just another spoiled rich pet</li>
        <li>A novelty act without substance</li>
        <li>Not to be taken seriously in business</li>
      </ul>
      
      <h2>My 3-Pronged Reputation Strategy</h2>
      <p>1. <strong>Substance First</strong> - Built real businesses with real revenue</p>
      <p>2. <strong>Strategic Philanthropy</strong> - Donated 25% of profits to animal shelters</p>
      <p>3. <strong>Media Mastery</strong> - Only gave interviews to top-tier business publications</p>
      
      <h2>The Results</h2>
      <p>Today, I'm featured in:</p>
      <ul>
        <li>Forbes "30 Under 30" (dog years, of course)</li>
        <li>Wall Street Journal as a fintech innovator</li>
        <li>Harvard Business School case studies</li>
      </ul>
    `
  }
];

const BlogList = () => {
  return (
    <Container maxWidth="lg" sx={{ 
      py: 6,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <Box sx={{ 
          textAlign: 'center', 
          mb: 8,
          width: '100%'
        }}>
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
              Lehn's Business Chronicles
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography variant="h4" sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6
            }}>
              Exclusive insights from the world's most successful canine entrepreneur
            </Typography>
          </motion.div>
        </Box>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
        style={{ width: '100%' }}
      >
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{ 
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {blogPosts.map((post) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={post.id}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <motion.div
                variants={scaleUp}
                whileHover={{ y: -10 }}
                style={{ 
                  width: '100%',
                  maxWidth: '345px' // Standard card width
                }}
              >
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                  }
                }}>
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt={post.title}
                    sx={{ 
                      height: 200,
                      width: '100%',
                      objectFit: 'cover',
                      backgroundColor: '#f5f5f5'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1.5,
                      color: 'text.secondary'
                    }}>
                      <CalendarToday fontSize="small" sx={{ mr: 1 }} />
                      <Typography variant="caption">{post.date}</Typography>
                    </Box>
                    
                    <Typography variant="h5" sx={{ 
                      mb: 2,
                      fontWeight: 700,
                      lineHeight: 1.3
                    }}>
                      {post.title}
                    </Typography>
                    
                    <Typography sx={{ mb: 3 }}>
                      {post.excerpt}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      {post.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{ 
                            mr: 1, 
                            mb: 1,
                            background: GRADIENT,
                            color: 'white',
                            fontWeight: 600
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  
                  <Box sx={{ p: 2 }}>
                    <Button 
                      component={Link}
                      to={`/blog/${post.id}`}
                      variant="contained"
                      fullWidth
                      sx={{
                        background: GRADIENT,
                        color: 'white',
                        fontWeight: 600,
                        '&:hover': {
                          boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                        }
                      }}
                    >
                      Read Full Article
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
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

// Individual Blog Page Component
const BlogPost = () => {
    const { postId } = useParams(); // This extracts postId from the URL
  
  const post = blogPosts.find(p => p.id === parseInt(postId));
   if (!post) {
    return <Typography>Post not found</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <Box sx={{ mb: 6 }}>
          <Typography variant="h1" sx={{ 
            mb: 3,
            background: GRADIENT,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
            fontWeight: 800,
            lineHeight: 1.2
          }}>
            {post.title}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <CalendarToday fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              {post.date}
            </Typography>
          </Box>
          
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{ 
                mr: 1, 
                mb: 2,
                background: GRADIENT,
                color: 'white',
                fontWeight: 600
              }}
            />
          ))}
        </Box>
        
        <motion.div variants={fadeIn}>
          <Box sx={{ 
            mb: 6,
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={post.image} 
              alt={post.title}
              style={{ 
                width: '100%',
                height: 'auto',
                display: 'block'
              }} 
            />
          </Box>
        </motion.div>
        
        <Box 
          component="article"
          sx={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            '& h2': {
              fontSize: '1.75rem',
              fontWeight: 700,
              mt: 4,
              mb: 2,
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            },
            '& ul': {
              pl: 2,
              mb: 3
            },
            '& li': {
              mb: 1
            }
          }}
          dangerouslySetInnerHTML={{ __html: post.fullContent }}
        />
        
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button 
            component={Link}
            to="/blog"
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2
              }
            }}
          >
            Back to All Articles
          </Button>
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

export { BlogList, BlogPost };