
// src/components/wrap/inputs/InputFieldWrapper.tsx
import Input from '../../extends/inputs/InputWrapper';
import InputLabel from '../../extends/inputs/InputLabelWrapper';
import InputAdornment from '../../extends/inputs/InputAdornmentWrapper';
import FormControl from '../../extends/inputs/FormControlWrapper';
import FormHelperText from '../../extends/inputs/FormHelperTextWrapper';

interface InputFieldWrapperProps {
    placeholder: string;
    errorMessage: string;
    label: string;
    value: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
  }

export default function InputFieldWrapper({ placeholder, label, value, errorMessage, onChange, icon }: InputFieldWrapperProps) {
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
