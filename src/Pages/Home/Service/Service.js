import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

const Service = (props) => {
    const {name, description, img} = props.service
    return (
        <Grid item xs={4} sm={4} md={4}>
                <Box sx={{ boxShadow: 3 }}>

                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                component="img"
                style={{width: 'auto', height: '250px', margin: '0 auto'}}
                image={img}
                alt=""
            />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardActions>

        <Button type="submit" sx={{ color: 'white'}} style={{ padding: "7px 12px", margin: '10px auto', backgroundColor: '#263238' }} variant="contained" >Buy Now</Button>
      </CardActions>
    </Card> 

                </Box>
        </Grid>
    );
};

export default Service;