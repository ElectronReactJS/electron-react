// src/pages/users/UsersPage.New.tsx
import React, {useState} from 'react'
import UserPaper from './UserPaper.New'
import TransitionAlert from './TransitionAlert'
import ButtonSave from '../common/button/ButtonSave'
import Box from '../../components/extends/layouts/Box'

const UsersPageNew: React.FC = () => {
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
      <Box sx={{position: 'fixed', bottom: 16, right: 16}}>
        <ButtonSave onClick={save} />
      </Box>
    </Box>
  )
}

export default UsersPageNew
