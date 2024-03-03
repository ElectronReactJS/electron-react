// src/components/wrap/inputs/PasswordFieldWrapper.tsx
import * as React from 'react'

import IconButton from '../../ext/displays/IconButtonExt'
import VisibilityOff from '../../ext/displays/IconVisibilityOffExt'
import Visibility from '../../ext/displays/IconVisibilityExt'
import Input from '../../ext/inputs/InputExt'
import InputLabel from '../../ext/inputs/InputLabelExt'
import InputAdornment from '../../ext/inputs/InputAdornmentExt'
import FormControl from '../../ext/inputs/FormControlExt'
import FormHelperText from '../../ext/inputs/FormHelperTextExt'

interface PasswordFieldWrapperProps {
  errorMessage: string
  label: string
  value: any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  required: boolean
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
