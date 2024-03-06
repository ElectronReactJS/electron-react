// src/pages/ai/document/AI.DocumentChat.Page.tsx
import React, {useState} from 'react'
import AIDocumentChatForm from './AI.DocumentChat.Form'
import TransitionAlert from '../../../components/wrap/feedback/TransitionAlert'
import Page from '../../../components/wrap/layouts/Page'
import HorizontalStepper from '../../common/HorizontalStepper'

const AIDocumentChatPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState<{[k: number]: boolean}>({})
  const [showTransitionAlert, setShowTransitionAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success')

  // Adicionando estados para username e password
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const steps = ['Setup', 'Execution', 'Report']

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const handleNext = () => {
    const newActiveStep = activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <Page>
      {showTransitionAlert && <TransitionAlert message={alertMessage} severity={alertSeverity} />}
      <HorizontalStepper
        steps={steps}
        activeStep={activeStep}
        completed={completed}
        handleNext={handleNext}
        handleBack={handleBack}
        handleStep={handleStep}
        handleComplete={handleComplete}
        handleReset={handleReset}
      />
      <AIDocumentChatForm
        onUsernameChange={setUsername} // Passando a função para atualizar o username
        onPasswordChange={setPassword} // Passando a função para atualizar o password
        onFormStatusChange={(message, severity) => {
          setAlertMessage(message)
          setAlertSeverity(severity)
          setShowTransitionAlert(true)
        }}
      />
    </Page>
  )
}

export default AIDocumentChatPage
