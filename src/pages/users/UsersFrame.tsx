// src/pages/users/UsersFrame.tsx
import * as React from 'react'
import {styled} from '@mui/material/styles'
import Typography from '../../components/extends/displays/TypographyWrapper'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import UsersHeader from '../common/header/HeaderWrapper'
import UsersPageFinder from './UsersPageFinder'
import UsersDrawer from '../common/drawer/DrawerWrapper'
import UsersPageEditor from './UsersPageEditor'
import UsersPageViewer from './UsersPageViewer'
import UsersPageDraft from './UsersPageDraft'
import SearchIcon from '@mui/icons-material/Search'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditNoteIcon from '@mui/icons-material/EditNote'

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

const drawerItems: DrawerItemsType[] = [
  {id: 'Search', icon: <SearchIcon />, pageId: 'Search'},
  {id: 'Viewer', icon: <VisibilityIcon />, pageId: 'Viewer'},
  {id: 'Editor', icon: <EditIcon />, pageId: 'Editor'},
  {id: 'Draft', icon: <EditNoteIcon />, pageId: 'Draft'}
]

export default function DocumensFrame() {
  const [open, setOpen] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState('Search')

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
        {currentPage === 'Search' && <UsersPageFinder />}
        {currentPage === 'Viewer' && <UsersPageViewer />}
        {currentPage === 'Editor' && <UsersPageEditor title='New user' />}
        {currentPage === 'Draft' && <UsersPageDraft />}
      </Main>
    </Box>
  )
}