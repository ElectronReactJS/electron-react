
// src/pages/MainPage.tsx
import { useNavigate } from 'react-router-dom';
import Box from '../components/wrap/layouts/BoxWrapper';
import Paper from '../components/wrap/surfaces/PaperWrapper'; 

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
                {title}
            </Paper>
        </Box>
    );
  };
  
  export default MainPage;