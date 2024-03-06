import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import {VerticalStepperType} from './VerticalStepperType'

interface VerticalStepperProps {
  steps: VerticalStepperType[]
  activeStep: number
  renderStepActions: (stepIndex: number) => React.ReactNode
}

const VerticalStepper: React.FC<VerticalStepperProps> = ({
  steps,
  activeStep,
  renderStepActions
}) => {
  return (
    <Box sx={{maxWidth: 400}}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant='caption'>Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Stack direction='row' spacing={2} alignItems='center'>
                {step.avatar}
                <Typography>{step.description}</Typography>
              </Stack>
              {renderStepActions(index)}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default VerticalStepper
