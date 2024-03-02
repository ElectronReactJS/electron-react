// src/pages/users/UsersPage.Username.tsx
import React, {useState} from 'react'
import UserPaper from './UserPaper.Username'
import TransitionAlert from './TransitionAlert'
import ButtonSave from '../common/button/ButtonSave'
import Box from '../../components/extends/layouts/Box'

interface UsersPageUsernameProps {
  title?: string
  content?: string
}

const UsersPageUsername: React.FC<UsersPageUsernameProps> = ({title, content}) => {
  const [showTransitionAlert, setShowTransitionAlert] = useState(false)
  const [currentContent, setCurrentContent] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')

  const handleContentChanging = (newContent: string) => {
    setCurrentContent(newContent)
    save
  }

  const handleTitleChanging = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle: string = event.target.value
    setCurrentTitle(newTitle)
    save
  }

  const save = () => {
    console.log('Saving content')
    console.log(JSON.stringify({title: currentTitle, content: currentContent}))
    console.log('Saved')
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
      <Box sx={{width: '100%', minHeight: '15%'}}>
        <ButtonSave onClick={save} />
      </Box>
    </Box>
  );
}

export default UsersPageUsername
