import * as React from 'react';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AdminHeader from '../component/AdminHeader';
import Copyright from '../component/Copyright';
import Menu from '../component/AdminNavigatorMenu';
import TabsLayout from '../component/TabsLayout';
import TabsContent from '../component/TabsContent';
import Content from '../component/Content';
import TimelineFeed from '../component/TimelineFeed';
import ControlledAccordions from '../component/ControlledAccordions';

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
                <TabsLayout>
                    <TabsContent label="Timeline">
                        <Content>
                            <TimelineFeed />
                        </Content>
                    </TabsContent>
                    <TabsContent label="Document 3">
                        <Content>
                            <ControlledAccordions />
                        </Content>
                    </TabsContent>
                </TabsLayout>
                <Copyright link="Malnati" url="https://github.com/Malnati"/>
            </Box>
        </Box>
    );
}