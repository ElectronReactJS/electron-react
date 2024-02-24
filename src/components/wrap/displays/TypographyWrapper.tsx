
// src/components/wrap/displays/TypographyWrapper.tsx
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { TypographyWrapperTheme } from './TypographyWrapper.Theme';



const TypographyWrapper: React.FC<any> = (props: any) => {
  const currentTheme = useTheme();
  const typographyWrapperTheme = TypographyWrapperTheme(currentTheme);

  return (
    <Typography sx={{ ...typographyWrapperTheme, ...props.sx }} {...props}>
        {props.children}
    </Typography>
  );
};

export default TypographyWrapper;