
// src/pages/documents/DocumentsPage.tsx
import { useTheme } from '@mui/material/styles';
import Paper from '../../components/extends/surfaces/PaperWrapper';
import Typography from '../../components/extends/displays/TypographyWrapper';
import { DocumentsPageTheme } from './DocumentsPage.Theme';

const DocumentsPage: React.FC<any> = () => { 
    const currentTheme = useTheme();
    const documentsStyles = DocumentsPageTheme(currentTheme);
    const label = "Documents";

    return (
        <Paper sx={documentsStyles} elevation={3}>
                <Typography color="inherit" variant="h5" component="h1">
                    {label}
                </Typography>    
        </Paper>
    );
  };
  
  export default DocumentsPage;