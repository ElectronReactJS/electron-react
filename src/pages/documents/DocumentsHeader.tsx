
// src/pages/documents/DocumentsHeader.tsx
import React, { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Toolbar } from '@mui/material';

import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import Menu from '../common/menu/Menu';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  
  const StyledAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

interface DocumentsHeaderProps {
    handleDrawerOpen: () => void;
    open: boolean; 
    children?: ReactNode;
  }

const DocumentsHeader: React.FC<DocumentsHeaderProps> = ({handleDrawerOpen, open, children}) => {
  
    return (
        <StyledAppBar position="fixed" open={open}>
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
        </StyledAppBar>
    );
}

export default DocumentsHeader;