// src/pages/users/Paper.tsx
import * as React from 'react'
import {useTheme} from '../../components/extends/styles/StylesWrapper'
import Paper from '../../components/extends/surfaces/PaperWrapper'
import {PaperTheme} from './Paper.Theme'

interface UserPaperProps {
  children?: React.ReactNode
}

const UserPaper: React.FC<UserPaperProps> = ({children}) => {
  const currentTheme = useTheme()
  const paperStyles = PaperTheme(currentTheme)

  return (
    <Paper sx={paperStyles} elevation={3}>
      {children}
    </Paper>
  )
}

export default UserPaper
