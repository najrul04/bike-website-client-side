import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const {token} = useAuth();

    const handleOnBlur = e => {
        e.preventDefault()
        setEmail(e.target.value)

    }

    const handleAdmitSubmit = e => {

        const user = {email};

        fetch('https://immense-wave-27384.herokuapp.com/users/admin', {

            method: 'PUT',
            headers: {

                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'

        },

        body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){

                console.log(data);
                setSuccess(true)

            }
        })

        e.preventDefault()

    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdmitSubmit}>

            <TextField
            sx={{width: '50%'}}
             type="email"
             label="Email"
             onBlur={handleOnBlur} 
             variant="standard" />

            <Button type="submit" sx={{ color: 'white'}} style={{ padding: "7px 12px", margin: '10px 0', backgroundColor: '#263238' }} variant="contained" >Make Admin</Button>

            </form>
            {success?.email && <Alert severity="success">Make Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;