// src/pages/users/UsersPage.New.tsx
import React, {useState} from 'react'
import UserPaper from './UserPaper.New'
import TransitionAlert from './TransitionAlert'
import Box from '../../components/wrap/layouts/BoxWrapper'

const UsersPageNew: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showTransitionAlert, setShowTransitionAlert] = useState(true)

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername)
  }

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          height: '20%',
          backgroundColor: 'gray'
        }}
      >
        {showTransitionAlert && (
          <TransitionAlert message="Your custom message here" severity="success" />
        )}
      </Box>
      <UserPaper onUsernameChange={handleUsernameChange} onPasswordChange={handlePasswordChange} />
    </Box>
  )
}

export default UsersPageNew
