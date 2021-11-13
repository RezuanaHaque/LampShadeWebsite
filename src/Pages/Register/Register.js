import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Register = () => {
    const {user,error,
        registerUser,
        loading } = UseAuth()
    const [logindata, setlogindata] = useState({})
    const handleonchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newlogindata = { ...logindata }
        newlogindata[field] = value
        setlogindata(newlogindata)
    }
    const handleloginsubmit = (e) => {
        if (logindata?.password !== logindata?.password2) {
            alert('your password didnot matched')
            return
        }
        registerUser(logindata?.email, logindata?.password, logindata?.name)
        e.preventDefault()
    }

    return (
        <Container>
            <Grid container spacing={2} >
                <Grid sx={{ m: 8 }} item xs={6} md={8} lg={6}>
                    <Box textAlign='center'>
                        <Typography style={{ justifyContent: 'center' }} variant="h2" gutterBottom>
                            Register
                        </Typography>
                    </Box>
                    {!loading &&
                        <form onSubmit={handleloginsubmit}>
                            <TextField
                                sx={{ width: 1, m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name='name'
                                type="text"
                                onBlur={handleonchange}
                                variant="standard" />
                            <TextField
                                sx={{ width: 1, m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name='email'
                                type="email"
                                onBlur={handleonchange}
                                variant="standard" />
                            <TextField
                                sx={{ width: 1, m: 1 }}
                                id="outlined-password-input"
                                label="Password"
                                name='password'
                                onBlur={handleonchange}
                                type="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                sx={{ width: 1, m: 1 }}
                                id="outlined-password-input"
                                label="Password"
                                name='password2'
                                onBlur={handleonchange}
                                type="password"
                                autoComplete="current-password"
                            />
                            <Box textAlign='center'>
                                <Button sx={{ justifyContent: 'center' }} type="submit" variant='contained'>Register</Button>
                            </Box>
                        </form>
                    }
                    <Box textAlign='center'>
                        {
                            loading && <CircularProgress />
                        }
                    </Box>
                    {user?.email && <Alert severity="success">Successfully Registered!</Alert>}
                    { error && <Alert severity="error">{error}</Alert>}

                    <Box textAlign='center'><NavLink to='/login'><Button>Already registered? click here to log in</Button></NavLink></Box>

                </Grid>
                <Grid item xs={6} md={4} sx={{ marginTop: '%8' }}>
                    <img style={{ width: '100%', height: '100%' }} alt='' src="https://app.musafir.com/app/assets/images/signin-intro-img.16569aa70a799a681a1792f0079dced3.svg" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;