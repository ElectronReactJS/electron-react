
// src/pages/MainPage.tsx
import { useNavigate } from 'react-router-dom';
import Box from '../components/wrap/layouts/BoxWrapper';
import Paper from '../components/wrap/surfaces/PaperWrapper'; 
import Typography from '../components/wrap/displays/TypographyWrapper';

interface MainPageProps {
    title?: string; 
  }
  
  const MainPage: React.FC<MainPageProps> = (title: any) => { 
    const navigate = useNavigate();

    const goToMain = () => {
        navigate('/login');
    };

    return (
        <Box>
            <Paper>
                <Typography><>{title}</></Typography>
            </Paper>
        </Box>
    );
  };
  
  export default MainPage;