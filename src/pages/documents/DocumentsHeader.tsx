// src/pages/documents/DocumentsHeader.tsx
import React, {ReactNode} from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {IconButton, Toolbar, Typography} from '@mui/material'

import {styled} from '@mui/material/styles'
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
  drawerWidth: number
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'drawerWidth'
})<AppBarProps>(({theme, open, drawerWidth}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open, drawerWidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

interface DocumentsHeaderProps {
  handleDrawerOpen: () => void
  open: boolean
  drawerWidth: number
  children?: ReactNode
}

const DocumentsHeader: React.FC<DocumentsHeaderProps> = ({
  handleDrawerOpen,
  open,
  drawerWidth,
  children
}) => {
  return (
    <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {children}
        </Toolbar>
        </ AppBar>  
  )
}

export default DocumentsHeader
