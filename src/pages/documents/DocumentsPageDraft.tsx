// src/pages/documents/DocumentsPageDraft.tsx
import React, {useState} from 'react'
import Page from '../../components/wrap/layouts/Page'
import TransitionAlert from '../../components/wrap/feedback/TransitionAlert'
import DocumentsFormDraft from './DocumentsForm.Draft'

interface DocumentsPageDraftProps {
  title?: string
  content?: string
}

const DocumentsPageDraft: React.FC<DocumentsPageDraftProps> = ({title, content}) => {
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
      <DocumentsFormDraft
        title={currentTitle}
        content={currentContent}
        onTitleChange={onChangeTitle}
        onContentChange={onChangeContent}
        onFormStatusChange={handleFormStatusChange}
      />
    </Page>
  )
}

export default DocumentsPageDraft
