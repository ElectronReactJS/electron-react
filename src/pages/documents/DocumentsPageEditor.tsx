// src/pages/documents/DocumentsPageEditor.tsx
import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import Paper from '../../components/extends/surfaces/PaperWrapper'
import 'react-quill/dist/quill.snow.css'

interface DocumentsPageEditorProps {
}

const DocumentsPageEditor: React.FC<DocumentsPageEditorProps> = () => {
  const label = 'Documents Editor'
  const [editorContent, setEditorContent] = useState('')

  return (

    <Paper elevation={3} sx={{
      marginTop: '32px', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}>
      <ReactQuill theme='snow' value={editorContent} onChange={setEditorContent} style={{ width: '100%' }} />
    </Paper>
  )
}

export default DocumentsPageEditor
