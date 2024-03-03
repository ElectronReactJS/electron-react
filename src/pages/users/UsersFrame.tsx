// src/pages/users/UsersFrame.tsx
import * as React from 'react'
import {styled} from '@mui/material/styles'
import Typography from '../../components/ext/displays/TypographyExt'

import IconPasswordWrapper from '../../components/ext/displays/IconPasswordExt'
import IconNewUserWrapper from '../../components/ext/displays/IconNewUserExt'
import EditNoteIcon from '../../components/ext/displays/IconEditNoteExt'
import VisibilityIcon from '../../components/ext/displays/IconVisibilityExt'
import SearchIcon from '../../components/ext/displays/IconSearchExt'

import Box from '../../components/ext/layouts/BoxExt'
import CssBaseline from '@mui/material/CssBaseline'
import UsersHeader from '../common/header/HeaderWrapper'
import UsersDrawer from '../common/drawer/DrawerWrapper'

import UserPageFinder from './UserPage.Finder'
import UserPageAudit from './UserPage.Audit'
import UserPagePassword from './UserPage.Password'
import UserPageUsername from './UserPage.Username'
import UserPageNew from './UserPage.New'

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

  const drawerItems: DrawerItemsType[] = [
    {id: 'Search', icon: <SearchIcon />, pageId: 'Search'},
    {id: 'Audit', icon: <VisibilityIcon />, pageId: 'Audit'},
    {id: 'New', icon: <IconNewUserWrapper />, pageId: 'New'},
    {id: 'Username', icon: <EditNoteIcon />, pageId: 'Username'},
    {id: 'Password', icon: <IconPasswordWrapper />, pageId: 'Password'}
  ]

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <UsersHeader handleDrawerOpen={handleDrawerOpen} open={open} drawerWidth={drawerWidth}>
        <Typography variant='h6' noWrap component='div'>
          Users
        </Typography>
      </UsersHeader>
      <UsersDrawer
        handleDrawerClose={handleDrawerClose}
        open={open}
        drawerWidth={drawerWidth}
        onPageChange={pageId => setCurrentPage(pageId)}
        items={drawerItems}
      />
      <Main>
        <DrawerHeader />
        {currentPage === 'Search' && <UserPageFinder />}
        {currentPage === 'Audit' && <UserPageAudit />}
        {currentPage === 'New' && <UserPageNew />}
        {currentPage === 'Username' && <UserPageUsername />}
        {currentPage === 'Password' && <UserPagePassword />}
      </Main>
    </Box>
  )
}
