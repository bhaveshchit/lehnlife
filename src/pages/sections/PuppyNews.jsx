import { Container, Typography } from '@mui/material';

export default function PuppyNews() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom>
        Puppy News
      </Typography>
      <Typography>
        Latest updates and stories about puppies around the world.
      </Typography>
    </Container>
  );
}