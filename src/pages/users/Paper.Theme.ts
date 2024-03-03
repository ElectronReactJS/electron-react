// src/pages/users/UserPaper.Theme.ts
import {margin} from '@mui/system'
import {Theme} from '../../components/ext/styles/StylesExt'

export const PaperTheme = (theme: Theme) => {
  return {
    width: '82%',
    minHeight: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1px',
    margin: '1px'
  }
}
