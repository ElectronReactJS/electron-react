

// 
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MaterialMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

// Se AccountMenu receber props, defina uma interface para elas aqui
// interface AccountMenuProps {}

const Menu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        navigate('/login');
    };

    const goToAdmin = () => {
        navigate('/adminPage');
    };

    const goToAccount = () => {
        navigate('/accountPage');
    };

    const goToWorkspace = () => {
        navigate('/workspace');
    };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <MaterialMenu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={goToAccount}>
                    <Avatar /> Account
                </MenuItem>
                <Divider />
                {/* Aqui você pode passar children como um prop se necessário */}
                <MenuItem onClick={goToWorkspace}>
                    <ListItemIcon>
                        <HomeRepairServiceIcon fontSize="small" />
                    </ListItemIcon>
                    Workspace
                </MenuItem>
                <MenuItem onClick={goToAdmin}>
                    <ListItemIcon>
                        <SpaceDashboardIcon fontSize="small" />
                    </ListItemIcon>
                    Admin
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </MaterialMenu>
        </React.Fragment>
    );
};

export default Menu;
