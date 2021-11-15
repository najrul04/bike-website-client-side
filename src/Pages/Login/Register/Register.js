import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import register from '../../../images/register.jpg'
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const {user, registerUser, isLoading, authError} = useAuth()

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e => {

        if(loginData.password !== loginData.password2){

            alert("Your Password Didn't Match!!!")
            return;

        }

        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault()

    }

    return (
        <Container>

            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
            
                    <Typography style={{width: '100%', marginTop: '20px', fontSize:'40px', fontWeight: '500'}}  variant="body1" gutterBottom> Register </Typography>

            {
                    
                !isLoading && <form style={{width: '100%', marginTop: '20px'}}  onSubmit={handleLoginSubmit}>

        <TextField
            sx={{width:'75%', m:2 }}
            id="standard-basic"
            label="Your Name"
            name="name"
            onBlur={handleOnBlur}
            variant="standard"
            />

        <TextField
            sx={{width:'75%', m:2 }}
            id="standard-basic"
            label="Your Email"
            name="email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
            />

        <TextField
            sx={{width:'75%', m:2}}
            id="standard-basic"
            label="Your Password"
            name="password"
            onBlur={handleOnBlur}
            type="password"
            variant="standard"
            />
            

        <TextField
            sx={{width:'75%', m:2}}
            id="standard-basic"
            label="Confirm Your Password"
            name="password2"
            onBlur={handleOnBlur}
            type="password"
            variant="standard"
            />

            <Button type="submit" sx={{width: '50%' ,color: 'white'}} style={{ padding: "7px 12px", margin: '10px 0', backgroundColor: '#263238' }} variant="contained" >Register</Button>

            <NavLink style={{textDecoration:"none", display:'block'}} to="/login">

            <Button variant="text">Already Registered? Please Login!</Button>

            </NavLink>

        </form>
        
        }

        {isLoading && <CircularProgress />}

        {user?.email && <Alert severity="success">Creation of the User have done successfully!</Alert>}
        {authError && <Alert severity="error"> {authError} </Alert>}

        </Grid>

    <Grid item xs={12} md={6}>
        
        <img style={{width: '100%', marginTop: '120px'}} src={register} alt="" />

    </Grid>
        
        </Grid>

        </Container>
    );
};

export default Register;