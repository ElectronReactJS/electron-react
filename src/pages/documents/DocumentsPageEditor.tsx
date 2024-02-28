
// src/pages/documents/DocumentsPageEditor.tsx
import Paper from '../../components/extends/surfaces/PaperWrapper';
import Typography from '../../components/extends/displays/TypographyWrapper';
import { TextareaAutosize } from '@mui/material';

const DocumentsPageEditor: React.FC<any> = () => { 
    const label = "Documents Editor";

    return (
        <Paper elevation={3}>
                <Typography color="inherit" variant="h5" component="h1">
                    {label}
                </Typography>
                <TextareaAutosize>
               
                </TextareaAutosize>
        </Paper>
    );
  };
  
  export default DocumentsPageEditor;