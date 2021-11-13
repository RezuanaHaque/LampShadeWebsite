import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';
import UseAuth from '../../Hooks/UseAuth';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    const {
        admin,
        logOut,
        user } = UseAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>

                    <Button style={{ fontSize: '30px', color: 'gray', fontWeight: 'bold' }}>lampshade</Button>
                    <NavLink to='/home' style={{ textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }}>Home</Button></NavLink>
                    <NavLink to='/morelamps' style={{ textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }}>More Lamps</Button></NavLink>
                    <NavLink to='/reviews' style={{ textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }}>Review</Button></NavLink>
                    <NavLink to='/dashboard' style={{ textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }}>Dashboard</Button></NavLink>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    {user?.email
                        ?
                        <Button style={{ color: 'darkgray', fontWeight: 'bold' }} onClick={logOut}>Logout</Button>
                        :
                        <>
                            <NavLink to='/register' style={{ color: 'darkgray', textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }} >Register</Button></NavLink>
                            <NavLink to='/login' style={{ color: 'darkgray', textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }} >Login</Button></NavLink>
                        </>
                    }

                </Toolbar>
            </AppBar >
        </Box >
    );
};

export default Navigation;