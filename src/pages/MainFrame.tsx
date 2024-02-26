
// src/pages/MainFrame.tsx
import { useTheme } from '@mui/material/styles';
import Paper from '../components/extends/surfaces/PaperWrapper';
import Typography from '../components/extends/displays/TypographyWrapper';
import { MainFrameTheme } from './MainFrame.Theme';

const DocumentsPage: React.FC<any> = () => { 
    const currentTheme = useTheme();
    const loginPaperStyles = MainFrameTheme(currentTheme);
    const label = "Documents";

    return (
        <Paper sx={loginPaperStyles} elevation={3}>
                <Typography color="inherit" variant="h5" component="h1">
                    {label}
                </Typography>    
        </Paper>
    );
  };
  
  export default DocumentsPage;