
// src/pages/login/LoginPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Paper from '../../components/wrap/surfaces/PaperWrapper';
import TextField from '../../components/wrap/inputs/TextFieldWrapper';
import Password from '../../components/wrap/inputs/PasswordFieldWrapper';
import Typography from '../../components/wrap/displays/TypographyWrapper';
import { LoginPaperTheme } from './LoginPaper.Theme';
import loginImage from '../../images/logo128x128.png';
import TextFieldsIcon from '@mui/icons-material/TextFields';

const LoginPage: React.FC<any> = () => { 
    const navigate = useNavigate();
    const currentTheme = useTheme();
    const loginPaperStyles = LoginPaperTheme(currentTheme);
    const label = "Company Name";
    const [usernameErrorMessage, setUsernameErrorMessage] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const goToMain = () => {
        if( validateUsername(username) && validatePassword(password) ) {
            navigate('/main');
        }
    };
      
    const validateUsername = (username: string) => {
        setUsernameErrorMessage("");
        if (username 
            && username !== null 
            && username !== '' 
            && username.length > 0) {
                if (username.includes('@')) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(username)) {
                        setUsernameErrorMessage("Invalid e-mail.");
                        return false;
                    }
                    return true;
                }
                if (username.length < 5) {
                    setUsernameErrorMessage("The minimum username length is 5 characters.");
                    return false;
                } 
                if (username.length > 15) {
                    setUsernameErrorMessage("The maximum username length is 15 characters.");
                    return false;
                } 
                if (/\s/.test(username)) {
                    setUsernameErrorMessage("The username cannot contain spaces.");
                    return false;
                } 
                if (!/^[a-zA-Z0-9_]+$/.test(username)) {
                    setUsernameErrorMessage("The username can only contain letters, numbers, and underscores.");
                    return false;
                }
        } 
        setUsernameErrorMessage("");
        return true; 
    }
    
    const onChangeHandlerUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newUsername: string = event.target.value;
        const trimmedUsername = newUsername.trim;
        setUsername(trimmedUsername); 
        validateUsername(trimmedUsername);
    }    

    const validatePassword = (password: string) => {
        return password?.length > 2; 
    }

    const onChangeHandlerPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword); 
        if (validatePassword(newPassword)) goToMain();
    }

    return (
        <Paper sx={loginPaperStyles} elevation={3}>
                <Typography color="inherit" variant="h5" component="h1">
                    {label}
                </Typography>
                <img src={loginImage} alt="Logo"/>
            <TextField label="Username or e-mail" 
                        placeholder="endereco@dominio.gov.br"
                        errorMessage={usernameErrorMessage}
                        onChange={onChangeHandlerUsername}
                        icon={<TextFieldsIcon />}
                        value={username}/>
            <Password password={password} 
                        onChangeHandler={onChangeHandlerPassword} />
        </Paper>
    );
  };
  
  export default LoginPage;