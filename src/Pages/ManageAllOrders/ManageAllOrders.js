import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import EachOrder from '../EachOrder/EachOrder';

const ManageAllOrders = () => {
    const {loading}=UseAuth()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/productswithusers`)
            .then(res => res.json())
            .then(data => setOrders(data))
    })
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/productswithuserinfo/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    // console.log(data);
                    alert("Do You Want To Cancel This Order?");
                    const remainingProducts = orders.filter(product => product._id !== id)
                    setOrders(remainingProducts)
                }
            })
    }
    return (
        <Container>
            <Typography style={{ textAlign: 'center', color: "gold" }} gutterBottom variant="h2" component="div">
                Manage All Orders
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {!loading &&
                    orders.map(product => <EachOrder key={product._id} product={product} handleDelete={handleDelete}></EachOrder>)
                }
                <Box sx={{marginLeft:'50%'}}>
                    {
                        loading && <CircularProgress />
                    }
                </Box>
            </Grid>
        </Container>
    );
};

export default ManageAllOrders;