import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Typography variant="h2" gutterBottom>
            Welcome to Boostio
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Join us today to start tracking your fitness goals, meal plans, and more!
          </Typography>
          <Box mt={4}>
            {/* Replace the link to the sign-up page with the SignUpButton for modal */}
            <SignedOut>
              <SignUpButton mode="modal">
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>

            {/* Show SignInButton to trigger Clerk modal */}
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outlined" color="primary">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            {/* Optionally, display a different button when user is signed in */}
            <SignedIn>
              <Button variant="contained" color="primary" href="/dashboard">
                Go to Dashboard
              </Button>
            </SignedIn>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
