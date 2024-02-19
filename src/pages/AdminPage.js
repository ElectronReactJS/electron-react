import * as React from 'react';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AdminContent from '../component/AdminContent';
import AdminHeader from '../component/AdminHeader';
import Copyright from '../component/Copyright';
import Menu from '../component/Menu';

const drawerWidth = 256;

export default function AdminPage() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        console.log('AdminPage mounted successfully');
    }, []);

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <CssBaseline />
            <Menu themeBreakpoints={{ up: 'sm' }}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle} 
                drawerWidth={drawerWidth} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <AdminHeader onDrawerToggle={handleDrawerToggle} />
                <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                    <AdminContent>
                        <Typography color="inherit" variant="h5" component="h1">
                            Admin Page content
                        </Typography>
                    </AdminContent>
                </Box>
                <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                    <Copyright />
                </Box>
            </Box>
        </Box>
    );
}