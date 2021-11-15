import { Alert, Container, Grid} from '@mui/material';
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
        name: 'Stylish Black',
        description: 'Stylish Black Bike will give you the perfect feeling of having a ride that takes you anywhere you wish for.',
        price: 5000,
        img: bike1

    }
    ,

    {

        id: 2,
        name: 'Yellow Fever',
        description: 'A very stylish bike which is 500cc bike that you could ride and fly',
        price: 6000,
        img: bike2

    }
    ,

    {

        id: 3,
        name: 'Mountain Motorcycle',
        description: 'A perfect Bike for you that will help you to ride in mountain safely with more fun way!',
        price: 7000,
        img: bike3

    }
    ,

    {

        id: 4,
        name: 'Futuristic Bike',
        description: 'The kind of bike that is futuristic and it is going to be amazing and more common in upcoming future',
        price: 8000,
        img: bike4

    }
    ,

    {

        id: 5,
        name: 'Racing Bike',
        description: 'Sometimes it is fun to do racing once in for a while which you can do with lots of fun.',
        price: 9000,
        img: bike5

    }
    ,

    {

        id: 6,
        name: 'Touring Stylish Bike',
        description: 'Best bike for touring and going out to have fun here and there',
        price: 10000,
        img: bike6

    }
    ,

    {

        id: 7,
        name: 'Harley Davidson',
        description: 'Harley-Davidson, Inc., H-D, or Harley, is an American motorcycle manufacturer founded in 1903 in Milwaukee, Wisconsin. Along with Indian',
        price: 11000,
        img: bike7
    }
    ,

    {

        id: 8,
        name: 'Dessert Bike',
        description: 'An all-terrain vehicle (ATV), also known as a light utility vehicle (LUV),[1] a quad bike, or simply a quad, as defined by the American National Standards Institute (ANSI); ',
        price: 11000,
        img: bike8

    }
    ,

    {

        id: 9,
        name: 'Night Wing',
        description: 'If you are a lover of Batman you will know  that night wing bike is named after one of bruce waynes apprentice.',
        price: 12000,
        img: bike9

    }
    ,

    {

        id: 10,
        name: 'Competitive Bike',
        description: 'A racing bicycle, also known as a road bike, and once popularly known as a ten speed',
        price: 13000,
        img: bike10

    }

]

const AvailableProducts = ({date}) => {

    const [buyNowSuccess, setBuyNowSuccess] = useState(false)

    return (
        <Container>

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