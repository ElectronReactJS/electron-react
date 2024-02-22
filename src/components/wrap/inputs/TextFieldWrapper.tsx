
// src/components/wrap/inputs/TextFieldWrapped.tsx
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { TextFieldWrapperTheme } from './TextFieldWrapper.Theme';

const TextFieldWrapper: React.FC<any> = ({ success, error, ...otherProps }) => {
    const currentTheme = useTheme();
    const textFieldWrapperTheme = TextFieldWrapperTheme(currentTheme);

    return (
      <TextField {...otherProps} success={success} error={error} variant="standard" />
    );
  };
  
  export default TextFieldWrapper;