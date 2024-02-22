
// src/components/wrap/displays/TypographyWrapper.tsx
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { TypographyWrapperTheme } from './TypographyWrapper.Theme';

interface TypographyWrapperProps extends TypographyProps {
  children: React.ReactNode;
}

const TypographyWrapper: React.FC<TypographyWrapperProps> = (props) => {
  const currentTheme = useTheme();
  const typographyWrapperTheme = TypographyWrapperTheme(currentTheme);

  return (
    <Typography sx={{ ...typographyWrapperTheme, ...props.sx }} {...props}>
        {props.children}
    </Typography>
  );
};

export default TypographyWrapper;