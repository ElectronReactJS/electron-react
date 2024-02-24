
// src/components/wrap/inputs/PasswordFieldWrapper.tsx
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface PasswordFieldWrapperProps {
    password: string;
    validate?: (value: string) => boolean;
    onChangeHandler?: () => void;
  }

export default function PasswordFieldWrapper({password, validate, onChangeHandler}: PasswordFieldWrapperProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [valid, setValid] = React.useState(true);
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue); 
      if (validate) {
          const isValid = validate(value);
          setValid(isValid);
      }
      onChangeHandler;
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    error={!valid}
                    value={value}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    } 
                />
        </FormControl>
  );
}