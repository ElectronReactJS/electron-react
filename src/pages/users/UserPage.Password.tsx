// src/pages/users/UsersPagePassword.tsx
import React, {useState} from 'react'
import UserFormPassword from './UserForm.Password'
import TransitionAlert from '../../components/wrap/feedback/TransitionAlert'
import Page from '../../components/wrap/layouts/Page'

const UserPagePassword: React.FC = () => {
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
      <UserFormPassword
        onPasswordChange={setPassword}
        onFormStatusChange={handleFormStatusChange}
      />
    </Page>
  )
}

export default UserPagePassword
