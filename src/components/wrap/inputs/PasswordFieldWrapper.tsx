// src/components/wrap/inputs/PasswordFieldWrapper.tsx
import * as React from 'react'

import IconButton from '../../extends/displays/IconButtonWrapper'
import VisibilityOff from '../../extends/displays/IconVisibilityOffWrapper'
import Visibility from '../../extends/displays/IconVisibilityWrapper'
import Input from '../../extends/inputs/InputWrapper'
import InputLabel from '../../extends/inputs/InputLabelWrapper'
import InputAdornment from '../../extends/inputs/InputAdornmentWrapper'
import FormControl from '../../extends/inputs/FormControlWrapper'
import FormHelperText from '../../extends/inputs/FormHelperTextWrapper'

interface PasswordFieldWrapperProps {
  errorMessage: string
  label: string
  value: any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PasswordFieldWrapper({
  label,
  value,
  errorMessage,
  onChange
}: PasswordFieldWrapperProps) {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event)
  }

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <FormControl sx={{m: 1, width: '100%'}} variant='standard' error={!!errorMessage}>
      <InputLabel htmlFor='standard-adornment-password'>{label}</InputLabel>
      <Input
        id='standard-adornment-password'
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}
