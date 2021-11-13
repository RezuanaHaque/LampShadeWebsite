import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {
    const { user,
        error,
        loginUser,
        loading
    } = UseAuth()
    const history = useHistory()
    const location = useLocation()
    const [logindataEmail, setlogindataEmail] = useState('')
    const [logindataPass, setlogindataPass] = useState('')
    const handleonBlurE = (e) => {
        setlogindataEmail(e.target.value)
    }
    const handleonBlurP = (e) => {
        setlogindataPass(e.target.value)
    }
    const handleloginsubmit = (e) => {
        loginUser(logindataEmail, logindataPass, history, location)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ m: 8 }} item xs={12} md={6}>
                    <Box textAlign='center'>
                        <Typography variant="h2" gutterBottom>
                            Login
                        </Typography>
                    </Box>
                    {
                        !loading &&
                        <form onSubmit={handleloginsubmit}>
                            <TextField
                                sx={{ width: 1, m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name='email'
                                onBlur={handleonBlurE}
                                variant="standard" />
                            <TextField
                                sx={{ width: 1, m: 1 }}
                                id="outlined-password-input"
                                label="Password"
                                name='password'
                                onBlur={handleonBlurP}
                                type="password"
                                autoComplete="current-password"
                            />
                            <Box textAlign='center'>
                                <Button sx={{ justifyContent: 'center' }} type="submit" variant='contained'>Login</Button>
                            </Box>
                        </form>
                    }
                    <Box textAlign='center'>
                        {
                            loading && <CircularProgress />
                        }
                    </Box>
                    {user?.email && <Alert severity="success">Successfully Logged In!</Alert>}
                    { error && <Alert severity="error">{error}</Alert>}
                    <Box textAlign='center'>
                        <NavLink to='/register'><Button>New user? click here to register</Button></NavLink>
                    </Box>

                </Grid>
                <Grid item xs={6} md={4} sx={{ marginTop: '%8' }}>
                    <img style={{ width: '100%', height: '100%' }} alt='' src="https://app.musafir.com/app/assets/images/signin-intro-img.16569aa70a799a681a1792f0079dced3.svg" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;