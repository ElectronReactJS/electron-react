// src/pages/users/UserPaper.tsx
import * as React from 'react'
import Paper from './Paper'
import TextField from '../../components/wrap/inputs/TextFieldWrapper'
import IconTextFields from '../../components/extends/displays/IconTextFieldsWrapper'
import ButtonSave from '../common/button/ButtonSave'

interface UserFormUsernameProps {
  onUsernameChange: (username: string) => void
}

const UserFormUsername: React.FC<UserFormUsernameProps> = ({onUsernameChange}) => {
  const [usernameErrorMessage, setUsernameErrorMessage] = React.useState('')
  const [repeatUsernameErrorMessage, setRepeatUsernameErrorMessage] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [repeatUsername, setRepeatUsername] = React.useState('')

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

  const onChangeHandlerRepeatUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRepeatUsername = event.target.value.trim()
    setRepeatUsername(newRepeatUsername)
    if (validateRepeatUsername(newRepeatUsername) && validateUsername(newRepeatUsername)) {
      onUsernameChange(newRepeatUsername)
    }
  }
  
  const validateFieldsAndNotifyParent = () => {
    const isUsernameValid = validateUsername(username) && validateRepeatUsername(repeatUsername)

    if (isUsernameValid) {
      onUsernameChange(username)
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
    <Paper title="Change Username" button={<ButtonSave onClick={handleOnSave} />}>
      <TextField
        required
        label="Username or e-mail"
        placeholder="you@domain.com"
        errorMessage={usernameErrorMessage}
        onChange={onChangeUsername}
        icon={<IconTextFields />}
        value={username}
      />
      <TextField
        required
        label="Repeat Username or e-mail"
        placeholder="Confirm your e-mail"
        errorMessage={repeatUsernameErrorMessage}
        onChange={onChangeHandlerRepeatUsername}
        icon={<IconTextFields />}
        value={repeatUsername}
      />
    </Paper>
  )
}

export default UserFormUsername
