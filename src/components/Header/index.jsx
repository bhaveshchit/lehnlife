import { useState } from 'react';
import { AppBar, Toolbar, Container, useMediaQuery, useTheme,Typography } from '@mui/material';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const sections = [
  { title: 'Home', url: 'https://www.lehn.life/', icon: '🏠' },
  { title: 'Business Proposal', url: 'https://www.lehn.life/proposal', icon: '📄' },
  { title: 'Whitepaper', url: 'https://www.lehn.life/whitepaper', icon: '📑' },
  { title: 'Tokenomics', url: 'https://www.lehn.life/tokenomics', icon: '💰' },
  { title: 'About Lehn', url: 'https://www.lehn.life/about', icon: '🐶' },
  { title: 'Blog', url: 'https://www.lehn.life/blog', icon: '📰' },
  // You can keep or remove these additional sections if needed
  // { title: 'Puppy News', url: '/puppy-news', icon: '🐶' },
  // { title: 'Health Tips', url: '/health-tips', icon: '🏥' },
  // { title: 'Training', url: '/training', icon: '🎓' },
  // { title: 'Adoption Stories', url: '/adoption-stories', icon: '🏠' }
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar position="sticky" elevation={0} sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Lehn.Life
          </Typography>
          
          {isMobile ? (
            <MobileMenu 
              sections={sections} 
              mobileOpen={mobileOpen} 
              setMobileOpen={setMobileOpen} 
            />
          ) : (
            <DesktopMenu sections={sections} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}