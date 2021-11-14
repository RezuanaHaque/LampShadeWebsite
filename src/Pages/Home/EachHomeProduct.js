import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const EachHomeProduct = ({ product ,index}) => {
    return (
        <>
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
                    sx={{ height: 155 }}
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
                    <Link to={`/products/${product?._id}`}><Button varient='contained' size="small" >Buy</Button></Link>
                    {/* <Link to={`/products/${product?._id}`}><Button size="small">Learn More</Button></Link> */}
                </CardActions>
            </Card>
        </Grid>
        {/* <SingleProduct index={index} /> */}
        </>
    );
};

export default EachHomeProduct;