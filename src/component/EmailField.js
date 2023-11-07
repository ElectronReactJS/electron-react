import React, { useState } from 'react';
import successImage from '../assets/success.svg';
import errorImage from '../assets/error.svg';
import atImage from '../assets/envelope-solid.svg'; 

const EmailField = () => {
    const [email, setEmail] = useState('');
    const [validationImage, setValidationImage] = useState(atImage);

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        if (emailValue.length === 0) {
            setValidationImage(atImage);
        } else {
            setValidationImage(validateEmail(emailValue) ? successImage : errorImage);
        }
    };

    const handleBlur = () => {
        if (email.length > 0) {
            setValidationImage(validateEmail(email) ? successImage : errorImage);
        }
    };

    return (
        <div style={emailFieldStyle}>
            <input
                type="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyPress={(e) => e.key === 'Enter' && handleBlur()}
                style={inputStyle}
                placeholder='youremail@domaon.com.br'
            />
            <img src={validationImage} alt="Validation status" style={imageStyle} />
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
    position: 'absolute', 
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const inputStyle = {
    width: '100%', // Changed from '80%' to '100%' to fill the container
    padding: '5px 30px 5px 5px', // Added right padding to make room for the icon
    boxSizing: 'border-box', // Ensure padding doesn't affect the total width
};

const imageStyle = {
    position: 'absolute', // Position absolutely within the relative container
    right: '10px', // Distance from the right edge of the container
    top: '50%', // Center vertically
    transform: 'translateY(-50%)', // Center vertically
    width: '20px',
    padding: '4px'
};

export default EmailField;