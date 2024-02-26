
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
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        const newValue = event.target.value;
        const isValid = validate(newValue);
        setError(isValid ? null : errorMessage);
    };

  return (
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard" error={!!error}>
            <InputLabel htmlFor="standard-adornment-text" >
                {label}
            </InputLabel>
            <Input id="standard-adornment-text"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            {icon? icon: null}
                        </InputAdornment>
                    }
            />
             {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
  );
}
