import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';

import bike1 from '../../../images/bike1.jpg'
import bike2 from '../../../images/bike2.jpg'
import bike3 from '../../../images/bike3.jpg'
import bike4 from '../../../images/bike4.jpg'
import bike5 from '../../../images/bike5.jpg'
import bike6 from '../../../images/bike6.jpg'

const services = [

    {

        id: 1,
        name: 'Stylish Black',
        description: 'Stylish Black Bike will give you the perfect feeling of having a ride that takes you anywhere you wish for.',
        img: bike1 

    },

    {

        id: 2,
        name: 'Yellow Fever',
        description: 'A very stylish bike which is 500cc bike that you could ride and fly',
        img: bike2 

    },

    {

        id: 3,
        name: 'Mountain Motorcycle',
        description: 'A perfect Bike for you that will help you to ride in mountain safely with more fun way!',
        img: bike3 

    },

    {

        id: 4,
        name: 'Futuristic Bike',
        description: 'The kind of bike that is futuristic and it is going to be amazing and more common in upcoming future',
        img: bike4

    },

    {

        id: 5,
        name: 'Racing Bike',
        description: 'Sometimes it is fun to do racing once in for a while which you can do with lots of fun.',
        img: bike5 

    },

    {

        id: 6,
        name: 'Touring Stylish Bike',
        description: 'Best bike for touring and going out to have fun here and there',
        img: bike6 

    }

]

const Services = () => {
    return (
        
            <Box style={{ margin: "20px 0 0 0"}} sx={{ flexGrow: 1 }}>
            <Container>

                <Typography sx={{fontWeight:600 , m:2}} variant="h4" component="div" style={{ margin: "20px 0"}}>

                    Our Bikes

                </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {

                services.map(service => <Service
                
                    key={service.id}
                    service={service}
                
                ></Service>)

            }
            </Grid>

            </Container>
            </Box>
    );
};

export default Services;