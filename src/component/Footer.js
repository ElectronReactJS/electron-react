import React from 'react';
import logoLeft from '../assets/linux.svg';
import logoRight from '../assets/react.svg';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <img src={logoLeft} alt="Logo Left" style={logoStyle} />
            <img src={logoRight} alt="Logo Right" style={logoStyle} />
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

export default Footer;