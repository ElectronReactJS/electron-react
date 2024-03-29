// src/pages/common/header/HeaderWrapper.tsx
import React, {ReactNode} from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {IconButton, Toolbar} from '@mui/material'

import {styled} from '@mui/material/styles'
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar'
import Menu from '../../../pages/common/menu/Menu'
import Box from '../layouts/Box'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
  drawerWidth: number
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'drawerWidth'
})<AppBarProps>(({theme, open, drawerWidth}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

interface HeaderWrapperProps {
  handleDrawerOpen: () => void
  open: boolean
  drawerWidth: number
  children?: ReactNode
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({
  handleDrawerOpen,
  open,
  drawerWidth,
  children
}) => {
  return (
    <AppBar position='fixed' open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={{
            marginRight: 5,
            ...(open && {display: 'none'})
          }}
        >
          <MenuIcon />
        </IconButton>
        {children}
        <Box flexGrow={1} /> {/* Empurra o conteúdo seguinte para a direita */}
        <Menu />
      </Toolbar>
    </AppBar>
  )
}

export default HeaderWrapper
