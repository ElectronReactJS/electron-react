import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const EmailField = ({ onValidEmail, onInvalidEmail }) => {
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleBlur = () => {
        if (validateEmail(email)) {
            setIsError(false);
            onValidEmail(); // Chama a função de callback quando o email é válido
        } else {
            setIsError(true);
            onInvalidEmail(); // Chama a função de callback quando o email é inválido
        }
    };

    return (
        <TextField
            id="outlined-e-mail-input"
            fullWidth
            error={isError}
            helperText={isError ? "Entrada incorreta." : ""}
            value={email}
            label="E-mail"
            type="email"
            onChange={(e) => {
                setEmail(e.target.value);
                if (isError) handleBlur(); // Verifica novamente se o usuário corrige o erro
            }}
            onBlur={handleBlur}
            placeholder="you@domin.com"
        />
    );
};

export default EmailField;
