import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import { CircularProgress, Container, Divider, Grid, Typography } from '@mui/material';
import EachHomeProduct from '../Home/EachHomeProduct';
import UseAuth from '../../Hooks/UseAuth';
import { Box } from '@mui/system';

const AllProducts = () => {
    const [products] = UseProducts()
    const { loading } = UseAuth()
    return (
        <Container>
            <Typography style={{ textAlign: 'center', color: "gold" }} gutterBottom variant="h2" component="div">
                Products
            </Typography>
            <Divider />
            <br />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {!loading &&
                    products.map((product, index) => <EachHomeProduct
                        index={index}
                        key={product._id}
                        product={product}
                    ></EachHomeProduct>)
                }
                <Box sx={{ marginLeft: '50%' }}>
                    {
                        loading && <CircularProgress />
                    }
                </Box>
            </Grid>

        </Container>
    );
};

export default AllProducts;