import React from 'react';
import Grid from '@mui/material/Grid';
import explore_bike from '../../../images/explore_bike.png';
import bg from '../../../images/bg1.jpg';
import { Button, Typography, Container, Box } from '@mui/material';

const bannerBg = {

    background: `url(${bg})`
    

}

const verticalCenter = {

    display: 'flex',
    alignItems: 'center',
    height: 400

}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{ ...verticalCenter ,textAlign: 'left'}} xs={12} md={6}>

         <Box>

         <Typography variant="h4">

        The Bike <br />
        of your Dream

        </Typography>

        <Typography variant="h5" sx={{ my:3, fontSize: 14, color:'gray', fontWeight: 300}}>

        Here you will find your dream bike to purchase and have it for a long period of time because we make sure that our stays last longer.

        </Typography>

        <Button sx={{ color: 'white'}} style={{ padding: "7px 12px", margin: '10px 0', backgroundColor: '#263238' }} variant="contained" >

            Click Here

        </Button>

        </Box>   

        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{width:500}} src={explore_bike} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;