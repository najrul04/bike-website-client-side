import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import first from '../../../images/1.jpg'
import second from '../../../images/2.jpg'
import third from '../../../images/3.jpg'

import Review from '../Review/Review';

const reviews = [

    {

        id: 1,
        name: 'Sheldon Cooper',
        description: 'A very perfect place to Purchase your Bikes From! So professional!',
        img: first 

    },

    {

        id: 2,
        name: 'Penny Hofstadter',
        description: 'Very professional and its very good place to buy your bike from.',
        img: second 

    },

    {

        id: 3,
        name: 'Bernadette Rostenkowski',
        description: 'Special taking care for the female bikers. This place is phenomenal for bike lovers!',
        img: third 

    }

]

const Reviews = () => {
    return (
        
            <Box style={{ margin: "20px 0 0 0"}} sx={{ flexGrow: 1 }}>
            <Container>

                <Typography sx={{fontWeight:600 , m:2}} variant="h4" component="div" style={{ margin: "20px 0"}}>

                    Reviews

                </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {

            reviews.map(review => <Review
                
                    key={review.id}
                    review={review}
                
                ></Review>)

            }
            </Grid>

            </Container>
            </Box>
    );
};

export default Reviews;