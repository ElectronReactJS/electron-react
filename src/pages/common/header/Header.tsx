//
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import HelpIcon from '@mui/icons-material/Help'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Menu from '../menu/Menu'

// Definindo a interface para as props
interface HeaderProps {
  onDrawerToggle: () => void
}

const lightColor = 'rgba(255, 255, 255, 0.7)'

const Header: React.FC<HeaderProps> = ({onDrawerToggle}) => {
  return (
    <React.Fragment>
      <AppBar color='primary' position='sticky' elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems='center'>
            <Grid sx={{display: {sm: 'none', xs: 'block'}}} item>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={onDrawerToggle}
                edge='start'
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Link
                href='/'
                variant='body2'
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  '&:hover': {
                    color: 'common.white'
                  }
                }}
                rel='noopener noreferrer'
                target='_blank'
              >
                Go to ...
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title='Alerts • No alerts'>
                <IconButton color='inherit'>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Menu />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component='div'
        color='primary'
        position='static'
        elevation={0}
        sx={{zIndex: 0}}
      >
        <Toolbar>
          <Grid container alignItems='center' spacing={1}>
            <Grid item xs>
              <Typography color='inherit' variant='h5' component='h1'>
                Account Header Title
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Help'>
                <IconButton color='inherit'>
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header
