// src/pages/users/UsersPageEditor.tsx
import React, {useState} from 'react'
import 'react-quill/dist/quill.snow.css'
import UserPaper from './UserPaper'

interface UsersPageEditorProps {
  title?: string
  content?: string
}

const UsersPageEditor: React.FC<UsersPageEditorProps> = ({title, content}) => {
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
    <UserPaper />
  )
}

export default UsersPageEditor
