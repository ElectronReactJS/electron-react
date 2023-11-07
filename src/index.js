import React from 'react';
import { createRoot } from 'react-dom/client';
import EmailField from './component/EmailField';
import Footer from './component/Footer';
import backgroundImage from './assets/background.jpg';

const setBgImage = () => {
    const bgImage = `url(${backgroundImage})`;
    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

setBgImage();

const container = document.getElementById('app');
const app = createRoot(container);
app.render(
  <Footer>
    <EmailField />
  </Footer>
);