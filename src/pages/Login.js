import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import EmailField from '../component/EmailField';
import PasswordField from '../component/PasswordField';
import Typography from '@mui/material/Typography';

const paperStyle = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '30px', 
}
    
const Login = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log('Login component mounted successfully');
    }, []);

    const { title } = props;

    const handleValidEmail = () => {
        //navigate('/main');
    };

    const handleInvalidEmail = () => {
        //navigate('/main');
    };

    const handleValidPassword = () => {
        navigate('/workspace');
    };

    const handleInvalidPassword = () => {
        navigate('/workspace');
    };

    return (
            <Paper style={paperStyle} elevation={3}>
                <Typography color="inherit" variant="h5" component="h1">
                    { title?title:"Login" }
                </Typography>
                <EmailField onValidEmail={handleValidEmail} onInvalidEmail={handleInvalidEmail} />
                <PasswordField onValidPassword={handleValidPassword} onInvalidPassword={handleInvalidPassword} />
            </Paper>
    );
};

export default Login;