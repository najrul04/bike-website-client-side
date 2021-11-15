import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Button} from '@mui/material';

const Reviews = () => {
    const { user } = useAuth();

    
  const textArea = {
    height: "100px",
    outline: "none",
    border: "2px solid #3498db",
    width: "100%",
    padding: "5px",
  };

    return (
        <div className="pt-3">
      <Container>
        <div className="form-area">
          <h2 className="text-center mb-4 fw-bold" style={{ color: "#3498db" }}>
            Reviews
          </h2>
          <form onSubmit=''>
            <input
              className="d-block w-75 my-1"
              type="text"
              disabled
              defaultValue={user.displayName}
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              className="d-block w-75 my-1"
              onBlur=''
              type="text"
              name="img"
              placeholder="Image URL"
              required
            />
            <input
              className="d-block w-75 my-1"
              onBlur=''
              type="text"
              name="rating"
              placeholder="Rating"
              required
            />
            <textarea
              className="d-block w-75 my-1"
              style={textArea}
              onBlur=''
              type="text"
              name="des"
              placeholder="Description"
              required
            />
            <Button type="submit" sx={{ color: 'white'}} style={{ padding: "7px 12px", margin: '10px 0', backgroundColor: '#263238' }} variant="contained" >Send Reviews</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;