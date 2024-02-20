import * as React from 'react';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountHeader from '../component/AccountHeader';
import Copyright from '../component/Copyright';
import Menu from '../component/AdminNavigatorMenu';
import TabsLayout from '../component/TabsLayout';
import TabsContent from '../component/TabsContent';
import Content from '../component/Content';

const drawerWidth = 256;

export default function AccountPage() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        console.log('AccountPage mounted successfully');
    }, []);

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <CssBaseline />
            <Menu themeBreakpoints={{ up: 'sm' }}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle} 
                drawerWidth={drawerWidth} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <AccountHeader onDrawerToggle={handleDrawerToggle} />
                <TabsLayout>
                    <TabsContent label="Tab 1">
                        <Content>
                        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                            Conteúdo da Tab 1
                        </Typography>
                        </Content>
                    </TabsContent>
                    <TabsContent label="Tab 2">
                        <Content>
                        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                            Conteúdo da Tab 2
                        </Typography>
                        </Content>
                    </TabsContent>
                </TabsLayout>
                <Copyright link="Malnati" url="https://github.com/Malnati"/>
            </Box>
        </Box>
    );
}