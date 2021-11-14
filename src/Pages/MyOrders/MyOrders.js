import { Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import EachOrder from '../EachOrder/EachOrder';

const MyOrders = () => {
    const { user, loading } = UseAuth()
    const [filteredProductsUser, setFilteredProductsUser] = useState([])
    useEffect(() => {
        fetch(`https://stark-anchorage-74601.herokuapp.com/productswithuserinfo?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFilteredProductsUser(data))
    })

    const handleDelete = (id) => {
        fetch(`https://stark-anchorage-74601.herokuapp.com/productswithuserinfo/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    // console.log(data);
                    alert("Do You Want To Cancel This Order?");
                    const remainingProducts = filteredProductsUser.filter(product => product._id !== id)
                    setFilteredProductsUser(remainingProducts)
                }
            })
    }
    return (
        <Container>
            <Typography style={{ textAlign: 'center', color: "gold" }} gutterBottom variant="h2" component="div">
                My Orders
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {!loading &&
                    filteredProductsUser.map(product => <Grid item xs={2} sm={4} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                width='100%'
                                // height="140"
                                image={product?.picture}
                                alt="green iguana"
                            />
                            <CardContent
                                sx={{ height: 155 }}
                            >
                                <Typography gutterBottom variant="h6" component="div">
                                    {product?.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product?.about}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span style={{ color: 'inherit', fontWeight: 'bold' }}>Price: $</span>{product?.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span style={{ color: 'inherit', fontWeight: 'bold' }}>Ordered By: </span>{product?.email}
                                </Typography>
                            </CardContent>
                            {/* <br> */}
                            <CardActions>
                            <Button onClick={() => handleDelete(product?._id)} size="small">Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>)
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

export default MyOrders;