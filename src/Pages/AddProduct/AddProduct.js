import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const AddProduct = () => {
    const {loading } = UseAuth()
    const [productData, setProductData] = useState({})
    const history= useHistory()
    const handleonchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...productData }
        newData[field] = value
        setProductData(newData)
    }
    const handleloginsubmit = (e) => {
        const { name, picture, about, price } = productData
        const product = { name, picture, about, price }
        // console.log(product);
        fetch('https://stark-anchorage-74601.herokuapp.com/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res=>res.json())

            history.push('/dashboard')
            // window.location.reload()
        e.preventDefault()
    }
    return (
        <Container>
            <Box textAlign='center'>
                        <Typography variant="h2" gutterBottom>
                            Product Description
                        </Typography>
                    </Box>
            {!loading &&
                <form onSubmit={handleloginsubmit}>
                    <TextField
                        required
                        sx={{ width: 1, m: 1 }}
                        id="standard-basic"
                        label="Product Name"
                        name='name'
                        type="text"
                        onBlur={handleonchange}
                        variant="standard" />
                    <TextField
                        required
                        sx={{ width: 1, m: 1 }}
                        id="standard-basic"
                        label="Description"
                        name='about'
                        type="text"
                        onBlur={handleonchange}
                        variant="standard" />
                    <TextField
                        required
                        sx={{ width: 1, m: 1 }}
                        id="outlined-password-input"
                        label="Product Price"
                        name='price'
                        onBlur={handleonchange}
                        type="number"
                        autoComplete="current-password"
                    />
                    <TextField
                        required
                        sx={{ width: 1, m: 1 }}
                        id="outlined-password-input"
                        label="Product Image Address"
                        name='picture'
                        onBlur={handleonchange}
                        type="text"
                        autoComplete="current-password"
                    />
                    <Box textAlign='center'>
                        <Button sx={{ justifyContent: 'center' }} type="submit" variant='contained'>Submit</Button>
                    </Box>
                </form>
            }
        </Container>
    );
};

export default AddProduct;