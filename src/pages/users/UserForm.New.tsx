// src/pages/users/UserPaper.tsx
import * as React from 'react'
import Paper from '../../components/wrap/surfaces/Paper'
import TextField from '../../components/wrap/inputs/TextField'
import PasswordField from '../../components/wrap/inputs/PasswordField'
import IconTextFields from '../../components/ext/displays/IconTextFieldsExt'
import ButtonSave from '../../components/wrap/inputs/ButtonSave'

interface UserFormNewProps {
  onUsernameChange: (username: string) => void
  onPasswordChange: (password: string) => void
}

const UserFormNew: React.FC<UserFormNewProps> = ({onUsernameChange, onPasswordChange}) => {
  const [usernameErrorMessage, setUsernameErrorMessage] = React.useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('')
  const [repeatUsernameErrorMessage, setRepeatUsernameErrorMessage] = React.useState('')
  const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [repeatUsername, setRepeatUsername] = React.useState('')
  const [repeatPassword, setRepeatPassword] = React.useState('')

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

  const validateRepeatUsername = (input: string): boolean => {
    if (username !== input) {
      setRepeatUsernameErrorMessage('Usernames do not match.')
      return false
    }
    setRepeatUsernameErrorMessage('')
    return true
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
  const validateRepeatPassword = (input: string): boolean => {
    if (password !== input) {
      setRepeatPasswordErrorMessage('Passwords do not match.')
      return false
    }
    setRepeatPasswordErrorMessage('')
    return true
  }

  const onChangeHandlerRepeatUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRepeatUsername = event.target.value.trim()
    setRepeatUsername(newRepeatUsername)
    if (validateRepeatUsername(newRepeatUsername) && validateUsername(newRepeatUsername)) {
      onUsernameChange(newRepeatUsername)
    }
  }

  const onChangeHandlerRepeatPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRepeatPassword = event.target.value
    setRepeatPassword(newRepeatPassword)
    if (validateRepeatPassword(newRepeatPassword) && validatePassword(newRepeatPassword)) {
      onPasswordChange(newRepeatPassword)
    }
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value
    validatePassword(newPassword)
    setPassword(newPassword)
  }

  const validateFieldsAndNotifyParent = () => {
    const isUsernameValid = validateUsername(username) && validateRepeatUsername(repeatUsername)
    const isPasswordValid = validatePassword(password) && validateRepeatPassword(repeatPassword)

    if (isUsernameValid && isPasswordValid) {
      onUsernameChange(username)
      onPasswordChange(password)
    }
  }

  const handleOnSave = () => {
    validateFieldsAndNotifyParent
  }

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value
    validateUsername(newUsername)
    setUsername(newUsername)
  }

  return (
    <Paper title='New User' button={<ButtonSave onClick={handleOnSave} />}>
      <TextField
        required
        label='Username or e-mail'
        placeholder='you@domain.com'
        errorMessage={usernameErrorMessage}
        onChange={onChangeUsername}
        icon={<IconTextFields />}
        value={username}
      />
      <TextField
        required
        label='Repeat Username or e-mail'
        placeholder='Confirm your e-mail'
        errorMessage={repeatUsernameErrorMessage}
        onChange={onChangeHandlerRepeatUsername}
        icon={<IconTextFields />}
        value={repeatUsername}
      />
      <PasswordField
        required
        label='Password'
        errorMessage={passwordErrorMessage}
        onChange={onChangePassword}
        value={password}
      />
      <PasswordField
        required
        label='Repeat Password'
        errorMessage={repeatPasswordErrorMessage}
        onChange={onChangeHandlerRepeatPassword}
        value={repeatPassword}
      />
    </Paper>
  )
}

export default UserFormNew
