
// src/components/wrap/inputs/InputFieldWrapper.tsx
import { useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

interface InputFieldWrapperProps {
    placeholder: string;
    label: string;
    value: string;
    validate?: (value: string) => boolean;
    icon?: any;
  }

export default function InputFieldWrapper({ placeholder, label, value, validate, icon }: InputFieldWrapperProps) {
    const [valid, setValid] = useState(true);
    const [currectValue, setCurrectValue] = useState(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setCurrectValue(newValue); 
        if (validate) {
            const isValid = validate(currectValue);
            setValid(isValid);
        }
    };

  return (
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-text" >
                {label}
            </InputLabel>
            <Input id="standard-adornment-text"
                    error={!valid}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            {icon? icon: null}
                        </InputAdornment>
                    }
            />
        </FormControl>
  );
}
