// src/pages/common/menu/Menu.tsx
import * as React from 'react'
import {useNavigate} from 'react-router-dom'
import Box from '../../../components/ext/layouts/BoxExt'
import Avatar from '../../../components/ext/displays/AvatarExt'
import MaterialMenu from '../../../components/ext/navigation/MenuExt'
import MenuItem from '../../../components/ext/navigation/MenuItemExt'
import Divider from '../../../components/ext/displays/DividerExt'
import Tooltip from '../../../components/ext/displays/TooltipExt'
import SpaceDashboardIcon from '../../../components/ext/displays/IconSpaceDashboardExt'
import HomeRepairServiceIcon from '../../../components/ext/displays/IconHomeRepairServiceExt'
import ListItemIcon from '../../../components/ext/displays/IconListItemExt'
import IconButton from '../../../components/ext/displays/IconButtonExt'
import Logout from '../../../components/ext/displays/IconLogoutExt'

const Menu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    navigate('/login')
  }

  const goToAdmin = () => {
    navigate('/users')
  }

  const goToAccount = () => {
    navigate('/account')
  }

  const goToWorkspace = () => {
    navigate('/documents')
  }

  return (
    <React.Fragment>
      <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ml: 2}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{width: 32, height: 32}}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <MaterialMenu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      >
        <MenuItem onClick={goToAccount}>
          <Avatar /> Account
        </MenuItem>
        <Divider />
        <MenuItem onClick={goToWorkspace}>
          <ListItemIcon>
            <HomeRepairServiceIcon fontSize='small' />
          </ListItemIcon>
          Documents
        </MenuItem>
        <MenuItem onClick={goToAdmin}>
          <ListItemIcon>
            <SpaceDashboardIcon fontSize='small' />
          </ListItemIcon>
          Users
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </MaterialMenu>
    </React.Fragment>
  )
}

export default Menu
