
// src/pages/WorkspacePage.js

import * as React from 'react';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WorkspaceHeader from '../component/WorkspaceHeader';
import WorkspaceContent from '../component/WorkspaceContent';
import Copyright from '../component/Copyright';

export default function WorkspacePage() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        console.log('WorkspacePage mounted successfully');
    }, []);

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <CssBaseline />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <WorkspaceHeader onDrawerToggle={handleDrawerToggle} />
                <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                    <WorkspaceContent>
                        <Typography color="inherit" variant="h5" component="h1">
                            Workspace Page content
                        </Typography>
                    </WorkspaceContent>
                </Box>
                <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                    <Copyright />
                </Box>
            </Box>
        </Box>
    );
}