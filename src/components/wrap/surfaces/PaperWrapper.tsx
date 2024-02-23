
// src/components/wrap/surfaces/PaperWrapper.tsx
import Paper, { PaperProps } from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { PaperWrapperTheme } from './PaperWrapper.Theme';

interface PaperWrapperProps extends PaperProps {
  children?: React.ReactNode;
}

const PaperWrapper: React.FC<PaperWrapperProps> = (props: PaperWrapperProps) => {
  const currentTheme = useTheme();
  const paperWrapperTheme = PaperWrapperTheme(currentTheme);
  const { children, ...otherProps } = props;

  return (
    <Paper sx={{ ...paperWrapperTheme, ...props.sx }} {...otherProps}>
        {props.children}
    </Paper>
  );
};

export default PaperWrapper;