import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';
import UseAuth from '../../Hooks/UseAuth';
import { NavLink } from 'react-router-dom';


const NavigationAdmin = () => {
    const {
        logOut,
        user } = UseAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>

                    <Button style={{ fontSize: '30px', color: 'gray', fontWeight: 'bold' }}>lampshade</Button>
                    <NavLink to='/manageproducts' style={{ textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }}>manage products</Button></NavLink>
                    <NavLink to='/addproduct' style={{ textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }}>add products</Button></NavLink>
                    <NavLink to='/makeadmin' style={{ textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }}>make admin</Button></NavLink>
                    <NavLink to='/manageorders' style={{ textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }}>manage orders</Button></NavLink>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    {user?.email
                        ?
                        <Button style={{ color: 'darkgray', fontWeight: 'bold' }} onClick={logOut}>Logout</Button>
                        :
                        <>
                            {/* <NavLink to='/register' style={{ color: 'darkgray', textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }} >Register</Button></NavLink> */}
                            <NavLink to='/login' style={{ color: 'darkgray', textDecoration: 'none' }}><Button style={{ color: 'darkgray', fontWeight: 'bold' }} >Login</Button></NavLink>
                        </>
                    }

                </Toolbar>
            </AppBar >
        </Box >
    );
};

export default NavigationAdmin;