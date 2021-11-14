import { Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import EachManageProduct from './EachManageProduct';

const ManageProduct = () => {
    const [products,setProducts] = UseProducts()
    const handleDelete = (id) => {
        fetch(`https://stark-anchorage-74601.herokuapp.com/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    // console.log(data);
                    alert("Do You Want To Delete This Product?");
                    const remainingProducts = products.filter(product => product._id !== id)
                    setProducts(remainingProducts)
                }
            })
    }
    return (
        <Container sx={{ marginTop: 5 }}>
            <Typography style={{ textAlign: 'center', color: "gold" ,marginTop:'80px'}} gutterBottom variant="h3" component="div">
                Manage All Products
            </Typography>
            <Divider />
            <br />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map(product => <EachManageProduct
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                ></EachManageProduct>)}
            </Grid>

        </Container>
    );
};

export default ManageProduct;