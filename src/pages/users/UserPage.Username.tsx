// src/pages/users/UsersPage.Username.tsx
import React, {useState} from 'react'
import UserFormUsername from './UserForm.Username'
import TransitionAlert from '../../components/wrap/feedback/TransitionAlert'
import Page from '../../components/wrap/layouts/Page'

const UserPageUsername: React.FC = () => {
  const [username, setUsername] = useState('')
  const [showTransitionAlert, setShowTransitionAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success')

  const handleFormStatusChange = (message: string, severity: 'success' | 'error') => {
    setAlertMessage(message)
    setAlertSeverity(severity)
    setShowTransitionAlert(true)
  }

  return (
    <Page>
      {showTransitionAlert && <TransitionAlert message={alertMessage} severity={alertSeverity} />}
      <UserFormUsername
        onUsernameChange={setUsername}
        onFormStatusChange={handleFormStatusChange}
      />
    </Page>
  )
}

export default UserPageUsername
