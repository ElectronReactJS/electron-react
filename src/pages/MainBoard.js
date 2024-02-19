import * as React from 'react';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainFrame from '../component/MainFrame';
import MainHeader from '../component/MainHeader';
import Copyright from '../component/Copyright';
import Menu from '../component/Menu';

const drawerWidth = 256;

export default function Mainboard() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        console.log('Mainboard component mounted successfully');
    }, []);

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <CssBaseline />
            <Menu themeBreakpoints={{ up: 'sm' }}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle} 
                drawerWidth={drawerWidth} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <MainHeader onDrawerToggle={handleDrawerToggle} />
                <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                    <MainFrame>
                        <Typography color="inherit" variant="h5" component="h1">
                            MainFrame content
                        </Typography>
                    </MainFrame>
                </Box>
                <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                    <Copyright />
                </Box>
            </Box>
        </Box>
    );
}