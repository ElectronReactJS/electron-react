
// src/components/wrap/displays/TypographyWrapper.tsx
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { TypographyWrapperTheme } from './TypographyWrapper.Theme';

interface TypographyWrapperProps extends TypographyProps {
  children?: React.ReactNode;
}

const TypographyWrapper: React.FC<TypographyWrapperProps> = (props: TypographyWrapperProps) => {
  const currentTheme = useTheme();
  const typographyWrapperTheme = TypographyWrapperTheme(currentTheme);
  const { children, ...otherProps } = props;

  return (
    <Typography sx={{ ...typographyWrapperTheme, ...otherProps.sx }} {...props}>
        {children}
    </Typography>
  );
};

export default TypographyWrapper;