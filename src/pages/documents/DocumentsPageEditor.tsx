// src/pages/documents/DocumentsPageEditor.tsx
import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import Paper from '../../components/extends/surfaces/PaperWrapper'
import 'react-quill/dist/quill.snow.css'

interface DocumentsPageEditorProps {
  open: boolean
  drawerWidth: number
}

const DocumentsPageEditor: React.FC<DocumentsPageEditorProps> = ({open, drawerWidth}) => {
  const label = 'Documents Editor'
  const [editorContent, setEditorContent] = useState('')

  const editorStyle = {
    marginLeft: open ? `${drawerWidth}px` : '0px',
    transition: 'margin 0.5s ease'
  }

  return (
    <Paper elevation={3} style={editorStyle}>
      <ReactQuill theme='snow' value={editorContent} onChange={setEditorContent} />
    </Paper>
  )
}

export default DocumentsPageEditor
