
// src/pages/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from '../router';
import theme from '../theme';

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);

root.render(
    <Router theme={theme} />
);