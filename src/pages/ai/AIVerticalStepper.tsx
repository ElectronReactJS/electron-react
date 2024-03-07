import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import {AIVerticalStepperType} from './AIVerticalStepperType'

interface AIVerticalStepperProps {
  steps: AIVerticalStepperType[]
  activeStep: number
  renderStepActions: (stepIndex: number) => React.ReactNode
}

const AIVerticalStepper: React.FC<AIVerticalStepperProps> = ({
  steps,
  activeStep,
  renderStepActions
}) => {
  return (
    <Box sx={{width: '90%'}}>
      <Stepper activeStep={activeStep} orientation='vertical' alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.subject}>
            <StepLabel StepIconComponent={step.avatar}></StepLabel>
            <StepContent>
              {step.subjectInput}
              <Stack direction='row' spacing={2} alignItems='center'>
                <Typography>{step.description}</Typography>
                {step.descriptionInput}
              </Stack>
              {renderStepActions(index)}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default AIVerticalStepper
