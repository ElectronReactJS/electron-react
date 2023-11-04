import React from 'react';
import { createRoot } from 'react-dom/client';
import backgroundImage from './assets/background.jpg';
import logoMDS from './assets/logoMDS.png';
import logoFADEX from './assets/logoFADEX.jpg';
import successIcon from './assets/success.svg';
import errorIcon from './assets/error.svg';

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
    const [validationImage, setValidationImage] = useState(null);

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleBlur = () => {
        setValidationImage(validateEmail(email) ? successImage : errorImage);
    };

    return (
        <div style={emailFieldStyle}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                onKeyPress={(e) => e.key === 'Enter' && handleBlur()}
                style={inputStyle}
            />
            {validationImage && <img src={validationImage} alt="Validation status" style={imageStyle} />}
        </div>
    );
};

const emailFieldStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: '300px',
    padding: '10px',
};

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
        <h1 style={{ color: 'white' }}>
            <center>Bem vindo</center>
        </h1>
        <EmailField />
        <Footer />
    </>
);
