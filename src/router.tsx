
// src/router.tsx

import React from 'react';
import theme from './theme'; 
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MainFrame from './pages/MainFrame';
import LoginPage from './pages/login/LoginPaper';

// Get the navigation element
const navigationElement = document.getElementById('navigation');
const root = createRoot(navigationElement);

// Render the first React component
if (navigationElement) {
    root.render(
        <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/main" element={<MainFrame />} />
                </Routes>
            </MemoryRouter>
        </ThemeProvider>
    );
  }
