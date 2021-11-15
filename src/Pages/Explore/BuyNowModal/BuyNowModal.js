import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import  {Button}  from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BuyNowModal = ({openBuyNow, handleBuyNowClose, productsList, date, setBuyNowSuccess }) => {

    const {name, price} = productsList;
    const {user} = useAuth();
    const initialInfo = {bikeName: user.displayName, email: user.email,  phone: ''}

    const [productsListInfo, setProductsListInfo] = useState({initialInfo});

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...productsListInfo};
        newInfo[field] = value;
        setProductsListInfo(newInfo)

    }

    const handleBuyNowSubmit = e => {
      
        // collect data
        const explore = {

          ...productsListInfo,
          price,
          serviceName: name,
          date: date.toLocaleDateString()
          
        }

        // Send to Server

        fetch('https://immense-wave-27384.herokuapp.com/explores', {

          method: 'POST',
          headers: {

            'content-type': 'application/json'

          },

          body: JSON.stringify(explore)

        })
        .then(res=> res.json())
        .then(data => {

          if(data.insertedId){

            setBuyNowSuccess(true)

            handleBuyNowClose()

          }

        });

        e.preventDefault()

    }

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBuyNow}
        onClose={handleBuyNowClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBuyNow}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2">
              {name}
            </Typography>

            <form onSubmit={handleBuyNowSubmit}>
              
            <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="buyerName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />

            <Button type="submit" sx={{ color: 'white'}} style={{ padding: "7px 12px", margin: '10px 0', backgroundColor: '#263238' }} variant="contained" >Submit</Button>

            </form>

          </Box>
        </Fade>
      </Modal>
    );
};

export default BuyNowModal;