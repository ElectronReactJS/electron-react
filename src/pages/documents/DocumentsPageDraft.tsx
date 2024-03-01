// src/pages/documents/DocumentsPageDraft.tsx
import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import Paper from '../../components/extends/surfaces/PaperWrapper'
import 'react-quill/dist/quill.snow.css'
import TextField from '../../components/wrap/inputs/TextFieldWrapper'
import Box from '../../components/wrap/layouts/BoxWrapper'
import ButtonSave from '../common/button/ButtonSave'

interface DocumentsPageDraftProps {
  title?: string
  content?: string
}

const DocumentsPageDraft: React.FC<DocumentsPageDraftProps> = ({title, content}) => {
  const [currentContent, setCurrentContent] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')
  const [titleErrorMessage, setTitleErrorMessage] = useState('')

  const handleContentChanging = (newContent: string) => {
    setCurrentContent(newContent)
    save
  }

  const validateTitle = (title: string) => {
    if (title?.length < 4) setTitleErrorMessage('Invalid document name.')
    else setTitleErrorMessage('')
  }

  const handleTitleChanging = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle: string = event.target.value
    setCurrentTitle(newTitle)
    validateTitle(newTitle)
    save
  }

  const save = () => {
    console.log('Saving content')
    console.log(JSON.stringify({title: currentTitle, content: currentContent}))
    console.log('Saved')
  }

  return (
    <Box>
      <TextField
        onChange={handleTitleChanging}
        label='Document title'
        value={currentTitle}
        placeholder='My document'
        errorMessage={titleErrorMessage}
      />

      <Paper
        elevation={3}
        sx={{
          marginTop: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxHeight: '86%',
          minHeight: '50%'
        }}
      >
        <ReactQuill
          theme='snow'
          value={currentContent}
          onChange={handleContentChanging}
          style={{width: '100%'}}
        />
        <ButtonSave />
      </Paper>
    </Box>
  )
}

export default DocumentsPageDraft
