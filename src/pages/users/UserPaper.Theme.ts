// src/pages/users/UserPaper.Theme.ts
import {Theme} from '../../components/extends/styles/StylesWrapper'

export const UserPaperTheme = (theme: Theme) => {
  return {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    minHeight: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(4)
  }
}
