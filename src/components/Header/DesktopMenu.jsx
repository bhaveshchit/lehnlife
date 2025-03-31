import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DesktopMenu({ sections }) {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {sections.map((section) => (
        <Button
          key={section.title}
          component={Link}
          to={section.url}
          startIcon={<span>{section.icon}</span>}
          sx={{ 
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)'
            }
          }}
        >
          {section.title}
        </Button>
      ))}
    </Box>
  );
}