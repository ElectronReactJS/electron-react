// src/pages/users/UserPaper.Theme.ts
import {Theme} from '../../components/extends/styles/StylesWrapper'

export const PaperTheme = (theme: Theme) => {
  return {
    position: 'fixed',
    left: '50%',
    top: '65%',
    transform: 'translate(-50%, -50%)',
    width: '82%',
    minHeight: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10%'
  }
}
