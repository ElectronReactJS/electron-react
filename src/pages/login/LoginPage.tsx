
// src/pages/LoginPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '../../components/wrap/layouts/BoxWrapper';
import Paper from '../../components/wrap/surfaces/PaperWrapper';
// import TextField from '../../components/wrap/inputs/TextFieldWrapper';
import Password from '../../components/wrap/inputs/PasswordFieldWrapper';
import Typography from '../../components/wrap/displays/TypographyWrapper';
import { LoginPaperTheme } from './LoginPaper.Theme';
import loginImage from '../../images/logo128x128.png';

const LoginPage: React.FC<any> = () => { 
    const navigate = useNavigate();
    const currentTheme = useTheme();
    const loginPaperStyles = LoginPaperTheme(currentTheme);
    const label = "Company Name";

    const goToMain = () => {
        navigate('/main');
    };

    return (
        <Box>
            <Paper sx={loginPaperStyles} elevation={3}>
                <Box> 
                    <Box> 
                        <Typography color="inherit" variant="h5" component="h1">
                            {label}
                        </Typography>
                        <img src={loginImage} alt="Logo"/>
                    </Box>
                    {/* <TextField label="Username or e-mail" placeholder="endereco@dominio.gov.br" /> */}
                    <Password  onChange={goToMain}/>
                </Box>
            </Paper>
        </Box>
    );
  };
  
  export default LoginPage;