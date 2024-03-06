// src/components/wrap/inputs/FabButtonAddCircle.tsx
import React from 'react';
import Fab from '@mui/material/Fab';
import IconAddCircleExt from '../../ext/displays/IconAddCircleExt';

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

interface ButtonProps {
  onClick?: () => void; 
}

const FabButtonAddCircle: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Fab sx={fabStyle} aria-label='Add' color='primary' onClick={onClick}>
      <IconAddCircleExt />
    </Fab>
  );
};

export default FabButtonAddCircle;

