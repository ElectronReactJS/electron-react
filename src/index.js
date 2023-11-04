import React from 'react';
import { createRoot } from 'react-dom/client';
import backgroundImage from './assets/background.jpg';
import logoLeft from './assets/linux.svg';
import logoRight from './assets/react.svg';
import EmailField from './component/EmailField';


const setBgImage = () => {
    const bgImage = `url(${backgroundImage})`;
    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <img src={logoLeft} alt="Logo MDS" style={logoStyle} />
            <img src={logoRight} alt="Logo FADEX" style={logoStyle} />
        </footer>
    );
}

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '97%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',  
}

const logoStyle = {
    width: '100px',  
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);

setBgImage();

root.render(
    <>
        <h1 style={{ color: 'white' }}>
            <center>Bem vindo</center>
        </h1>
        <EmailField />
        <Footer />
    </>
);
