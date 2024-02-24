
// src/components/wrap/displays/TypographyExtended.ts
import Typography, { TypographyProps } from '@mui/material/Typography';

interface TypographyExtendedProps extends TypographyProps {}

const TypographyExtended: React.FC<TypographyExtendedProps> extends React.ComponentProps<typeof Typography> = ({ children, ...otherProps }) => {
  return <Typography {...otherProps}>{children}</Typography>;
};

export default TypographyExtended;