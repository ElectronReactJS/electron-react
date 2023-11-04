import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);

root.render(<h1>This message is being logged by "renderer.js", included via webpack</h1>);
