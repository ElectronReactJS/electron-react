
// src/pages/LoginPage.tsx
import Box from '../components/wrap/layouts/BoxWrapper';
import LoginPaper from '../components/custom/surfaces/LoginPaper';
import TextField from '../components/wrap/inputs/TextFieldWrapper';
import Password from '../components/wrap/inputs/PasswordFieldWrapper';

interface LoginPageProps {
    title?: string; 
  }
  
  const LoginPage: React.FC<LoginPageProps> = ({ title = "Wellcome" }) => { 

    const handleTyping = (e) => {
        const emailValue = e.target.value;
        if (emailValue.length === 0) {
            return false;
        } return true;
    }

    return (
        <Box>
            <LoginPaper title={title}>
                <TextField label="Username" success={handleTyping} error={handleTyping} />
                <Password />
            </LoginPaper>
        </Box>
    );
  };
  
  export default LoginPage;