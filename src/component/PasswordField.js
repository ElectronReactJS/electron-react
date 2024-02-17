import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const PasswordField = ({ onValidPassword, onInvalidPassword }) => {
    const [psswd, setPsswd] = useState('');
    const [isError, setIsError] = useState(false);

    const validatePassword = (psswd) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(psswd);
    };

    const handleBlur = () => {
        if (validatePassword(psswd)) {
            setIsError(false);
            onValidPassword(); // Chama a função de callback quando o psswd é válido
        } else {
            setIsError(true);
            onInvalidPassword(); // Chama a função de callback quando o psswd é inválido
        }
    };

    return (
        <TextField
            id="outlined-password-input"
            fullWidth
            error={isError}
            helperText={isError ? "Entrada incorreta." : ""}
            value={psswd}
            label="Senha"
            type="password"
            onChange={(e) => {
                setPsswd(e.target.value);
                if (isError) handleBlur(); // Verifica novamente se o usuário corrige o erro
            }}
            onBlur={handleBlur}
            placeholder="**********"
        />
    );
};

export default PasswordField;
