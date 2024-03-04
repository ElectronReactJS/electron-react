// src/pages/users/UserPaper.tsx
import * as React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Paper from '../../components/wrap/surfaces/Paper'
import TextField from '../../components/wrap/inputs/TextField'
import IconTextFields from '../../components/ext/displays/IconTextFieldsExt'
import ButtonSave from '../../components/wrap/inputs/ButtonSave'
import Box from '../../components/wrap/layouts/Box'

interface DocumentsFormDraftProps {
  title: string
  content: string
  onTitleChange: (title: string) => void
  onContentChange: (content: string) => void
  onFormStatusChange: (message: string, severity: 'success' | 'error') => void
}

const DocumentsFormDraft: React.FC<DocumentsFormDraftProps> = ({
    title,
    content,
    onTitleChange,
    onContentChange,
    onFormStatusChange
}) => {
  const [titleErrorMessage, setTitleErrorMessage] = React.useState('')
  const [currentTitle, setCurrentTitle] = React.useState(title)
  const [currentContent, setCurrentContent] = React.useState(content)

  const handleOnSave = () => {
      onFormStatusChange('Formulário submetido com sucesso!', 'success')
  }

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value
    setCurrentTitle(newTitle)
    onTitleChange(currentTitle)
  }

  return (
    <Paper title="New Document" button={<ButtonSave onClick={handleOnSave} />}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          padding: '3px'
        }}
      >
        <TextField
          required
          label="Title"
          placeholder="My document"
          errorMessage={titleErrorMessage}
          onChange={onChangeTitle}
          icon={<IconTextFields />}
          value={currentTitle}
        />
        <ReactQuill
          theme="snow"
          value={currentContent}
          onChange={(v) => {setCurrentContent(v); onContentChange(currentContent)}}
          style={{width: '100%'}}
        />
      </Box>
    </Paper>
  )
}

export default DocumentsFormDraft
