
// src/components/wrap/surfaces/PaperWrapper.tsx
import Paper, { PaperProps } from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { PaperWrapperTheme } from './PaperWrapper.Theme';

interface PaperWrapperProps extends PaperProps {
  children: React.ReactNode;
}

const PaperWrapper: React.FC<PaperWrapperProps> = (props) => {
  const currentTheme = useTheme();
  const paperWrapperTheme = PaperWrapperTheme(currentTheme);

  return (
    <Paper sx={{ ...paperWrapperTheme, ...props.sx }} {...props}>
        {props.children}
    </Paper>
  );
};

export default PaperWrapper;