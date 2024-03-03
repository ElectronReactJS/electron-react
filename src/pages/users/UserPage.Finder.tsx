// src/pages/users/UserPage.Finder.tsx
import React, {useState} from 'react'
import UserGridFinder from './UserGrid.Finder'
import Page from '../../components/wrap/layouts/Page'
import TransitionAlert from '../../components/wrap/feedback/TransitionAlert'
import {User} from './User'


const UserPageFinder: React.FC<any> = () => {
    const [users, setUsers] = useState([])
    const [showTransitionAlert, setShowTransitionAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success')

    const handleMessageOnRefresh = (message: string, severity: 'success' | 'error') => {
        setAlertMessage(message)
        setAlertSeverity(severity)
        setShowTransitionAlert(true)
      }
    
      const handleOnRefresh = () => {
        // TODO: obtain data from server
        const fetchedUsers: User [] = [
            {id: '1', userName: 'agros@example.com', createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z"},
            {id: '2', userName: 'antonio@example.com', createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z"},
            {id: '3', userName: 'lucas@example.com', createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z"},
            {id: '4', userName: 'felipe@example.com', createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z"},
            {id: '5', userName: 'thiago@example.com', createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z"},
            {id: '6', userName: 'guilherme@example.com', createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z"},
            {id: '7', userName: 'gabriel@example.com', createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z"},
            {id: '8', userName: 'jp@example.com', createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z"},
            {id: '9', userName: 'fernanda@example.com', createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z"},
          ]
          setUsers(fetchedUsers)
        handleMessageOnRefresh('Refreshed', 'success')
      }

  return (
    <Page>
      {showTransitionAlert && <TransitionAlert message={alertMessage} severity={alertSeverity} />}
      <UserGridFinder users={users} handleOnRefresh={handleOnRefresh} />
    </Page>
  )
}

export default UserPageFinder
