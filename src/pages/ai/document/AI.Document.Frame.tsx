// src/pages/users/UsersFrame.tsx
import * as React from 'react'
import {styled} from '../../../components/ext/styles/StylesExt'
import Typography from '../../../components/ext/displays/TypographyExt'

import SmartToyIcon from '@mui/icons-material/SmartToy'

import Box from '../../../components/ext/layouts/BoxExt'
import CssBaseline from '../../../components/ext/utils/CssBaselineExt'
import Header from '../../../components/wrap/navigation/Header'
import Drawer from '../../../components/wrap/navigation/Drawer'

import AIDocumentChatPage from './AI.DocumentChat.Page'

const drawerWidth = 150

const Main = styled('main')(({theme}) => ({
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}))

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 1,
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

export interface DrawerItemsType {
  id: string
  icon: JSX.Element
  pageId: string
}

export default function DocumensFrame() {
  const [open, setOpen] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState('Search')

  const drawerItems: DrawerItemsType[] = [{id: 'AI', icon: <SmartToyIcon />, pageId: 'AI'}]

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} open={open} drawerWidth={drawerWidth}>
        <Typography variant='h6' noWrap component='div'>
          Users
        </Typography>
      </Header>
      <Drawer
        handleDrawerClose={handleDrawerClose}
        open={open}
        drawerWidth={drawerWidth}
        onPageChange={pageId => setCurrentPage(pageId)}
        items={drawerItems}
      />
      <Main>
        <DrawerHeader />
        {currentPage === 'Search' && <AIDocumentChatPage />}
      </Main>
    </Box>
  )
}
