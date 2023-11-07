import React from 'react';

const Footer = (props) => {
    return (
        <footer style={footerStyle}>
            {props.children}
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
}

const logoStyle = {
    width: '100px',  
}

export default Footer;