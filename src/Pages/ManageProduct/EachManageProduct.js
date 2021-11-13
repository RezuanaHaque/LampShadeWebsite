import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const EachManageProduct = ({product,handleDelete}) => {
    
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
                    sx={{ height: 120 }}
                >
                    <Typography gutterBottom variant="h6" component="div">
                        {product?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product?.about}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span style={{color:'black'}}>Price : </span> ${product?.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>handleDelete(product._id)} size="small" >Delete</Button>
                    {/* <Link to={`/products/${product?._id}`}><Button size="small">Learn More</Button></Link> */}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default EachManageProduct;