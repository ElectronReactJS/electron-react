// src/pages/documents/DocumentsFrame.tsx
import * as React from 'react'
import {styled} from '../../components/ext/styles/StylesExt'
import Box from '../../components/ext/layouts/BoxExt'
import CssBaseline from '../../components/ext/utils/CssBaselineExt'
import Typography from '../../components/ext/displays/TypographyExt'
import DocumentsHeader from '../../components/wrap/navigation/Header'
import DocumentsPageFinder from './DocumentsPageFinder'
import DocumentsDrawer from '../../components/wrap/navigation/Drawer'
import DocumentsPageEditor from './DocumentsPageEditor'
import DocumentsPageViewer from './DocumentsPageViewer'
import DocumentsPageDraft from './DocumentsPageDraft'

import SearchIcon from '../../components/ext/displays/IconSearchExt'
import EditIcon from '../../components/ext/displays/IconEditExt'
import VisibilityIcon from '../../components/ext/displays/IconVisibilityExt'
import EditNoteIcon from '../../components/ext/displays/IconEditNoteExt'

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
      <DocumentsHeader handleDrawerOpen={handleDrawerOpen} open={open} drawerWidth={drawerWidth}>
        <Typography variant='h6' noWrap component='div'>
          Documents
        </Typography>
      </DocumentsHeader>
      <DocumentsDrawer
        handleDrawerClose={handleDrawerClose}
        open={open}
        drawerWidth={drawerWidth}
        onPageChange={pageId => setCurrentPage(pageId)}
        items={drawerItems}
      />
      <Main>
        <DrawerHeader />
        {currentPage === 'Search' && <DocumentsPageFinder />}
        {currentPage === 'Viewer' && <DocumentsPageViewer />}
        {currentPage === 'Editor' && <DocumentsPageEditor title='New document' />}
        {currentPage === 'Draft' && <DocumentsPageDraft />}
      </Main>
    </Box>
  )
}
