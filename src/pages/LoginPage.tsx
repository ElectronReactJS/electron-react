import Box from '../components/wrap/layouts/BoxWrapper';
import LoginPaper from '../components/custom/surfaces/LoginPaper';

interface LoginPageProps {
    title?: string; 
  }
  
  const LoginPage: React.FC<LoginPageProps> = ({ title = "Wellcome" }) => { 
  
    return (
        <Box>
            <LoginPaper title={title}>
                
            </LoginPaper>
        </Box>
    );
  };
  
  export default LoginPage;