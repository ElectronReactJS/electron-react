
// src/components/wrap/inputs/TextFieldWrapper.tsx
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function TextFieldWrapper(props: any) {

  return (
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-text">{props.label}</InputLabel>
            <Input id="standard-adornment-text"
                    placeholder={props.placeholder}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton />
                        </InputAdornment>
                    }
            />
        </FormControl>
  );
}
