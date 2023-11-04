import React from 'react';
import { createRoot } from 'react-dom/client';
import backgroundImage from './assets/background.jpg';

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
    <h1>
        <center>Bem vindo</center>
    </h1>);
