
// src/pages/documents/DocumentsPage.Theme.ts
import { Theme } from '@mui/material/styles';

export const DocumentsPageTheme = (theme: Theme) => {
  return {
    // Aqui você pode adicionar ou sobrescrever estilos específicos para o login
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(4), // Exemplo de uso do tema para definir o padding
  };
};

