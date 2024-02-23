
// src/components/custom/surfaces/LoginPaper.tsx
import React, { useEffect } from 'react';
import Paper from '../../wrap/surfaces/PaperWrapper';
import Typography from '../../wrap/displays/TypographyWrapper';
import { LoginPaperTheme } from './LoginPaper.Theme';
import { useTheme } from '@mui/material/styles';

interface LoginPaperProps {
    title?: string;
    children?: React.ReactNode;
}

const LoginPaper: React.FC<LoginPaperProps> = ({ title, children }) => { 
    const currentTheme = useTheme();
    const loginPaperStyles = LoginPaperTheme(currentTheme);

  useEffect(() => {
    console.log('Login page mounted successfully');
  }, []);

  return (
    <Paper sx={loginPaperStyles}>
      <Typography color="inherit" variant="h5" component="h1">
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default LoginPaper;
