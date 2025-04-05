import { useState } from 'react';
import { AppBar, Toolbar, Container, useMediaQuery, useTheme, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
  { title: 'Home', url: 'https://www.lehn.life/' },
  { title: 'Proposal', url: 'https://www.lehn.life/proposal' },
  { title: 'Whitepaper', url: 'https://www.lehn.life/whitepaper' },
  { title: 'Tokenomics', url: 'https://www.lehn.life/tokenomics' },
  { title: 'About', url: 'https://www.lehn.life/about' },
  { title: 'Blog', url: 'https://www.lehn.life/blog' },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            Lehn.Life
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {sections.map((section) => (
                  <MenuItem
                    key={section.title}
                    component="a"
                    href={section.url}
                    onClick={handleMenuClose}
                  >
                    {section.title}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {sections.map((section) => (
                <Button
                  key={section.title}
                  color="inherit"
                  href={section.url}
                >
                  {section.title}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
