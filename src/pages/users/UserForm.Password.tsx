// src/pages/users/UserPaper.tsx
import * as React from 'react'
import Paper from '../../components/wrap/surfaces/Paper'
import PasswordField from '../../components/wrap/inputs/PasswordField'
import ButtonSave from '../../components/wrap/inputs/ButtonSave'

interface UserFormPasswordProps {
  onPasswordChange: (password: string) => void
  onFormStatusChange: (message: string, severity: 'success' | 'error') => void
}

const UserFormPassword: React.FC<UserFormPasswordProps> = ({
  onPasswordChange,
  onFormStatusChange
}) => {
  const [password, setPassword] = React.useState('')
  const [repeatPassword, setRepeatPassword] = React.useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('')
  const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] = React.useState('')

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
    const isPasswordValid = validatePassword(password) && validateRepeatPassword(repeatPassword)

    if (isPasswordValid) {
      onPasswordChange(password)
    }
  }

  const handleOnSave = () => {
    const isPasswordValid = validatePassword(password) && validateRepeatPassword(repeatPassword)

    if (isPasswordValid) {
      onFormStatusChange('Formulário submetido com sucesso!', 'success')
      onPasswordChange(password)
    } else {
      onFormStatusChange('Erro na submissão do formulário. Verifique os campos.', 'error')
    }
  }

  return (
    <Paper title='Change Password' button={<ButtonSave onClick={handleOnSave} />}>
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

export default UserFormPassword
