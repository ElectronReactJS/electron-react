
// src/components/wrap/displays/TypographyWrapper.tsx
import Typography from './TypographyExtended';

const TypographyWrapper: React.FC<any> = (props) => {

  return (
    <Typography {...props} >
        {props.children}
    </Typography>
  );
};

export default TypographyWrapper;