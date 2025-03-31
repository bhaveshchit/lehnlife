import { 
    IconButton, 
    Drawer, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText 
  } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import CloseIcon from '@mui/icons-material/Close';
  import { Link } from 'react-router-dom';
  
  export default function MobileMenu({ sections, mobileOpen, setMobileOpen }) {
    return (
      <>
        <IconButton
          color="inherit"
          edge="end"
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{ ml: 2 }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          PaperProps={{
            sx: {
              width: 240,
              backgroundColor: 'background.paper'
            }
          }}
        >
          <List>
            {sections.map((section) => (
              <ListItem key={section.title} disablePadding>
                <ListItemButton 
                  component={Link} 
                  to={section.url}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    {section.icon}
                  </ListItemIcon>
                  <ListItemText primary={section.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    );
  }