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
            <img src={logoMDS} alt="Logo MDS" style={logoStyle} />
            <img src={logoFADEX} alt="Logo FADEX" style={logoStyle} />
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
    backgroundColor: 'rgba(255, 255, 255, 0.4)',  // fundo branco semi-transparente
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
