// src/pages/common/drawer/DrawerWrapper.tsx
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '../../../components/extends/displays/IconButtonWrapper'
import ChevronLeftIcon from '../../../components/extends/displays/IconChevronLeftWrapper'
import ChevronRightIcon from '../../../components/extends/displays/IconChevronRightWrapper'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import {Theme, styled, useTheme} from '@mui/material/styles'
import {CSSObject} from '@emotion/react'

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'drawerWidth'
})(({theme, open, drawerWidth}: {theme: Theme; open?: boolean; drawerWidth: number}) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    '& .MuiDrawer-paper': openedMixin(theme, drawerWidth)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

export interface DrawerItemsType {
  id: string
  icon: JSX.Element
  pageId: string
}

interface DrawerWrapperProps {
  handleDrawerClose: () => void
  onPageChange: (pageId: string) => void
  open: boolean
  drawerWidth: number
  items: DrawerItemsType[]
}

const DrawerWrapper: React.FC<DrawerWrapperProps> = ({
  handleDrawerClose,
  onPageChange,
  open,
  drawerWidth,
  items
}) => {
  const theme = useTheme()
  return (
    <Drawer theme={theme} variant='permanent' open={open} drawerWidth={drawerWidth}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {items.map(item => (
          <ListItem key={item.id} disablePadding sx={{display: 'block'}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
              onClick={() => onPageChange(item.pageId)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center'
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.id} sx={{opacity: open ? 1 : 0}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default DrawerWrapper
