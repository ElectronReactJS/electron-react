// src/pages/documents/DocumentsFrame.tsx
import * as React from 'react'
import {styled} from '@mui/material/styles'
import Typography from '../../components/extends/displays/TypographyWrapper'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import DocumentsHeader from './DocumentsHeader'
import DocumentsPageFinder from './DocumentsPageFinder'
import DocumentsDrawer from './DocumentsDrawer'
import DocumentsPageEditor from './DocumentsPageEditor'
import DocumentsPageViewer from './DocumentsPageViewer'

const drawerWidth = 240

const Main = styled('main', {shouldForwardProp: prop => prop !== 'open'})<{
  open?: boolean
}>(({theme, open}) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

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
      <DocumentsHeader handleDrawerOpen={handleDrawerOpen} open={open} drawerWidth={drawerWidth}>
        <Typography variant='h6' noWrap component='div'>
          DocumentsFrame Header
        </Typography>
      </DocumentsHeader>
      <DocumentsDrawer
        handleDrawerClose={handleDrawerClose}
        open={open}
        drawerWidth={drawerWidth}
        onPageChange={pageId => setCurrentPage(pageId)}
      />
      <Main open={open}>
        <DrawerHeader />
        {currentPage === 'Search' && <DocumentsPageFinder />}
        {currentPage === 'Viewer' && <DocumentsPageViewer />}
        {currentPage === 'Editor' && <DocumentsPageEditor />}
      </Main>
    </Box>
  )
}