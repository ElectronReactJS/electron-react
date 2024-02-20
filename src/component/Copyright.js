
// src/component/Copyright.js

import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Copyright({link, url}) {
  return (
    <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
        <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}{' '}
            <Link color="inherit" href={url}>
                {link}
            </Link>
            {' '}{new Date().getFullYear()}.
        </Typography>
    </Box>
  );
}

export default Copyright;