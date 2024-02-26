
// src/pages/login/LoginPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Paper from '../../components/wrap/surfaces/PaperWrapper';
import InputField from '../../components/wrap/inputs/InputFieldWrapper';
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
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const goToMain = () => {
        if( validateUsername(username) && validatePassword(password) ) {
            navigate('/main');
        }
    };

    const validateUsername = (username: string) => {
        return username?.length > 2; 
    }

    const onChangeHandlerUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value); 
        if (validateUsername(username))
            goToMain();
    }

    const validatePassword = (password: string) => {
        return password?.length > 2; 
    }

    const onChangeHandlerPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(password); 
        if (validatePassword(password))
            goToMain();
    }

    return (
        <Paper sx={loginPaperStyles} elevation={3}>
                <Typography color="inherit" variant="h5" component="h1">
                    {label}
                </Typography>
                <img src={loginImage} alt="Logo"/>
            <InputField label="Username or e-mail" 
                        placeholder="endereco@dominio.gov.br" 
                        validate={validateUsername} 
                        errorMessage="No space allowed!"
                        onChange={onChangeHandlerUsername}
                        icon={<TextFieldsIcon />}
                        value={username}/>
            <Password password={password} 
                        onChangeHandler={onChangeHandlerPassword} 
                        validate={validatePassword}/>
        </Paper>
    );
  };
  
  export default LoginPage;