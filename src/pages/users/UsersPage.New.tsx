// src/pages/users/UsersPagePassword.tsx
import React, {useState} from 'react'
import 'react-quill/dist/quill.snow.css'
import UserPaper from './UserPaper.New'

interface UsersPagePasswordProps {
  title?: string
  content?: string
}

const UsersPagePassword: React.FC<UsersPagePasswordProps> = ({title, content}) => {
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

  return <UserPaper />
}

export default UsersPagePassword