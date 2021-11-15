import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ProductsList from '../ProductsList/ProductsList';
import bike1 from '../../../images/bike1.jpg'
import bike2 from '../../../images/bike2.jpg'
import bike3 from '../../../images/bike3.jpg'
import bike4 from '../../../images/bike4.jpg'
import bike5 from '../../../images/bike5.jpg'
import bike6 from '../../../images/bike6.jpg'
import bike7 from '../../../images/bike7.jpg'
import bike8 from '../../../images/bike8.jpg'
import bike9 from '../../../images/bike9.jpg'
import bike10 from '../../../images/bike10.jpg'

const productsLists = [

    {

        id: 1,
        name: 'Oral Surgery',
        description: '07.00 PM - 08.00 PM',
        price: 10,
        img: bike1

    }
    ,

    {

        id: 2,
        name: 'Oral Surgery',
        description: '07.00 PM - 08.00 PM',
        price: 10,
        img: bike2

    }
    ,

    {

        id: 3,
        name: 'Oral Surgery',
        description: '07.00 PM - 08.00 PM',
        price: 10,
        img: bike3

    }
    ,

    {

        id: 4,
        name: 'Oral Surgery',
        description: '07.00 PM - 08.00 PM',
        price: 10,
        img: bike4

    }
    ,

    {

        id: 5,
        name: 'Oral Surgery',
        description: '07.00 PM - 08.00 PM',
        price: 10,
        img: bike5

    }
    ,

    {

        id: 6,
        name: 'Oral Surgery',
        description: '07.00 PM - 08.00 PM',
        price: 10,
        img: bike6

    }
    ,

    {

        id: 7,
        name: 'Oral Surgery',
        description: '07.00 PM - 08.00 PM',
        price: 10,
        img: bike7
    }
    ,

    {

        id: 8,
        name: 'Oral Surgery',
        description: '07.00 PM - 08.00 PM',
        price: 10,
        img: bike8

    }
    ,

    {

        id: 9,
        name: 'Oral Surgery',
        description: '07.00 PM - 08.00 PM',
        price: 10,
        img: bike9

    }
    ,

    {

        id: 10,
        name: 'Oral Surgery',
        description: '07.00 PM - 08.00 PM',
        price: 10,
        img: bike10

    }

]

const AvailableProducts = ({date}) => {

    const [buyNowSuccess, setBuyNowSuccess] = useState(false)

    return (
        <Container>
            <Typography variant="h5" sx={{color: 'info.secondary', mb:2, fontWeight: 600 }}>Available Product {date.toDateString()} </Typography>

            {buyNowSuccess && <Alert severity="success">Purchase Application Sent Successfully!</Alert>}

            <Grid container spacing={2}>

                {

                    productsLists.map(productsList => <ProductsList
                    
                    key={productsList.id}
                    productsList={productsList}
                    date={date}
                    setBuyNowSuccess={setBuyNowSuccess}
                    
                    ></ProductsList>)   

                }
            
            </Grid>

        </Container>
    );
};

export default AvailableProducts;