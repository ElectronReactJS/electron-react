// src/pages/common/button/ButtonNew.tsx
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16
}

export default function ButtonNew() {
  return (
    <Fab sx={fabStyle} aria-label='Add' color='primary'>
      <AddIcon />
    </Fab>
  )
}
