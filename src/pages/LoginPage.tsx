
// src/pages/LoginPage.tsx
import Box from '../components/wrap/layouts/BoxWrapper';
import LoginPaper from '../components/custom/surfaces/LoginPaper';
import TextField from '../components/wrap/inputs/TextFieldWrapper';
import Password from '../components/wrap/inputs/PasswordFieldWrapper';
import loginImage from '../images/logo128x128.png';

interface LoginPageProps {
    title?: string; 
  }
  
  const LoginPage: React.FC<LoginPageProps> = () => { 

    const title = "Company Name";

    const handleTyping = (e) => {
        const emailValue = e.target.value;
        if (emailValue.length === 0) {
            return false;
        } return true;
    }

    return (
        <Box>
            <LoginPaper>
                <Box> 
                    <img src={loginImage} alt="Logo"/>
                </Box>
                <TextField label="Username" />
                <Password />
            </LoginPaper>
        </Box>
    );
  };
  
  export default LoginPage;