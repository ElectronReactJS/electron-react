import Box from '../components/wrap/layouts/BoxWrapper';
import LoginPaper from '../components/custom/surfaces/LoginPaper';
import TextField from '../components/wrap/inputs/TextFieldWrapper';

interface LoginPageProps {
    title?: string; 
  }
  
  const LoginPage: React.FC<LoginPageProps> = ({ title = "Wellcome" }) => { 
  
    return (
        <Box>
            <LoginPaper title={title}>
                <TextField label="username"/>
            </LoginPaper>
        </Box>
    );
  };
  
  export default LoginPage;