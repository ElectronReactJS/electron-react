// src/component/TabsLayout.js

import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';
import TabsContent from './TabsContent';

export default function TabsLayout({ children }) {
    const [tabNumber, setTabNumber] = useState(0);

    const handleTabNumber = (event, newValue) => {
        setTabNumber(newValue);
    };

    // Filtrar os filhos válidos do tipo TabsContent
    const tabsChildren = React.Children.toArray(children).filter(
        child => child.type === TabsContent
    );

    return (
        <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0, height: '80%' }}>
            <Tabs value={tabNumber} onChange={handleTabNumber} textColor="inherit">
                {tabsChildren.map((child, index) => (
                    <Tab label={child.props.label} key={index} />
                ))}
            </Tabs>
            {tabsChildren.map((child, index) => (
                <div
                    role="tabpanel"
                    hidden={tabNumber !== index}
                    key={index}
                >
                    {tabNumber === index && (
                        <Box sx={{ p: 3 }}>
                            {child.props.children}
                        </Box>
                    )}
                </div>
            ))}
        </AppBar>
    );
}
