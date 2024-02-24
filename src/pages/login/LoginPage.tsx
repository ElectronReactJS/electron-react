
// src/pages/login/LoginPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Paper from '../../components/wrap/surfaces/PaperWrapper';
import TextField from '../../components/wrap/inputs/InputFieldWrapper';
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

    const goToMain = () => {
        navigate('/main');
    };

    const handleUsername = (value: string) => {
        return true; 
    }

    return (
        <Paper sx={loginPaperStyles} elevation={3}>
                <Typography color="inherit" variant="h5" component="h1">
                    {label}
                </Typography>
                <img src={loginImage} alt="Logo"/>
            <TextField label="Username or e-mail" 
                        placeholder="endereco@dominio.gov.br" 
                        validate={handleUsername} 
                        icon={<TextFieldsIcon />}/>
            <Password onChange={goToMain} />
        </Paper>
    );
  };
  
  export default LoginPage;