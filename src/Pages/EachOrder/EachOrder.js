import { Grid, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const EachOrder = ({product,handleDelete}) => {
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
                                   <span style={{color:'inherit',fontWeight:'bold'}}>Price: $</span>{product?.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                <span style={{color:'inherit',fontWeight:'bold'}}>Ordered By:</span>{product?.email}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => handleDelete(product?._id)} size="small">Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>
    );
};

export default EachOrder;