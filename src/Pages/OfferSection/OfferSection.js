import React from 'react';
import Box from '@mui/material/Box';
import { Button, CardMedia, Container, Divider, Grid } from '@mui/material';
import './OfferSection.css'
import { NavLink } from 'react-router-dom';
const OfferSection = () => {

    return (
        <Container>
            <Divider sx={{ marginBottom: '50px', marginTop: '100px' }}></Divider>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    <div className='container'>
                        <CardMedia
                            component="img"
                            // height="300"
                            style={{ width: "751" }}
                            image="https://cdn.shopify.com/s/files/1/0014/7996/6818/files/img-4-1.jpg?v=1535355986"
                            alt=""
                        />
                        <h2 className='pictext' style={{ color: 'darkgray' }}>Get Upto <br /><span style={{ fontSize: 40, color: 'gray' }}>40% discount</span><br /> On bedside lamps
                        </h2>
                        <NavLink to='morelamps'  className='btn'   style={{textDecoration:'none'}}> <Button className='btn' >Shop Now</Button></NavLink>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <div className='container'>
                        <CardMedia
                            component="img"
                            // height="300"
                            style={{ width: "751" }}
                            image="https://cdn.shopify.com/s/files/1/0014/7996/6818/files/img-5-1.jpg?v=1535355959"
                            alt=""
                        />
                        <h2 className='pictext' style={{ color: 'darkgray' }}>Get Upto <br /><span style={{ fontSize: 40, color: 'gray' }}>60% discount</span><br /> On floor lamps
                        </h2>

                       <NavLink to='morelamps'   className='btn'   style={{textDecoration:'none' }}> <Button className='btn' >Shop Now</Button></NavLink>
                    </div>

                </Grid>
            </Grid>
        </Container>
    );
};

export default OfferSection;