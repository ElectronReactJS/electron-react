// src/pages/ai/document/AIDocumentChatPage.tsx
import React, {useState} from 'react'
import Page from '../../../components/wrap/layouts/Page'
import VerticalStepper from '../../common/VerticalStepper'
import {Box, Button, Avatar, Paper, BottomNavigation, BottomNavigationAction} from '@mui/material'
import {VerticalStepperType} from '../../common/VerticalStepperType'

import RobotIcon from '@mui/icons-material/Android'
import UserIcon from '@mui/icons-material/Person'
import ArchiveIcon from '@mui/icons-material/Archive'

const AIDocumentChatPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [steps, setSteps] = useState<VerticalStepperType[]>([
    {
      label: 'Initial',
      description: 'Olá, em que posso ajudar?',
      avatar: (
        <Avatar>
          <RobotIcon />
        </Avatar>
      )
    },
    {
      label: 'Introdução',
      description: 'Introdução do assunto.',
      avatar: (
        <Avatar>
          <UserIcon />
        </Avatar>
      )
    },
    {
      label: 'Objeto',
      description: 'Considerando a introdução, o que você precisa resolver?',
      avatar: (
        <Avatar>
          <RobotIcon />
        </Avatar>
      )
    }
  ])

  const handleNext = () => setActiveStep(prev => prev + 1)
  const handleBack = () => setActiveStep(prev => prev - 1)
  const handleReset = () => setActiveStep(0)

  const addAIStep = () => {
    const newStep: VerticalStepperType = {
      label: `Custom Step ${steps.length + 1}`,
      description: `Descrição do Custom Step ${steps.length + 1}.`,
      avatar: (
        <Avatar>
          <RobotIcon />
        </Avatar>
      )
    }
    setSteps(prevSteps => [...prevSteps, newStep])
  }

  const addUserStep = () => {
    const newStep: VerticalStepperType = {
      label: `Custom Step ${steps.length + 1}`,
      description: `Descrição do Custom Step ${steps.length + 1}.`,
      avatar: (
        <Avatar>
          <UserIcon />
        </Avatar>
      )
    }
    setSteps(prevSteps => [...prevSteps, newStep])
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
