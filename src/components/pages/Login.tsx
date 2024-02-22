
// src/components/pages/Login.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface LoginProps {
  title?: string; 
}

const paperStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '30px', 
}

const Login: React.FC<LoginProps> = ({ title = "Login" }) => { 
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Login component mounted successfully');
  }, []);

  const handleValidPassword = () => {
    navigate('/workspace');
  };

  const handleInvalidPassword = () => {
    navigate('/workspace');
  };

  return (
    <Box>
      <Typography color="inherit" variant="h5" component="h1">
        {title}
      </Typography>
    </Box>
  );
};

export default Login;
