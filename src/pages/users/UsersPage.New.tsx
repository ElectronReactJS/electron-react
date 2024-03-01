// src/pages/users/UsersPagePassword.tsx
import React, {useState} from 'react'
import 'react-quill/dist/quill.snow.css'
import UserPaper from './UserPaper.New'
import TransitionAlert from './TransitionAlert'
import ButtonSave from '../common/button/ButtonSave'
import Box from '../../components/extends/layouts/Box'

const userPaperStyles = {
  position: 'relative',
  minHeight: '100px'
}

const UsersPagePassword: React.FC = () => {
  const [showTransitionAlert, setShowTransitionAlert] = useState(false)

  const save = () => {
    console.log('Saving content')
    setShowTransitionAlert(true)
  }

  return (
    <Box sx={{width: '100%', position: 'relative', minHeight: '600px'}}>
      <ButtonSave onClick={save} />
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

export default UsersPagePassword
