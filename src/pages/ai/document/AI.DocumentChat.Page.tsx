// src/pages/ai/document/AIDocumentChatPage.tsx
import React, {useState} from 'react'
import Page from '../../../components/wrap/layouts/Page'
import VerticalStepper from '../../common/VerticalStepper'
import Button from '@mui/material/Button'
import {Box} from '@mui/material'
import FabButtonAddCircle from '../../../components/wrap/inputs/FabButtonAddCircle'

const AIDocumentChatPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [steps, setSteps] = useState([
    {label: 'Setup', description: 'Descrição do passo Setup.'},
    {label: 'Execution', description: 'Descrição do passo Execution.'},
    {label: 'Report', description: 'Descrição do passo Report.'}
  ])

  const handleNext = () => setActiveStep(prev => prev + 1)
  const handleBack = () => setActiveStep(prev => prev - 1)
  const handleReset = () => setActiveStep(0)

  const addStep = () => {
    const newStep = {
      label: `Custom Step ${steps.length + 1}`,
      description: `Descrição do Custom Step ${steps.length + 1}.`
    }
    setSteps([...steps, newStep])
  }

  const renderStepActions = (stepIndex: number) => (
    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
      <Button disabled={stepIndex === 0} onClick={handleBack}>
        Back
      </Button>
      <Box sx={{flex: '1 1 auto'}} />
      <Button onClick={stepIndex === steps.length - 1 ? handleReset : handleNext}>
        {stepIndex === steps.length - 1 ? 'Reset' : 'Next'}
      </Button>
    </Box>
  )

  return (
    <Page>
      <VerticalStepper
        steps={steps}
        activeStep={activeStep}
        renderStepActions={renderStepActions}
      />
      <FabButtonAddCircle onClick={addStep} />
    </Page>
  )
}

export default AIDocumentChatPage
