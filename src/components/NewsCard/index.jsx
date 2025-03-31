import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function NewsCard({ title, date, description, image }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h4" component="h2">
          {title}
        </Typography>
        <Typography color="text.secondary" variant="subtitle2" gutterBottom>
          {date}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}