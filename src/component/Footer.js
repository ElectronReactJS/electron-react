import React from 'react';
import logoLeft from '../assets/linux.svg';
import logoRight from '../assets/react.svg';

const Footer = (props) => {
    return (
        <footer style={footerStyle}>
            <img src={logoLeft} alt="Logo Left" style={logoStyle} />
            {props.children}
            <img src={logoRight} alt="Logo Right" style={logoStyle} />
        </footer>
    );
}


const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '97%',
    height: '40vh',  
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',  
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
}

const logoStyle = {
    width: '100px',  
}

export default Footer;