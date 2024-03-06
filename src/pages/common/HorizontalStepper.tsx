// src/pages/ai/document/HorizontalStepper.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';

interface HorizontalStepperProps {
  steps: string[];
  activeStep: number;
  completed: { [k: number]: boolean };
  handleNext: () => void;
  handleBack: () => void;
  handleStep: (step: number) => () => void;
  handleComplete: () => void;
  handleReset: () => void;
}

const HorizontalStepper: React.FC<HorizontalStepperProps> = ({
  steps,
  activeStep,
  completed,
  handleNext,
  handleBack,
  handleStep,
  handleComplete,
  handleReset,
}) => {
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};

export default HorizontalStepper;
