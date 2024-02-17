import React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import backgroundImage from '../images/brazil-flag-4517×2992.png';
import Login from './Login'; 
import MainBoard from './MainBoard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const setBgImage = () => {
    const bgImage = `url(${backgroundImage})`;
    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}


const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);

setBgImage();

root.render(
    <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/mainboard" element={<MainBoard />} />
                </Routes>
        </MemoryRouter>
    </ThemeProvider>
);

