// src/pages/users/UserPage.Audit.tsx
import React, {useState} from 'react'
import UserViewAudit from './UserView.Audit'
import Page from '../../components/wrap/layouts/Page'
import TransitionAlert from '../../components/wrap/feedback/TransitionAlert'
import {Attempt} from './User.types'

const UserPageAudit: React.FC<any> = () => {
    const [showTransitionAlert, setShowTransitionAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success')
    const username = 'JohnDoe'
    const attempts: Attempt[] = [
      {label: 'Expired token', attemptedAt: '10:34:02 9 Jan, 2014', color: '#FFF8DC'},
      {label: 'Wrong password', attemptedAt: '10:35:12 9 Jan, 2014', color: '#FFCCCB'},
      {label: 'Wrong password', attemptedAt: '10:35:16 9 Jan, 2014', color: '#FFCCCB'},
      {label: 'Authenticated', attemptedAt: '10:35:57 9 Jan, 2014', color: '#D4EDDA'}
    ]
  
    const handleMessageOnRefresh = (message: string, severity: 'success' | 'error') => {
      setAlertMessage(message)
      setAlertSeverity(severity)
      setShowTransitionAlert(true)
    }

    const handleOnRefresh = () => {
        // TODO: obtain data from server
        handleMessageOnRefresh('Refreshed', 'success')
    }

  return (
    <Page>
     {showTransitionAlert && <TransitionAlert message={alertMessage} severity={alertSeverity} />}
      <UserViewAudit username={username} attempts={attempts} handleOnRefresh={handleOnRefresh} />
    </Page>
  )
}

export default UserPageAudit
