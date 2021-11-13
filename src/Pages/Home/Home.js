import React from 'react';
import banner from '../../Img/logo.png'
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={8} lg>
                    <CardMedia
                    // style={{marginTop:'50px'}}
                        component="img"
                        height="700"
                        width='1024px'
                        image={banner}
                        alt=""
                    />       
            </Grid>

        </Grid>
    );
};

export default Home;