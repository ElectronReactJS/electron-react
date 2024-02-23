
// src/components/wrap/displays/TypographyWrapper.tsx
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { TypographyWrapperTheme } from './TypographyWrapper.Theme';



const TypographyWrapper: React.FC<any> = (props: any) => {
  const currentTheme = useTheme();
  const typographyWrapperTheme = TypographyWrapperTheme(currentTheme);
  const { children, ...otherProps } = props;

  return (
    <Typography sx={{ ...typographyWrapperTheme, ...otherProps.sx }} {...props}>
        {props.children}
    </Typography>
  );
};

export default TypographyWrapper;