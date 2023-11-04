import React from 'react';
import { createRoot } from 'react-dom/client';

const setBgImage = () => {
    const bgImage = 'url(./assets/background.jpg)';  // Ajuste o caminho conforme necessário
    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);

root.render(<h1>This message is being logged by "renderer.js", included via webpack</h1>);
