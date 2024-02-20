import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PinIcon from '@mui/icons-material/Pin';
import BackupIcon from '@mui/icons-material/Backup';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const categories = [
  {
    id: 'Templates',
    children: [
        { id: 'Document 1', icon: <FolderSharedIcon /> },
        { id: 'Document 2', icon: <PeopleOutlineIcon /> },
        { id: 'Document 3', icon: <PeopleIcon />, active: true },
        { id: 'Document 4', icon: <SettingsAccessibilityIcon /> },
        { id: 'Document 5', icon: <SupervisedUserCircleIcon /> },
    ],
  },
  {
    id: 'Integration',
    children: [
        { id: 'Cloud', icon: <BackupIcon /> },
        { id: 'API Key', icon: <SettingsIcon /> },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function AdminNavigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Admin
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Main</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}