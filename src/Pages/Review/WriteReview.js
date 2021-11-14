import { Button, Container, Grid, Rating, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const WriteReview = () => {
    const history = useHistory()
    const [value, setValue] = React.useState(2);
    const { user } = UseAuth()
    const [review, setReview] = useState()
    const handleBlur = (e) => {
        setReview(e.target.value);
    }

    const handleReview = (e) => {
        const reviews = { review }
        reviews.email = user.email
        reviews.date = date
        reviews.rating = value

        fetch('https://stark-anchorage-74601.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => setReview(data))
        history.push('/morelamps')
        e.preventDefault()
    }

    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substr(0, 10);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} md={6} >


                    <form onSubmit={handleReview}>

                        <Box style={{ marginTop: "100px" }}>
                            <h3>Please Write a Review So That We Can Improve Our Service</h3>
                            <input style={{ marginBottom: '20px' }} id="dateRequired" type="date" name="dateRequired" defaultValue={date} disabled />
                            <Box sx={{ alignItems: 'center' }}>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Box>
                            <TextField
                                id="filled-multiline-static"
                                label="Your Review"
                                fullWidth
                                multiline
                                onBlur={handleBlur}
                                rows={15}
                                // defaultValue="Default Value"
                                variant="filled"
                            />
                        </Box>

                        <Box textAlign='center' sx={{ m: 2 }} >
                            <Button type='submit' variant='contained'>Submit</Button>

                        </Box>

                    </form>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                    <img src="https://getillustrations.com/packs/flat-vector-illustrations-for-websites/scenes/_1x/rating%20_%20review,%20star,%20like,%20dislike_md.png" alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default WriteReview;