// src/pages/common/theme/Frame.Theme.ts
import {Theme} from '@mui/material/styles'

export const FrameTheme = (theme: Theme) => {
  return {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(4) 
}
