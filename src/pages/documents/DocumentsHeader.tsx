// src/pages/documents/DocumentsHeader.tsx
import React, {ReactNode} from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {IconButton, Toolbar} from '@mui/material'

import {styled} from '@mui/material/styles'
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar'

import Menu from '../common/menu/Menu'
import Box from '../../components/extends/layouts/Box'

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
    <StyledAppBar
      position='fixed'
      open={open}
      drawerWidth={drawerWidth}
      color='primary'
      enableColorOnDark
    >
      <Toolbar color='primary'>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={{mr: 2}}
        >
          <MenuIcon />
        </IconButton>
        {children}
        <Box flexGrow={1} />
        <Menu />
      </Toolbar>
    </StyledAppBar>
  )
}

export default DocumentsHeader
