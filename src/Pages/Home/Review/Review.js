import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import ReactStars from "react-rating-stars-component";

const Review = (props) => {
    const {name, description, img} = props.review;
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
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
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
     </CardContent>
      <CardActions>
      </CardActions>
    </Card> 

                </Box>
        </Grid>
    );
};

export default Review;