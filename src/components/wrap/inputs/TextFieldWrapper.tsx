
// src/components/wrap/inputs/TextFieldWrapped.tsx
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { TextFieldWrapperTheme } from './TextFieldWrapper.Theme';

const TextFieldWrapper: React.FC<any> = (props) => {
    const currentTheme = useTheme();
    const textFieldWrapperTheme = TextFieldWrapperTheme(currentTheme);
  
    return (
      <TextField {...props} variant="standard" />
    );
  };
  
  export default TextFieldWrapper;