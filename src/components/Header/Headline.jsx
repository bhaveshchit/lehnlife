import { Box, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const MovingHeadlines = () => {
  const headlines = [
    "🚀 LehnCoin just hit $1M market cap!",
    "🔥 New exchange listing confirmed for next week",
    "📢 Lehn's Treats partnership announced with major pet brands",
    "💎 10,000 LEHN airdrop happening this Friday",
    "🎮 Play-to-earn game beta launching soon"
  ];

  // Double the array for seamless looping
  const doubledHeadlines = [...headlines, ...headlines];

  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) { // Infinite loop
        await controls.start({
          x: '-100%',
          transition: {
            duration: 60, // Slower speed (60 seconds for full loop)
            ease: "linear"
          }
        });
        // Reset position without animation
        controls.set({ x: '0%' });
      }
    };
    sequence();
  }, [controls]);

  return (
    <Box sx={{
      width: '100%',
      overflow: 'hidden',
      bgcolor: 'background.paper',
      py: 1.5,
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'divider',
      position: 'relative',
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        width: '100px',
        height: '100%',
        zIndex: 2
      },
      '&::before': {
        left: 0,
        background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
      },
      '&::after': {
        right: 0,
        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'
      }
    }}>
      <motion.div
        animate={controls}
        style={{
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4rem',
          position: 'relative',
          left: '100%' // Start from right edge
        }}
      >
        {doubledHeadlines.map((headline, index) => (
          <Box key={index} sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1
          }}>
            <Typography variant="body1" sx={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'text.primary',
              display: 'inline-flex',
              alignItems: 'center'
            }}>
              {headline}
            </Typography>
            {index < doubledHeadlines.length - 1 && (
              <Box sx={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                bgcolor: 'primary.main'
              }} />
            )}
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

export default MovingHeadlines;