
// src/pages/documents/DocumentsHeader.tsx
import React, { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import Menu from '../common/menu/Menu';

interface DocumentsHeaderProps {
    handleDrawerOpen: () => void; 
    children?: ReactNode;
  }

const DocumentsHeader: React.FC<DocumentsHeaderProps> = ({handleDrawerOpen, children}) => {
  
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                {children} 
                <Menu />
            </Toolbar>
        </AppBar>
    );
}

export default DocumentsHeader;