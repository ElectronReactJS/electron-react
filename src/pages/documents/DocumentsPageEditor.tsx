// src/pages/documents/DocumentsPageEditor.tsx
import React, {useState} from 'react'
import Page from '../../components/wrap/layouts/Page'
import TransitionAlert from '../../components/wrap/feedback/TransitionAlert'
import DocumentsFormEditor from './DocumentsForm.Editor'

interface DocumentsPageEditorProps {
  title?: string
  content?: string
}

const DocumentsPageEditor: React.FC<DocumentsPageEditorProps> = ({title, content}) => {
  const [showTransitionAlert, setShowTransitionAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success')
  const [currentContent, setCurrentContent] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')

  const onChangeTitle = (newTitle: string) => {
    setCurrentTitle(newTitle)
  }

  const onChangeContent = (newContet: string) => {
    setCurrentContent(newContet)
  }

  const handleFormStatusChange = (message: string, severity: 'success' | 'error') => {
    setAlertMessage(message)
    setAlertSeverity(severity)
    setShowTransitionAlert(true)
  }

  return (
    <Page>
      {showTransitionAlert && <TransitionAlert message={alertMessage} severity={alertSeverity} />}
      <DocumentsFormEditor
        title={currentTitle}
        content={currentContent}
        onTitleChange={onChangeTitle}
        onContentChange={onChangeContent}
        onFormStatusChange={handleFormStatusChange}
      />
    </Page>
  )
}

export default DocumentsPageEditor
