// src/pages/users/UserView.Audit.tsx
import * as React from 'react'
import Paper from '../../components/wrap/surfaces/Paper'
import IconPrivacyTipWrapper from '../../components/ext/displays/IconPrivacyTipExt'
import IconRemoveModeratorWrapper from '../../components/ext/displays/IconRemoveModeratorExt'
import IconVerifiedUserWrapper from '../../components/ext/displays/IconVerifiedUserExt'
import ButtonRefresh from '../../components/wrap/inputs/ButtonRefresh'
import Avatar from '../../components/ext/displays/AvatarExt'
import ListItemAvatar from '../../components/ext/displays/ListItemAvatarExt'
import ListItemText from '../../components/ext/displays/ListItemTextExt'
import ListItem from '../../components/ext/displays/ListItemExt'
import List from '../../components/ext/displays/ListExt'
import {Attempt} from './User'

interface UserViewAuditProps {
  username: string
  attempts: Attempt[]
  handleOnRefresh: () => void
}

const UserViewAudit: React.FC<UserViewAuditProps> = ({username, attempts, handleOnRefresh}) => {
  const title = 'Attempts of ' + username
  const getIcon = (label: string) => {
    switch (label) {
      case 'Authenticated':
        return <IconVerifiedUserWrapper sx={{color: '#D4EDDA'}} />
      case 'Wrong password':
        return <IconRemoveModeratorWrapper sx={{color: '#FFCCCB'}} />
      case 'Expired token':
        return <IconPrivacyTipWrapper sx={{color: '#FFF8DC'}} />
      default:
        return null // ou um ícone padrão
    }
  }

  return (
    <Paper title={title} button={<ButtonRefresh onClick={handleOnRefresh} />}>
      <List sx={{width: '100%', maxWidth: 360}}>
        {attempts.map((attempt, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>{getIcon(attempt.label)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={attempt.label} secondary={attempt.attemptedAt} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default UserViewAudit
