import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

  const {user, logout} = useAuth()

    return (
        
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{ background: "#263238", margin:'0 0 10px 0' , padding: '5px 0'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{color: 'white', textDecoration: 'none', marginRight:'700px'}} to="/home">Best Bike</Link>
          </Typography>

          <Link to="/explore">

          <Button style={{ color: "white" , margin: '0 20px'}} color="inherit">Explore</Button>

          </Link>

         {

            user?.email ? 

            <Box>

              <NavLink style={{ color: "white", textDecoration: 'none'}} to="/dashboard"> 
              
              <Button style={{ color: "white" , margin: '0 20px'}} color="inherit">DashBoard</Button> 
          
              </NavLink>

              <Button style={{ color: "white" , margin: '0 20px'}} onClick={logout} color="inherit">Logout</Button> 

                  <small className="fs-6 fw-bold text-success">
                    {user?.displayName}
                  </small>

            </Box>

            :

            <NavLink style={{ color: "white", textDecoration: 'none', margin: '0 20px'}} to="/login"> 
           
              <Button color="inherit">Login</Button> 
         
            </NavLink>

         }

        </Toolbar>
      </AppBar>
    </Box>

    );
};

export default Navigation;