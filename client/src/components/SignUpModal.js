// client/src/components/SignUpModal.js
import React, { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Button, TextField, Typography, IconButton 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, sendSignInLinkToEmail } from 'firebase/auth';

const SignUpModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user.email && user.email.endsWith('.edu')) {
        console.log('Signed in successfully with Google.');
        window.location.href = '/dashboard';
      } else {
        alert('Please sign in with a .edu email address.');
        await auth.signOut();
      }
    } catch (error) {
      console.error('Error during Google sign in:', error);
    }
  };

  const handleEmailLinkSignIn = async () => {
    if (!email.endsWith('.edu')) {
      alert('Please enter a valid .edu email address.');
      return;
    }
    const actionCodeSettings = {
      url: window.location.origin + '/finishSignIn',
      handleCodeInApp: true,
    };
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      alert('Sign-in link sent! Check your email.');
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error sending email link:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Sign in with school email
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" gutterBottom>
          With your school email, we'll verify you're a real student and award you a badge.
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          label=".edu Email"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ flexDirection: 'column', gap: 1, padding: 2 }}>
        <Button 
          fullWidth 
          variant="contained" 
          color="primary" 
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button>
        <Typography variant="body2" color="textSecondary">
          OR
        </Typography>
        <Button 
          fullWidth 
          variant="contained" 
          color="secondary" 
          onClick={handleEmailLinkSignIn}
        >
          Send Sign-In Link
        </Button>
        <Typography variant="caption" color="textSecondary" align="center">
          No password setup required. We'll email you a one-time sign in link.
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpModal;
