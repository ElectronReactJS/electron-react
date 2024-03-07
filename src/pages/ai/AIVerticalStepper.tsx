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
    <Box sx={{width: '70%'}}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              optional={index === 2 ? <Typography variant='caption'>{step.role}</Typography> : null}
            >
              {step.content}
            </StepLabel>
            <StepContent>
              {step.contentInput}
              <Stack direction='row' spacing={2} alignItems='center'>
                {renderStepActions(index)}
              </Stack>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default AIVerticalStepper
