
// src/pages/documents/DocumentsViwer.tsx
import { useTheme } from '@mui/material/styles';
import { DocumentsFrameTheme } from './DocumentsFrame.Theme';

const DocumentsViwer: React.FC<any> = () => { 
    const currentTheme = useTheme();
    const documentsStyles = DocumentsFrameTheme(currentTheme);
    const label = "Documents";

    return (
       <></>
    );
  };
  
  export default DocumentsViwer;