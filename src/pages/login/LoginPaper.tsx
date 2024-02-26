
// src/pages/login/LoginPaper.tsx
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../components/extends/styles/StylesWrapper';
import Paper from '../../components/extends/surfaces/PaperWrapper';
import TextField from '../../components/wrap/inputs/TextFieldWrapper';
import PasswordField from '../../components/wrap/inputs/PasswordFieldWrapper';
import Typography from '../../components/extends/displays/TypographyWrapper';
import IconTextFields from '../../components/extends/displays/IconTextFieldsWrapper';
import { LoginPaperTheme } from './LoginPaper.Theme';
import loginImage from '../../images/logo128x128.png';

const LoginPaper: React.FC<any> = () => { 
    const navigate = useNavigate();
    const currentTheme = useTheme();
    const loginPaperStyles = LoginPaperTheme(currentTheme);
    const label = "Company Name";
    const [usernameErrorMessage, setUsernameErrorMessage] = React.useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const goToMain = () => {
        if( validateUsername(username) && validatePassword(password) ) {
            navigate('/main');
        }
    };
      
    const validateUsername = (input: string): boolean => {
        setUsernameErrorMessage("");
        if (input 
            && input !== null 
            && input !== '' 
            && input.length > 0) {
                if (input.includes('@')) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input)) {
                        setUsernameErrorMessage("Invalid e-mail.");
                        return false;
                    }
                    return true;
                }
                if (input.length < 5) {
                    setUsernameErrorMessage("The minimum username length is 5 characters.");
                    return false;
                } 
                if (input.length > 15) {
                    setUsernameErrorMessage("The maximum username length is 15 characters.");
                    return false;
                } 
                if (/\s/.test(input)) {
                    setUsernameErrorMessage("The username cannot contain spaces.");
                    return false;
                } 
                if (!/^[a-zA-Z0-9_]+$/.test(input)) {
                    setUsernameErrorMessage("The username can only contain letters, numbers, and underscores.");
                    return false;
                }
        } 
        setUsernameErrorMessage("");
        return true; 
    }
    
    const onChangeHandlerUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newUsername: string = event.target.value;
        const trimmedUsername: string = newUsername.trim(); 
        setUsername(trimmedUsername); 
        validateUsername(trimmedUsername);
    }    

    const validatePassword = (input: string): boolean => {
        setPasswordErrorMessage("");
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
        if (!passwordRegex.test(input)) {
            setPasswordErrorMessage("Password must be 8-16 characters long and include letters, numbers, and special characters.");
            return false;
        }
        return true; 
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
                        placeholder="you@domain.com"
                        errorMessage={usernameErrorMessage}
                        onChange={onChangeHandlerUsername}
                        icon={<IconTextFields />}
                        value={username}/>
            <PasswordField label="Password" 
                        errorMessage={passwordErrorMessage}
                        onChange={onChangeHandlerPassword} 
                        value={password} />
        </Paper>
    );
  };
  
  export default LoginPaper;