import React from 'react';
import { createRoot } from 'react-dom/client';
import backgroundImage from './assets/background.jpg';

import logoMDS from './assets/logoMDS.png';
import logoFADEX from './assets/logoFADEX.jpg';

const setBgImage = () => {
    const bgImage = `url(${backgroundImage})`;
    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <img src={logo1} alt="Logo 1" style={logoStyle} />
            <img src={logo2} alt="Logo 2" style={logoStyle} />
        </footer>
    );
}

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // fundo branco semi-transparente
}

const logoStyle = {
    width: '100px',  // ou qualquer outro tamanho que desejar
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);

setBgImage();

root.render(
    <>
        <h1>
            <center>Bem vindo</center>
        </h1>
        <Footer />
    </>
);
