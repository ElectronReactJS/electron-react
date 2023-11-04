import React, { useState } from 'react';
import successImage from '../assets/success.svg';
import errorImage from '../assets/error.svg';

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
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const inputStyle = {
    width: '80%',
    padding: '5px',
};

const imageStyle = {
    width: '20px',
    marginLeft: '10px',
};

export default EmailField;
