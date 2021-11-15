import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg'

const Login = () => {

    

    const [loginData, setLoginData] = useState({})
    const {user, loginUser, signInWithGoogle, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault()

    }

    const handleGoogleSignIn = () => {

        signInWithGoogle( location, history )

    }

    return (
        

        <Container>
            

        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            
        <Typography style={{width: '100%', marginTop: '20px', fontSize:'40px', fontWeight: '500'}}  variant="body1" gutterBottom> Login </Typography>

        <form style={{width: '100%', marginTop: '20px'}}  onSubmit={handleLoginSubmit}>

        <TextField
            sx={{width:'75%', m:2 }}
            id="standard-basic"
            label="Your Email"
            name="email"
            onChange={handleOnChange}
            variant="standard"
            />

        <TextField
            sx={{width:'75%', m:2}}
            id="standard-basic"
            label="Your Password"
            name="password"
            onChange={handleOnChange}
            type="password"
            variant="standard"
            />

            <Button type="submit" sx={{width: '50%' ,color: 'white'}} style={{ padding: "7px 12px", margin: '10px 0', backgroundColor: '#263238' }} variant="contained" >Login</Button>

            <NavLink style={{textDecoration:"none"}} to="/register">

            <Button variant="text">Are You New Here? Please Register!</Button>

            </NavLink>

            {isLoading && <CircularProgress />}

            {user?.email && <Alert severity="success">Logged In successfully!</Alert>}
            {authError && <Alert severity="error"> {authError} </Alert>}

        </form>

        <p>----------------------------------</p> 

        <Button onClick={handleGoogleSignIn} sx={{width: '50%' ,color: 'white'}} style={{ padding: "7px 12px", margin: '10px 0', backgroundColor: '#263238' }} variant="contained">Google Sign in</Button>

        </Grid>

        <Grid item xs={12} md={6}>
            
        <img style={{width: '100%', marginTop: '80px'}} src={login} alt="" />

        </Grid>
        
        </Grid>

        </Container>
    );
};

export default Login;