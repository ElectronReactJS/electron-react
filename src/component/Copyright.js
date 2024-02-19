
// src/component/Copyright.js

import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://githug.com/Malnati">
        Main Page
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default Copyright;