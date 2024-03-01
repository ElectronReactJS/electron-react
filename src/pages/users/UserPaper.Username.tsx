// src/pages/users/UserPaper.tsx
import * as React from 'react'
import {useNavigate} from 'react-router-dom'
import {useTheme} from '../../components/extends/styles/StylesWrapper'
import Paper from '../../components/extends/surfaces/PaperWrapper'
import TextField from '../../components/wrap/inputs/TextFieldWrapper'
import Typography from '../../components/extends/displays/TypographyWrapper'
import IconTextFields from '../../components/extends/displays/IconTextFieldsWrapper'
import EditNoteIcon from '../../components/extends/displays/IconEditNoteWrapper'
import {UserPaperTheme} from './UserPaper.Theme'

const UserPaper: React.FC<any> = () => {
  const navigate = useNavigate()
  const currentTheme = useTheme()
  const userPaperStyles = UserPaperTheme(currentTheme)
  const label = 'Change Username or e-mail'
  const [usernameErrorMessage, setUsernameErrorMessage] = React.useState('')
  const [username, setUsername] = React.useState('')

  const validateUsername = (input: string): boolean => {
    setUsernameErrorMessage('')
    if (input && input !== null && input !== '' && input.length > 0) {
      if (input.includes('@')) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(input)) {
          setUsernameErrorMessage('Invalid e-mail.')
          return false
        }
        return true
      }
      if (input.length < 5) {
        setUsernameErrorMessage('The minimum username length is 5 characters.')
        return false
      }
      if (input.length > 15) {
        setUsernameErrorMessage('The maximum username length is 15 characters.')
        return false
      }
      if (/\s/.test(input)) {
        setUsernameErrorMessage('The username cannot contain spaces.')
        return false
      }
      if (!/^[a-zA-Z0-9_]+$/.test(input)) {
        setUsernameErrorMessage('The username can only contain letters, numbers, and underscores.')
        return false
      }
    }
    setUsernameErrorMessage('')
    return true
  }

  const onChangeHandlerUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername: string = event.target.value
    const trimmedUsername: string = newUsername.trim()
    setUsername(trimmedUsername)
    validateUsername(trimmedUsername)
  }

  return (
    <Paper sx={userPaperStyles} elevation={3}>
      <EditNoteIcon sx={{ fontSize: 120 }} />
      <Typography color='inherit' variant='h5' component='h1'>
        {label}
      </Typography>
      <TextField
        label='Username or e-mail'
        placeholder='you@domain.com'
        errorMessage={usernameErrorMessage}
        onChange={onChangeHandlerUsername}
        icon={<IconTextFields />}
        value={username}
      />
    </Paper>
  )
}

export default UserPaper
