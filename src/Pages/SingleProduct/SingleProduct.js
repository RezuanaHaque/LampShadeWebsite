import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';


const SingleProduct = () => {
    const history=useHistory()
    const {
        user,
        error,
    } = UseAuth()
    const { singleproductID } = useParams()
    const [singleProduct, setSingleProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/products/${singleproductID}`)
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data[0])
            })
    }, [])
    // console.log(singleProduct.name);
    const [logindata, setlogindata] = useState({})
    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newlogindata = { ...logindata }
        newlogindata[field] = value
        setlogindata(newlogindata)
    }
    const handleloginsubmit = (e) => {
        const data = singleProduct;
        data.email = user.email
        data.moreInfo = logindata
        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        history.push('/myorders')
        e.preventDefault()
    }

    return (
        <Container>
            <Grid container spacing={2} sx={{ marginTop: 10 }}>
                <Grid item xs={6} md={8}>
                    <h1>Purchase Page</h1>
                    <form
                        onSubmit={handleloginsubmit}
                    >
                        <TextField

                            sx={{ width: 1, m: 1 }}
                            required
                            id="outlined-required"
                            label="Your Name"
                            name='name'
                            type="text"
                            defaultValue={user.displayName}
                            variant="standard" />
                        <TextField
                            sx={{ width: 1, m: 1 }}
                            required
                            id="outlined-required"
                            label="Your Email"
                            name='email'
                            type="email"
                            defaultValue={user.email}
                            variant="standard" />
                        <TextField
                            sx={{ width: 1, m: 1 }}
                            required
                            id="outlined-required"
                            label="Your Phone Number"
                            name='phone'
                            type="number"
                            onBlur={handleonBlur}
                            defaultValue="Your Phone Number"
                            variant="standard" />
                        <TextField
                            sx={{ width: 1, m: 1 }}
                            required
                            id="outlined-required"
                            label="Your Address"
                            name='address'
                            type="text"
                            onBlur={handleonBlur}
                            variant="standard" />
                        <Box textAlign='center'>
                            <Button sx={{ justifyContent: 'center' }} type="submit" variant='contained'>Purchase</Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            // height="160"
                            width='100%'
                            // height="140"
                            image={singleProduct?.picture}
                            alt="green iguana"
                        />
                        <CardContent
                            sx={{ height: 120 }}
                        >
                            <Typography gutterBottom variant="h6" component="div">
                                {singleProduct?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {singleProduct?.about}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: $ {singleProduct?.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SingleProduct;