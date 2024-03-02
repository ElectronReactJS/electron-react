// src/pages/users/UsersFrame.tsx
import * as React from 'react'
import {styled} from '@mui/material/styles'
import Typography from '../../components/extends/displays/TypographyWrapper'

import IconPasswordWrapper from '../../components/extends/displays/IconPasswordWrapper'
import IconNewUserWrapper from '../../components/extends/displays/IconNewUserWrapper'
import EditNoteIcon from '../../components/extends/displays/IconEditNoteWrapper'
import VisibilityIcon from '../../components/extends/displays/IconVisibilityWrapper'
import SearchIcon from '../../components/extends/displays/IconSearchWrapper'

import Box from '../../components/extends/layouts/Box'
import CssBaseline from '@mui/material/CssBaseline'
import UsersHeader from '../common/header/HeaderWrapper'
import UsersDrawer from '../common/drawer/DrawerWrapper'

import UsersPageFinder from './UsersPage.Finder'
import UsersPageAudit from './UsersPage.Audit'
import UsersPagePassword from './UsersPage.Password'
import UsersPageUsername from './UsersPage.Username'
import UsersPageNew from './UsersPage.New'

const drawerWidth = 150

const Main = styled('main')(({theme}) => ({
  flexGrow: 1,
  padding: '6%',
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
  padding: theme.spacing(0, 1),
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
        <UsersHeader 
            handleDrawerOpen={handleDrawerOpen} 
            open={open} 
            drawerWidth={drawerWidth}>
        <Typography variant='h6' noWrap component='div'>
            Users
        </Typography>
        </UsersHeader>
        <UsersDrawer
            handleDrawerClose={handleDrawerClose}
            open={open}
            drawerWidth={drawerWidth}
            onPageChange={pageId => setCurrentPage(pageId)}
            items={drawerItems} />
        <Main>
            <DrawerHeader />
            {currentPage === 'Search' && <UsersPageFinder />}
            {currentPage === 'Audit' && <UsersPageAudit />}
            {currentPage === 'New' && <UsersPageNew />}
            {currentPage === 'Username' && <UsersPageUsername />}
            {currentPage === 'Password' && <UsersPagePassword title='Edit user' />}
        </Main>
    </Box>
  )
}
