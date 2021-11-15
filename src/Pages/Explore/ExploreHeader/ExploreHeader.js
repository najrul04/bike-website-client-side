import { Container, Grid, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'


const ExploreHeader = ({date, setDate}) => {
    return (

        <Container style={{background: '#9c92a1', border: 'none'}}>

        <Link style={{color: 'black', textDecoration: 'none', fontSize: '40px', padding: '5px 0'}} to="/home">Best Bike</Link>
            
            <Grid style={{margin: '20px 0 '}} container spacing={2}>

                <Grid item xs={12} md={6}>

                {/* <Calendar date={date} setDate={setDate}></Calendar> */}

                <Typography>

                    <h1>Explore</h1>

                    <p style={{color: 'black', textDecoration: 'none', fontSize: '30px', padding: '5px 0'}}>Here you will get to explore as much bike as you like to purchase.</p>

                    <p style={{color: 'black', textDecoration: 'none', fontSize: '30px', padding: '5px 0'}}>We care about our customers to here you can find proper guidance too.</p>

                    <Button type="submit" style={{ padding: "7px 12px", margin: '10px 0', backgroundColor: '#263238', color: 'white', border: 'none' }} variant="contained" >Guidance</Button>

                </Typography>

                </Grid>

                <Grid item xs={12} md={6}>

                <img style={{width: '100%'}} src={chair} alt='' />

                </Grid>

            </Grid>

        </Container>
    );
};

export default ExploreHeader;