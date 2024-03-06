import React from 'react'
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
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.subject}>
            <StepLabel
              optional={
                index === steps.length - 1 ? <Typography variant='caption'>Title</Typography> : null
              }
            >
            </StepLabel>
            <StepContent>
              {step.subjectInput}
              <Stack direction='row' spacing={2} alignItems='center'>
                <Typography>{step.description}</Typography>
                {step.avatar}{step.descriptionInput}
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
