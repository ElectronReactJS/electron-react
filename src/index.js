import React from 'react';
import { createRoot } from 'react-dom/client';
import backgroundImage from './assets/background.jpg';
import logoMDS from './assets/logoMDS.png';
import logoFADEX from './assets/logoFADEX.jpg';
import successIcon from './assets/success.png';
import errorIcon from './assets/error.png';

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

const EmailField = () => {
    const [email, setEmail] = useState('');
    const [validation, setValidation] = useState(null);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleBlur = () => {
        setValidation(validateEmail(email));
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setValidation(validateEmail(email));
        }
    }

    return (
        <div style={emailFieldStyle}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
                placeholder="Enter your email"
                style={inputStyle}
            />
            {validation !== null && (
                <img
                    src={validation ? successIcon : errorIcon}
                    alt={validation ? 'Success' : 'Error'}
                    style={iconStyle}
                />
            )}
        </div>
    );
}

const emailFieldStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
}

const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
}

const iconStyle = {
    width: '20px',
    marginLeft: '10px',
}

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '97%',
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
