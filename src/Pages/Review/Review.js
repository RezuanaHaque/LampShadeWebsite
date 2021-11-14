import { CircularProgress, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import EachReview from './EachReview';
const Review = () => {
    const { loading, user } = UseAuth()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://stark-anchorage-74601.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <Divider style={{ marginBottom: '60px' }}></Divider>
            <Typography style={{ textAlign: 'center', color: "gold" ,marginTop:'30px' }} gutterBottom variant="h4" component="div">
                Reviews
            </Typography>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {!loading &&
                    reviews.map(review => <EachReview key={review._id} review={review} user={user}></EachReview>)
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

export default Review;