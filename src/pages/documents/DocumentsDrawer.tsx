// src/pages/documents/DocumentsDrawer.tsximport React from 'react';
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SearchIcon from '@mui/icons-material/Search'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditNoteIcon from '@mui/icons-material/EditNote'
import {styled, useTheme} from '@mui/material/styles'

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

interface DocumentsDrawerProps {
  handleDrawerClose: () => void
  onPageChange: (pageId: string) => void
  open: boolean
  drawerWidth: number
}

const drawerItems = [
  {id: 'Search', icon: <SearchIcon />, pageId: 'Search'},
  {id: 'Viewer', icon: <VisibilityIcon />, pageId: 'Viewer'},
  {id: 'Editor', icon: <EditIcon />, pageId: 'Editor'},
  {id: 'Draft', icon: <EditNoteIcon />, pageId: 'Draft'}
]

const DocumentsDrawer: React.FC<DocumentsDrawerProps> = ({
  handleDrawerClose,
  onPageChange,
  open,
  drawerWidth
}) => {
  const theme = useTheme()
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      variant='persistent'
      anchor='left'
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {drawerItems.map(item => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => onPageChange(item.pageId)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.id} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default DocumentsDrawer
