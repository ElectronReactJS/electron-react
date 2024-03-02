// src/pages/users/UserPaper.List.tsx
import * as React from 'react'
import Paper from './Paper'
import Typography from '../../components/extends/displays/TypographyWrapper'
import IconPrivacyTipWrapper from '../../components/extends/displays/IconPrivacyTipWrapper'
import IconRemoveModeratorWrapper from '../../components/extends/displays/IconRemoveModeratorWrapper'
import IconVerifiedUserWrapper from '../../components/extends/displays/IconVerifiedUserWrapper'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

const UserPaper: React.FC<any> = () => {
  const label = 'Attempts of antonio@example.com'

  return (
    <Paper>
      <Typography color='inherit' variant='h5' component='h1'>
        {label}
      </Typography>
      <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <IconPrivacyTipWrapper sx={{color: '#FFF8DC'}} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Expired token' secondary='10:34:02 9 Jan, 2014' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <IconRemoveModeratorWrapper sx={{color: '#FFCCCB'}} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Wrong password' secondary='10:35:12 9 Jan, 2014' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <IconRemoveModeratorWrapper sx={{color: '#FFCCCB'}} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Wrong password' secondary='10:35:16 9 Jan, 2014' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <IconVerifiedUserWrapper sx={{color: '#D4EDDA'}} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Authentidated' secondary='10:35:57 9 Jan, 2014' />
        </ListItem>
      </List>
    </Paper>
  )
}

export default UserPaper
