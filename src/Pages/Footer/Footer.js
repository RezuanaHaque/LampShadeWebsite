import { Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
        <Container>
            <Grid container spacing={2}  style={{backgroundColor:'lightgray' ,marginTop:'100px'}}>
                <Grid item xs={12} lg={4}>
                    {/* <h3 ></h3> */}
                    <ul>
                        <li  style={{listStyleType: "none"}} href="/facebook">Follow us:</li>
                        <br />
                        <li  style={{listStyleType: "none"}} href="/facebook"><FacebookIcon></FacebookIcon></li>
                        <li  style={{listStyleType: "none"}} href="/linkedin"><InstagramIcon></InstagramIcon></li>
                        <li  style={{listStyleType: "none"}} href="/instagram"><LinkedInIcon></LinkedInIcon></li>
                    </ul>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ul>
                        <li style={{listStyleType: "none"}} href="/home">Home</li><br />
                        <li  style={{listStyleType: "none"}} href="/services">Services</li><br />
                        <li  style={{listStyleType: "none"}} href="/aboutus">About us</li><br />
                        <li  style={{listStyleType: "none"}} href="/employee">Employees</li>
                    </ul>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <TextField
                        sx={{ width: .8, marginTop: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name='name'
                        type="text"
                        // onBlur={handleonchange}
                        variant="standard" />
                        <br />
                    <Button variant="contained">
                        Sign up
                    </Button>
                </Grid>
            </Grid>
        </Container> 
    );
};

export default Footer;