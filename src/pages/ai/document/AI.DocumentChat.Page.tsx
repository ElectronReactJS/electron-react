// src/pages/ai/document/AIDocumentChatPage.tsx
import React, {useState} from 'react'
import Page from '../../../components/wrap/layouts/Page'
import AIVerticalStepper from '../AIVerticalStepper'
import {Box, Button, Avatar, Paper, BottomNavigation, BottomNavigationAction} from '@mui/material'
import {AIVerticalStepperType} from '../AIVerticalStepperType'

import RobotIcon from '@mui/icons-material/Android'
import UserIcon from '@mui/icons-material/Person'
import ArchiveIcon from '@mui/icons-material/Archive'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconTextFields from '../../../components/ext/displays/IconTextFieldsExt'
import TextField from '../../../components/wrap/inputs/TextField'

const AIDocumentChatPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [steps, setSteps] = useState<AIVerticalStepperType[]>([])

  const handleInputChange = (index: number, field: 'subject' | 'description', value: string) => {
    const newSteps = [...steps]
    if (!newSteps[index]) {
      newSteps[index] = {subject: '', description: ''} // Inicializa se necessário
    }
    newSteps[index][field] = value
    setSteps(newSteps)
  }

  const handleNext = () => setActiveStep(prev => prev + 1)
  const handleBack = () => setActiveStep(prev => prev - 1)
  const handleReset = () => setActiveStep(0)

  const addAIStep = () => {
    const newStep: AIVerticalStepperType = {
      subjectInput: (
        <TextField
          required
          label='Title'
          placeholder='Add the title here.'
          onChange={e => handleInputChange(steps.length, 'subject', e.target.value)}
          value={steps[steps.length]?.subject || ''}
        />
      ),
      descriptionInput: (
        <TextField
          required
          label='Description'
          placeholder='Add the description here.'
          onChange={e => handleInputChange(steps.length, 'description', e.target.value)}
          value={steps[steps.length]?.description || ''}
        />
      ),
      avatar: (
        <Avatar>
          <RobotIcon />
        </Avatar>
      )
    }
    setSteps([...steps, newStep])
  }

  const addUserStep = () => {
    const newStep: AIVerticalStepperType = {
      subjectInput: (
        <TextField
          required
          label='Title'
          placeholder='Add the title here.'
          onChange={e => handleInputChange(steps.length, 'subject', e.target.value)}
          value={steps[steps.length]?.subject || ''}
        />
      ),
      descriptionInput: (
        <TextField
          required
          label='Description'
          placeholder='Add the description here.'
          onChange={e => handleInputChange(steps.length, 'description', e.target.value)}
          value={steps[steps.length]?.description || ''}
        />
      ),
      avatar: (
        <Avatar>
          <UserIcon />
        </Avatar>
      )
    }
    setSteps([...steps, newStep])
  }

  const renderStepActions = (stepIndex: number) => (
    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
      <ArrowBackIosIcon onClick={handleBack} />
      <Box sx={{flex: '1 1 auto'}} />
      <ArrowForwardIosIcon onClick={stepIndex === steps.length - 1 ? handleReset : handleNext} />
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
