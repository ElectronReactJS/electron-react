
// src/router.tsx

import React from 'react';
import theme from './theme'; 
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/login/LoginPage';

// Get the navigation element
const navigationElement = document.getElementById('navigation');
const root = createRoot(navigationElement);

// Render the first React component
if (navigationElement) {
    root.render(
        <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginPage title="Login"/>} />
                    {/* <Route path="/main" element={<MainPage />} /> */}
                </Routes>
            </MemoryRouter>
        </ThemeProvider>
    );
  }
