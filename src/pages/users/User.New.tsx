// src/pages/users/UserNew.New.tsx
import React, {useState} from 'react'
import UserPaper from './UserPaper.New'
import TransitionAlert from './TransitionAlert'
import Box from '../../components/wrap/layouts/BoxWrapper'

const UserNew: React.FC = () => {
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
      <UserPaper onUsernameChange={handleUsernameChange} onPasswordChange={handlePasswordChange} />
    </Box>
  )
}

export default UserNew
