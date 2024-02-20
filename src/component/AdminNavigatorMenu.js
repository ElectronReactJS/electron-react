

// src/component/AdminNavigatorMenu.js

import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AdminNavigator from './AdminNavigator';

function AdminNavigatorMenu({ themeBreakpoints = { up: 'sm' }, drawerWidth, mobileOpen, handleDrawerToggle }) {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up(themeBreakpoints.up));

    if (typeof handleDrawerToggle !== 'function') {
        console.warn('Menu: Invalid handleDrawerToggle function provided.');
        handleDrawerToggle = () => { };
    }

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} >
            {isSmUp ? null : (
                <AdminNavigator
                    PaperProps={{ style: { width: drawerWidth } }}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
            )}

            <AdminNavigator
                PaperProps={{ style: { width: drawerWidth } }}
                sx={{ display: { sm: 'block', xs: 'none' } }} />
        </Box>
    );
}

export default AdminNavigatorMenu;