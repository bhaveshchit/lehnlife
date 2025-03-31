import { Container, Typography, Box, Grid, Paper,Button, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
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

const GRADIENT = 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)';
const COLORS = {
  primary: '#FF6B6B',
  secondary: '#48DBFB',
  accent: '#A78BFA',
  success: '#4ECDC4',
  warning: '#FF9E53'
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: '10px', fontWeight: 'bold' }}
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Tokenomics = () => {
  // Updated chart data with 70% liquidity and 30% locked
  const supplyData = [
    { name: 'Liquidity Pool', value: 70, color: COLORS.primary },
    { name: 'Locked Reserves', value: 30, color: COLORS.secondary }
  ];

  const phase1Data = [
    { name: 'DEX Liquidity', value: 50, color: COLORS.primary },
    { name: 'CEX Listings', value: 20, color: COLORS.warning },
    { name: 'Development', value: 15, color: COLORS.secondary },
    { name: 'Marketing', value: 10, color: COLORS.accent },
    { name: 'Team (Vested)', value: 5, color: COLORS.success }
  ];

  const phase2Data = [
    { name: 'Ecosystem Growth', value: 40, color: COLORS.primary },
    { name: 'Staking Rewards', value: 30, color: COLORS.success },
    { name: 'Partnerships', value: 20, color: COLORS.warning },
    { name: 'Community Treasury', value: 10, color: COLORS.accent }
  ];

  const futureVentures = [
    { name: 'Merchandise Revenue', date: 'Q3 2024', tokens: '5M $LEHN' },
    { name: 'Advertising Network', date: 'Q4 2024', tokens: '4M $LEHN' },
    { name: 'Premium Foods Launch', date: 'Q1 2025', tokens: '3M $LEHN' },
    { name: 'Future Expansions', date: 'TBD', tokens: 'Remaining Supply' }
  ];

  const benefits = [
    {
      category: 'Liquidity Providers',
      items: [
        '70% of supply dedicated to liquidity',
        'DEX and CEX market making',
        'Reduced price volatility',
        'Sustainable trading environment'
      ],
      icon: '💧'
    },
    {
      category: 'Locked Benefits',
      items: [
        '30% locked for ecosystem growth',
        'Gradual release with milestones',
        'Prevents market dumping',
        'Long-term value appreciation'
      ],
      icon: '🔒'
    },
    {
      category: 'Holder Perks',
      items: [
        'Reduced trading fees',
        'Early access to new products',
        'Governance voting rights',
        'Revenue sharing opportunities'
      ],
      icon: '🎁'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              LehnCoin Tokenomics
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography variant="h4" sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6
            }}>
              Sustainable Economic Model with Strong Liquidity Foundation
            </Typography>
          </motion.div>
        </Box>
      </motion.div>

      {/* Total Supply */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ 
          mb: 8,
          p: 4,
          borderRadius: 3,
          background: 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(72,219,251,0.1) 100%)',
          borderLeft: '4px solid',
          borderImage: 'linear-gradient(to bottom, #FF6B6B, #48DBFB) 1'
        }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h2" sx={{ 
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Total Supply: 100,000,000 $LEHN
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={scaleUp}>
                <Box sx={{ height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={supplyData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        innerRadius={40}
                        dataKey="value"
                      >
                        {supplyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                  Liquidity & Locked Allocation
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                  <motion.li variants={fadeIn}>
                    <Typography sx={{ fontSize: '1.1rem' }}>
                      <strong>70% (70M $LEHN) Liquidity:</strong> Dedicated to DEX/CEX pools for stable trading
                    </Typography>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <Typography sx={{ fontSize: '1.1rem' }}>
                      <strong>30% (30M $LEHN) Locked:</strong> Reserved for ecosystem growth and future development
                    </Typography>
                  </motion.li>
                </Box>
                <motion.div 
                  variants={scaleUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <Chip 
                    label="Liquidity Locked" 
                    sx={{ 
                      background: GRADIENT,
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1rem',
                      p: 2,
                      mr: 1
                    }} 
                  />
                  <Chip 
                    label="Multi-Sig Treasury" 
                    sx={{ 
                      background: GRADIENT,
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1rem',
                      p: 2
                    }} 
                  />
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* Phase 1 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ mb: 8 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h2" sx={{ 
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Phase 1 - Initial Liquidity
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              70M $LEHN Allocated to Liquidity (70% of Total Supply)
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography sx={{ mb: 3, fontSize: '1.1rem' }}>
              <strong>Primary Objectives:</strong> Establish deep liquidity pools, ensure price stability, and enable efficient trading
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} sx={{ my: 4 }}>
            <Grid item xs={12} md={6}>
              <motion.div variants={scaleUp}>
                <Paper elevation={3} sx={{ 
                  p: 3, 
                  height: '100%', 
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                  }
                }}>
                  <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
                    Liquidity Allocation
                  </Typography>
                  <Box sx={{ height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={phase1Data}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={80}
                          innerRadius={40}
                          dataKey="value"
                        >
                          {phase1Data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Paper elevation={3} sx={{ 
                  p: 3, 
                  height: '100%', 
                  borderRadius: 3,
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                }}>
                  {phase1Data.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      whileHover={{ x: 10 }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          <span style={{ 
                            display: 'inline-block',
                            width: '12px',
                            height: '12px',
                            backgroundColor: item.color,
                            marginRight: '8px',
                            borderRadius: '2px'
                          }}></span>
                          {item.name}: {item.value}% ({item.value * 0.7}M $LEHN)
                        </Typography>
                        {index === 0 && (
                          <Typography variant="body2" sx={{ ml: '20px', fontStyle: 'italic' }}>
                            Permanent DEX liquidity with 5-year lock
                          </Typography>
                        )}
                        {index === 1 && (
                          <Typography variant="body2" sx={{ ml: '20px', fontStyle: 'italic' }}>
                            Centralized exchange listings
                          </Typography>
                        )}
                        {index === 4 && (
                          <Typography variant="body2" sx={{ ml: '20px', fontStyle: 'italic' }}>
                            3-year linear vesting
                          </Typography>
                        )}
                      </Box>
                      {index < phase1Data.length - 1 && <Divider sx={{ my: 1 }} />}
                    </motion.div>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
          
          <motion.div variants={fadeIn}>
            <Box sx={{ 
              p: 3, 
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(72,219,251,0.1) 0%, rgba(255,107,107,0.1) 100%)',
              textAlign: 'center'
            }}>
              <Typography sx={{ fontWeight: 700, fontSize: '1.2rem' }}>
                Projected Liquidity: $10M-$15M
              </Typography>
              <Typography sx={{ mt: 1, fontStyle: 'italic' }}>
                Initial Target: $0.15 - $0.30 per $LEHN
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </motion.section>

      {/* Phase 2 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ mb: 8 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h2" sx={{ 
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Phase 2 - Ecosystem Growth
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              30M $LEHN Locked (30% of Total Supply)
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography sx={{ mb: 3, fontSize: '1.1rem' }}>
              <strong>Strategic Allocation:</strong> Gradually released tokens will power ecosystem expansion and community rewards
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} sx={{ my: 4 }}>
            <Grid item xs={12} md={6}>
              <motion.div variants={scaleUp}>
                <Paper elevation={3} sx={{ 
                  p: 3, 
                  height: '100%', 
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                  }
                }}>
                  <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
                    Locked Allocation
                  </Typography>
                  <Box sx={{ height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={phase2Data}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={80}
                          innerRadius={40}
                          dataKey="value"
                        >
                          {phase2Data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Paper elevation={3} sx={{ 
                  p: 3, 
                  height: '100%', 
                  borderRadius: 3,
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                }}>
                  {phase2Data.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      whileHover={{ x: 10 }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          <span style={{ 
                            display: 'inline-block',
                            width: '12px',
                            height: '12px',
                            backgroundColor: item.color,
                            marginRight: '8px',
                            borderRadius: '2px'
                          }}></span>
                          {item.name}: {item.value}% ({item.value * 0.3}M $LEHN)
                        </Typography>
                        {index === 0 && (
                          <Typography variant="body2" sx={{ ml: '20px', fontStyle: 'italic' }}>
                            For new product development and partnerships
                          </Typography>
                        )}
                        {index === 1 && (
                          <Typography variant="body2" sx={{ ml: '20px', fontStyle: 'italic' }}>
                            Community rewards with 12-month lock
                          </Typography>
                        )}
                      </Box>
                      {index < phase2Data.length - 1 && <Divider sx={{ my: 1 }} />}
                    </motion.div>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
          
          <motion.div variants={fadeIn}>
            <Box sx={{ 
              p: 3, 
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(72,219,251,0.1) 0%, rgba(255,107,107,0.1) 100%)',
              textAlign: 'center'
            }}>
              <Typography sx={{ fontWeight: 700, fontSize: '1.2rem' }}>
                Projected Market Capitalization: $20M-$30M
              </Typography>
              <Typography sx={{ mt: 1, fontStyle: 'italic' }}>
                Year 2 Target: $0.50+ per $LEHN
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </motion.section>

      {/* Future Phases */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ mb: 8 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h2" sx={{ 
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Future Phases & Ecosystem Scaling
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Typography sx={{ mb: 3, fontSize: '1.1rem' }}>
              The locked 30% will be strategically released to fuel ecosystem growth, with allocations tied to specific milestones.
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} sx={{ my: 4 }}>
            <Grid item xs={12} md={6}>
              <motion.div variants={scaleUp}>
                <Paper elevation={3} sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(72,219,251,0.1) 0%, rgba(255,107,107,0.1) 100%)'
                }}>
                  <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
                    Planned Allocation Releases
                  </Typography>
                  <Timeline position="alternate">
                    {futureVentures.map((venture, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        whileHover={{ scale: 1.02 }}
                      >
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot sx={{ background: COLORS.primary }} />
                            {index < futureVentures.length - 1 && <TimelineConnector />}
                          </TimelineSeparator>
                          <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                              {venture.name}
                            </Typography>
                            <Typography>
                              <strong>{venture.date}</strong> - {venture.tokens}
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                      </motion.div>
                    ))}
                  </Timeline>
                </Paper>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeIn}>
                <Paper elevation={3} sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(72,219,251,0.1) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
                    Projected Value Growth
                  </Typography>
                  <Box sx={{ 
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 3,
                    p: 3,
                    mb: 3
                  }}>
                    <Typography sx={{ fontWeight: 600, mb: 1 }}>
                      Year 3+ Target:
                    </Typography>
                    <Typography variant="h4" sx={{ color: COLORS.success }}>
                      $111.00
                    </Typography>
                    <Typography sx={{ mt: 1, fontStyle: 'italic' }}>
                      As full ecosystem matures with multiple revenue streams
                    </Typography>
                  </Box>
                  <Typography sx={{ textAlign: 'center', fontStyle: 'italic' }}>
                    "Strong liquidity foundation ensures price stability while locked tokens drive long-term growth"
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </motion.section>

      {/* Holder Benefits */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Box sx={{ mb: 8 }}>
          <motion.div variants={fadeIn}>
            <Typography variant="h2" sx={{ 
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}>
              Holder Benefits & Incentives
            </Typography>
          </motion.div>
          
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  variants={scaleUp}
                  whileHover={{ y: -10 }}
                >
                  <Paper elevation={3} sx={{ 
                    p: 4, 
                    height: '100%', 
                    borderRadius: 3,
                    background: `linear-gradient(135deg, rgba(${index === 0 ? '255,107,107' : index === 1 ? '72,219,251' : '167,139,250'},0.1) 0%, rgba(255,255,255,0.1) 100%)`,
                    borderTop: `4px solid ${index === 0 ? COLORS.primary : index === 1 ? COLORS.secondary : COLORS.accent}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <Typography variant="h3" sx={{ 
                      mb: 2, 
                      textAlign: 'center',
                      fontSize: '3rem'
                    }}>
                      {benefit.icon}
                    </Typography>
                    <Typography variant="h5" sx={{ 
                      mb: 3, 
                      textAlign: 'center',
                      color: index === 0 ? COLORS.primary : index === 1 ? COLORS.secondary : COLORS.accent
                    }}>
                      {benefit.category}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {benefit.items.map((item, i) => (
                        <motion.li 
                          key={i}
                          variants={fadeIn}
                          whileHover={{ x: 5 }}
                        >
                          <Typography sx={{ mb: 1 }}>
                            {item}
                          </Typography>
                        </motion.li>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.section>

      {/* Final CTA */}
      <motion.div
  initial="hidden"
  whileInView="visible"
  variants={staggerContainer}
  viewport={{ once: true, margin: "-100px" }}
>
  <Box sx={{ 
    p: 6,
    borderRadius: 3,
    background: 'linear-gradient(135deg, rgba(255,107,107,0.2) 0%, rgba(72,219,251,0.2) 100%)',
    textAlign: 'center'
  }}>
    <motion.div variants={fadeIn}>
      <Typography variant="h3" sx={{ 
        mb: 3,
        fontSize: { xs: '1.75rem', sm: '2.5rem' },
        fontWeight: 700
      }}>
        Join the Lehn Economic Revolution
      </Typography>
    </motion.div>
    
    <motion.div variants={fadeIn}>
      <Typography sx={{ 
        mb: 4,
        maxWidth: '800px',
        mx: 'auto',
        fontSize: '1.1rem'
      }}>
        $LEHN combines strong liquidity with strategic growth for sustainable value creation.
      </Typography>
    </motion.div>
    
    <motion.div
      variants={scaleUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        component={Link}
        to="/buy-lehn" // or href="/buy-lehn" if not using React Router
        sx={{
          background: GRADIENT,
          color: 'white',
          border: 'none',
          padding: '16px 48px',
          fontSize: '1.2rem',
          fontWeight: 700,
          borderRadius: '50px',
          boxShadow: '0 8px 32px rgba(255, 105, 135, 0.3)',
          cursor: 'pointer',
          textDecoration: 'none', // removes underline
          '&:hover': {
            boxShadow: '0 12px 40px rgba(255, 105, 135, 0.5)'
          }
        }}
      >
        Get $LEHN Now 🚀
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

export default Tokenomics;