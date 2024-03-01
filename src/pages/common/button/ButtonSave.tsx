// src/pages/common/button/ButtonSave.tsx
import Fab from '@mui/material/Fab'
import SaveIcon from '@mui/icons-material/Save'

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16
}

export default function ButtonSave() {
  return (
    <Fab sx={fabStyle} aria-label='Save' color='primary'>
      <SaveIcon />
    </Fab>
  )
}
