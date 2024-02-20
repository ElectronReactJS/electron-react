
// src/Router.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import backgroundImage from './images/brazil-flag-4517×2992.png';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import AccountPage from './pages/AccountPage';
import WorkspacePage from './pages/WorkspacePage';
import { ThemeProvider } from '@mui/material/styles';

const setBgImage = () => {
    const bgImage = `url(${backgroundImage})`;
    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

const Router = ({ theme }) => {

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    setBgImage();

    return (
        <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/workspace" element={<WorkspacePage />} />
                    <Route path="/adminPage" element={<AdminPage />} />
                    <Route path="/accountPage" element={<AccountPage />} />
                </Routes>
            </MemoryRouter>
        </ThemeProvider>
    );
}

export default Router;