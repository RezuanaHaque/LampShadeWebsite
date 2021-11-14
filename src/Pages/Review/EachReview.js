import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Divider, Grid, Rating } from '@mui/material';
import { Box } from '@mui/system';
import UseAuth from '../../Hooks/UseAuth';


const EachReview = ({ review }) => {
    const { user } = UseAuth()
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Box sx={{ boxShadow: 3 }}>
                <Card sx={{ border: '2px solid gray' }}>
                    <CardHeader
                        sx={{ color: 'text.disabled' }}
                        title={review.email}
                        subheader={review.date}
                    />
                    <Divider sx={{ bgcolor: 'text.disabled', }} />
                    <CardContent sx={{ height: 70 }}>
                        <Typography variant="body2" color="text.secondary">
                            {review.review}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Rating name="read-only" sx={{ fontSize: '40px' }} value={review?.rating} readOnly />
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    );
};

export default EachReview;