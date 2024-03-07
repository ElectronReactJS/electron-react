// src/pages/ai/document/AIDocumentChatPage.tsx
import React, {useState} from 'react'
import Page from '../../../components/wrap/layouts/Page'
import AIVerticalStepper from '../AIVerticalStepper'
import {Box, Paper, BottomNavigation, BottomNavigationAction} from '@mui/material'
import {AIVerticalStepperType} from '../AIVerticalStepperType'

import RobotIcon from '@mui/icons-material/Android'
import UserIcon from '@mui/icons-material/Person'
import ArchiveIcon from '@mui/icons-material/Archive'

import ArrowUpward from '@mui/icons-material/ArrowUpward'
import ArrowDownward from '@mui/icons-material/ArrowDownward'
import TextField from '../../../components/wrap/inputs/TextField'

const AIDocumentChatPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [steps, setSteps] = useState<AIVerticalStepperType[]>([
    {
      index: 0,
      role: 'system',
      content: 'Hello, how can I help you, now?',
      icon: RobotIcon
    }
  ])

  const handleInputChange = (index: number, field: keyof AIVerticalStepperType, value: string) => {
    const newSteps = [...steps]
    const step = newSteps[index]

    if (field === 'content') {
      step[field] = value
    }

    setSteps(newSteps)
  }

  const handleNext = () => setActiveStep(prev => prev + 1)
  const handleBack = () => setActiveStep(prev => prev - 1)

  const addAIStep = () => {
    const newStep: AIVerticalStepperType = {
      index: activeStep + 1,
      role: 'system',
      contentInput: (
        <TextField
          required
          label='Prompt'
          placeholder='Add the prompt here.'
          onChange={e => handleInputChange(steps.length, 'content', e.target.value)}
          value={steps[steps.length]?.content || ''}
          icon={<RobotIcon />}
        />
      ),
      icon: RobotIcon
    }
    setSteps([...steps, newStep])
    handleNext()
  }

  const addUserStep = () => {
    const newStep: AIVerticalStepperType = {
      index: activeStep + 1,
      role: 'user',
      contentInput: (
        <TextField
          required
          label='Prompt'
          placeholder='Add the prompt here.'
          onChange={e => handleInputChange(steps.length, 'content', e.target.value)}
          value={steps[steps.length]?.content || ''}
          icon={<UserIcon />}
        />
      ),
      icon: UserIcon
    }
    setSteps([...steps, newStep])
    handleNext()
  }

  const renderStepActions = (stepIndex: number) => (
    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
      <Box sx={{flex: '1 1 auto'}} />
      {stepIndex > 0 && <ArrowUpward onClick={handleBack} />}
      {stepIndex < steps.length - 1 && <ArrowDownward onClick={handleNext} />}
    </Box>
  )

  return (
    <Page>
      <AIVerticalStepper
        steps={steps}
        activeStep={activeStep}
        renderStepActions={renderStepActions}
      />
      <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label='AI' icon={<RobotIcon />} onClick={addAIStep} />
          <BottomNavigationAction label='User' icon={<UserIcon />} onClick={addUserStep} />
          <BottomNavigationAction label='Finish' icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Page>
  )
}

export default AIDocumentChatPage
