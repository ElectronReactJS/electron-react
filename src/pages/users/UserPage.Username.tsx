// src/pages/users/UsersPage.Username.tsx
import React, {useState} from 'react'
import UserFormUsername from './UserForm.Username'
import TransitionAlert from '../../components/wrap/feedback/TransitionAlert'
import Box from '../../components/wrap/layouts/Box'

interface UsersPageUsernameProps {
  title?: string
  content?: string
}

const UsersPageUsername: React.FC = () => {
  const [username, setUsername] = useState('')
  const [showTransitionAlert, setShowTransitionAlert] = useState(true)

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          minHeight: '35px',
          padding: 1,
          margin: 1
        }}
      >
        {showTransitionAlert && (
          <TransitionAlert message='Your custom message here' severity='success' />
        )}
      </Box>
      <UserFormUsername onUsernameChange={handleUsernameChange} />
    </Box>
  )
}

export default UsersPageUsername
