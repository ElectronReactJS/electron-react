// src/pages/common/button/ButtonSave.tsx
import React from 'react'
import Fab from '@mui/material/Fab'
import SaveIcon from '@mui/icons-material/Save'
import { margin } from '@mui/system'

const fabStyle = {
  bottom: 16,
  right: 16,
  margin: 5
}

interface ButtonSaveProps {
  onClick?: () => void
}

const ButtonSave: React.FC<ButtonSaveProps> = ({onClick}) => {
  return (
    <Fab sx={fabStyle} aria-label='Save' color='primary' onClick={onClick}>
      <SaveIcon />
    </Fab>
  )
}

export default ButtonSave
