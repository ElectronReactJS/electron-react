// src/pages/common/VerticalStepper.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

interface StepType {
  label: string;
  description: string;
}

interface VerticalStepperProps {
  steps: StepType[];
  activeStep: number;
  renderStepActions: (stepIndex: number) => React.ReactNode; // Adiciona esta prop
}

const VerticalStepper: React.FC<VerticalStepperProps> = ({
  steps,
  activeStep,
  renderStepActions,
}) => {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel optional={index === steps.length - 1 ? <Typography variant="caption">Last step</Typography> : null}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {renderStepActions(index)} 
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalStepper;
