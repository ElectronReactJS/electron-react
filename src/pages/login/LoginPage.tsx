
// src/pages/LoginPage.tsx
import { useNavigate } from 'react-router-dom';
import Box from '../../components/wrap/layouts/BoxWrapper';
import LoginPaper from './LoginPaper';
import TextField from '../../components/wrap/inputs/TextFieldWrapper';
import Password from '../../components/wrap/inputs/PasswordFieldWrapper';
import loginImage from '../images/logo128x128.png';

interface LoginPageProps {
    title?: string; 
  }
  
  const LoginPage: React.FC<LoginPageProps> = (title: any) => { 
    const navigate = useNavigate();
    const label = title? title: "Company Name";

    const goToMain = () => {
        navigate('/main');
    };

    return (
        <Box>
            <LoginPaper title={label}>
                <Box> 
                    <Box> 
                        <img src={loginImage} alt="Logo"/>
                    </Box>
                    <TextField label="Username or e-mail" placeholder="endereco@dominio.gov.br" />
                    <Password  onChange={goToMain}/>
                </Box>
            </LoginPaper>
        </Box>
    );
  };
  
  export default LoginPage;