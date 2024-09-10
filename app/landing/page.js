import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Boostio</h1>
      <p className="text-lg text-center mb-6">Start your fitness journey today!</p>
      <div className="flex">
        {/* Trigger the SignUp modal when "Get Started" is clicked */}
        <SignedOut>
          <SignUpButton mode="modal">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              Get Started
            </Button>
          </SignUpButton>
        </SignedOut>
        
        {/* SignInButton triggers the modal */}
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="contained" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        
        {/* If signed in, show a Go to Dashboard button */}
        <SignedIn>
          <Button variant="contained" color="primary" href="/dashboard">
            Go to Dashboard
          </Button>
        </SignedIn>
      </div>
    </div>
  );
}
