// src/pages/users/Paper.tsx
import * as React from 'react'
import {useTheme} from '../../components/extends/styles/StylesWrapper'
import Paper from '../../components/extends/surfaces/PaperWrapper'
import TransitionAlert from './TransitionAlert'
import {UserPaperTheme} from './UserPaper.Theme'

interface UserPaperProps {
  children?: React.ReactNode
}

const UserPaper: React.FC<UserPaperProps> = ({children}) => {
  const currentTheme = useTheme()
  const userPaperStyles = UserPaperTheme(currentTheme)

  return (
    <Paper sx={userPaperStyles} elevation={3}>
      {children}
    </Paper>
  )
}

export default UserPaper
