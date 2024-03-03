// src/pages/users/UsersPageViewer.tsx
import {useState} from 'react'
import UserPaper from './UserForm.Audit'
import TransitionAlert from './TransitionAlert'
import Box from '../../components/ext/layouts/BoxExt'

const UsersPageViewer: React.FC<any> = () => {
  const [showTransitionAlert, setShowTransitionAlert] = useState(false)

  const save = () => {
    console.log('Saving content')
    setShowTransitionAlert(true)
  }

  return (
    <Box sx={{width: '100%', minHeight: '85%'}}>
      <UserPaper>
        <TransitionAlert
          message='Your custom message here'
          severity='success'
          show={showTransitionAlert}
        />
      </UserPaper>
    </Box>
  )
}

export default UsersPageViewer
