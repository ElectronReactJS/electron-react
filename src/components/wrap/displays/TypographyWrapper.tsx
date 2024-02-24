
// src/components/wrap/displays/TypographyWrapper.tsx
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const TypographyWrapper = (props: any) => {
  const currentTheme = useTheme();

  return (
    <Typography {...props} />
  );
};

export default TypographyWrapper;