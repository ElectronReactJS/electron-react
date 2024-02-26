
// src/components/wrap/inputs/InputFieldWrapper.tsx
import { useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';

interface InputFieldWrapperProps {
    placeholder: string;
    errorMessage: string;
    label: string;
    value: any;
    validate?: (value: string) => boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
  }

export default function InputFieldWrapper({ placeholder, label, value, validate, errorMessage, onChange, icon }: InputFieldWrapperProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event); 
    };

  return (
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard" error={!!errorMessage}>
            <InputLabel htmlFor="standard-adornment-text" >
                {label}
            </InputLabel>
            <Input id="standard-adornment-text"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                             {icon || null}
                        </InputAdornment>
                    }
            />
            {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
        </FormControl>
  );
}
