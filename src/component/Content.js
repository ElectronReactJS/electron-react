
// src/component/Content.js

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Content(props) {
    return (
            <Box component="main" sx={{ flex: 1, py: 6, px: 4, height: '100%' }}>
                <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden', height: '100%'}}>
                    {props.children}
                </Paper>
            </Box>
    );
}