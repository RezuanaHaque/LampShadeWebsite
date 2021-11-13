import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState({})

    const handleBlur = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {

        const user = { email }
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

        e.preventDefault()
    }
    return (
        <Container>
            <Typography variant="h4" component="h2" sx={{marginTop:'200px'}}>
                Choose Admin
            </Typography>;
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: 1, m: 1 }}
                    id="standard-basic"
                    label="Admin's Email Address"
                    type="text"
                    onBlur={handleBlur}
                    variant="standard" />
                    <Button variant='contained' type='submit'>submit</Button>
            </form>
        </Container>
    );
};

export default MakeAdmin;