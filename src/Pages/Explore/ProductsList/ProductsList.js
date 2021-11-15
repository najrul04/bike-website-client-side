import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BuyNowModal from '../BuyNowModal/BuyNowModal';

const ProductsList = ({productsList, date, setBuyNowSuccess}) => {

    const {name, description, price, img} = productsList;

    const [openBuyNow, setOpenBuyNow] = React.useState(false);
    const handleBuyNowOpen = () => setOpenBuyNow(true);
    const handleBuyNowClose = () => setOpenBuyNow(false);

    return (

        <>
        
        <Grid item xs={12} sm={6} md={6}>

        <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          style={{height: 300}}
          component="img"
          height="140"
          image={img}
          alt="Bike"
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <Button onClick={handleBuyNowOpen} sx={{ color: 'white'}} style={{ padding: "7px 12px", margin: '10px 0', backgroundColor: '#263238' }} variant="contained" >Buy Now</Button>

    </Card>
        </Grid>

        <BuyNowModal

          date={date}

          productsList={productsList}

          openBuyNow = {openBuyNow}

          handleBuyNowClose = {handleBuyNowClose}
          
          setBuyNowSuccess = {setBuyNowSuccess}
          
          ></BuyNowModal>

        </>

    );
};

export default ProductsList;



        