// src/pages/users/UserPage.New.tsx
import React, {useState} from 'react'
import UserFormNew from './UserForm.New'
import TransitionAlert from '../../components/wrap/feedback/TransitionAlert'
import Page from '../../components/wrap/layouts/Page'

const UserPageNew: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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
      <UserFormNew
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        onFormStatusChange={handleFormStatusChange}
      />
    </Page>
  )
}

export default UserPageNew
