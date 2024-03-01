// src/pages/users/UserPaper.tsx
import * as React from 'react'
import {useNavigate} from 'react-router-dom'
import {useTheme} from '../../components/extends/styles/StylesWrapper'
import Paper from '../../components/extends/surfaces/PaperWrapper'
import PasswordField from '../../components/wrap/inputs/PasswordFieldWrapper'
import Typography from '../../components/extends/displays/TypographyWrapper'
import {UserPaperTheme} from './UserPaper.Theme'

const UserPaper: React.FC<any> = () => {
  const navigate = useNavigate()
  const currentTheme = useTheme()
  const userPaperStyles = UserPaperTheme(currentTheme)
  const label = 'Change Password'
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('')
  const [password, setPassword] = React.useState('')

  const goToMain = () => {
    if (validatePassword(password)) {
      navigate('/users')
    }
  }
  const validatePassword = (input: string): boolean => {
    setPasswordErrorMessage('')
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/
    if (!passwordRegex.test(input)) {
      setPasswordErrorMessage(
        'Password must be 8-16 characters long and include letters, numbers, and special characters.'
      )
      return false
    }
    return true
  }

  const onChangeHandlerPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value
    setPassword(newPassword)
    if (validatePassword(newPassword)) goToMain()
  }

  return (
    <Paper sx={userPaperStyles} elevation={3}>
      <Typography color='inherit' variant='h5' component='h1'>
        {label}
      </Typography>
      <PasswordField
        label='Password'
        errorMessage={passwordErrorMessage}
        onChange={onChangeHandlerPassword}
        value={password}
      />
      <PasswordField
        label='Password repeating'
        errorMessage={passwordErrorMessage}
        onChange={onChangeHandlerPassword}
        value={password}
      />
    </Paper>
  )
}

export default UserPaper
