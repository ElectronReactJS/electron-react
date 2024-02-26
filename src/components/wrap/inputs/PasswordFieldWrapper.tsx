
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
    errorMessage: string;
    label: string;
    value: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

export default function PasswordFieldWrapper({ label, value, errorMessage, onChange }: PasswordFieldWrapperProps) {
    const [showPassword, setShowPassword] = React.useState(false);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event); 
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

  return (
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard" error={!!errorMessage}>
            <InputLabel htmlFor="standard-adornment-password" >
                {label}
            </InputLabel>
            <Input id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
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