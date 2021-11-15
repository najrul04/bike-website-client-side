import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bike from '../../../images/bike.png'
import bgBike from '../../../images/bgBike.jpg'
import { Typography } from '@mui/material';

const AboutUs = {

    background: `url(${bgBike})`,
    backgroundColor : 'rgba(45,58,74, 0.5)',
    backgroundBlendMode: 'inherit',
    width: 'auto'

}


const About = () => {
  return (
            
    <Box style={{marginTop: '40px'}}>

    <Box style={AboutUs}  sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
            <img
            style={{width:'auto'}} 
            src={bike} alt="" />
    </Grid>

    <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center'}}>
    <Box>

    <Typography variant="h3" sx={{mb:5}} style={{color: 'white'}}>

    About Us

    </Typography>
    <Typography variant="h4" sx={{mb:5}} style={{color:'white' ,fontSize: 25, fontWeight: 600, marginTop: '30px'}}>

    Best Bike You Could Find

    </Typography>

    <Typography variant="h4" style={{color:'white' ,fontSize: 25, fontWeight: 100, marginTop: '30px'}}>

    Here you will find the best kind of Bike you ever wished for and needed in nice price range. We are here to do our Business in a way that both side can be profited.

    </Typography>

    </Box>
</Grid>

</Grid>
</Box>

    </Box>

);
};


export default About;