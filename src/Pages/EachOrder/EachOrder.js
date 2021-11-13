import { Grid, Button, Card, CardActions, CardContent, CardMedia, Typography, ToggleButtonGroup, ToggleButton, Chip } from '@mui/material';
import React, { useState } from 'react';

const EachOrder = ({ product, handleDelete, user }) => {

    // const [number, setNumber] = useState(pending === 'pending' ? 'pending' : 'shipped);
    const [status, setStatus] = useState('pending')

    const email = product?.email
    const _id = product?._id
    const handleShip = () => {
        setStatus('shipped')
        const statusObj = { email, _id }
        console.log(statusObj);
        fetch('http://localhost:5000/productswithusers', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(statusObj)
        })
            .then(res => res.json)
            .then(data => console.log(data))

    }


    return (
        <Grid item xs={2} sm={4} md={4}>
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
                    sx={{ height: 140 }}
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
                        <span style={{ color: 'inherit', fontWeight: 'bold' }}>Ordered By:</span>{product?.email}
                    </Typography>
                </CardContent>
                <CardActions>

                    <Button onClick={() => handleDelete(product?._id)} size="small">Delete</Button>
                    <Button onClick={() => handleShip(product?._id)} size="small">Ship</Button>

                    {
                        product.status && <Button >{product.status}</Button>
                    }



                </CardActions>
            </Card>
        </Grid>
    );
};

export default EachOrder;