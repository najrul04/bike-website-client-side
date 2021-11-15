import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from './../../../hooks/useAuth'
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';
import Reviews from '../Reviews/Reviews';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddAProduct from '../AddAProduct/AddAProduct';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const {admin} = useAuth()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div  style={{margin:"10px 0"}}>
      <Toolbar />
      
      <Divider />
      <Link style={{color: 'black', textDecoration: 'none', marginRight: '10px'}}  to="/home"><Button><i className="fas fa-home">Home</i></Button></Link> <br/>
      <Link style={{color: 'black', textDecoration: 'none', marginRight: '10px'}} to={`${url}/payment`}><Button>Payment</Button></Link> <br/>
      <Link style={{color: 'black', textDecoration: 'none', marginRight: '10px'}} to={`${url}/myOrders`}><Button>My Order</Button></Link> <br />
      <Link style={{color: 'black', textDecoration: 'none', marginRight: '10px'}} to={`${url}/reviews`}><Button>Reviews</Button></Link>

      {

          admin && <Box>

      <Link style={{color: 'black', textDecoration: 'none', marginRight: '10px'}} to={`${url}/makeAdmin`}> <Button>Make Admin</Button> </Link>

      <Link style={{color: 'black', textDecoration: 'none', marginRight: '10px'}} to={`${url}/manageAllOrders`}> <Button>Manage All Orders</Button> </Link>

      <Link style={{color: 'black', textDecoration: 'none', marginRight: '10px'}} to={`${url}/AddAProduct`}> <Button>Add a Product</Button> </Link>

      <Link style={{color: 'black', textDecoration: 'none', marginRight: '10px'}} to={`${url}/ManageProducts`}> <Button>Manage Products</Button> </Link>

      

          </Box>

      }
      
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{margin:"5px 0"}} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>

        <Route exact path={`${path}/payment`}>
            <Payment></Payment>
        </Route>

        <Route path={`${path}/myOrders`}>

          <MyOrders></MyOrders>

        </Route>

        <Route path={`${path}/reviews`}>

          <Reviews></Reviews>

        </Route>

        <AdminRoute path={`${path}/makeAdmin`}>

            <MakeAdmin></MakeAdmin>

        </AdminRoute>

        <AdminRoute path={`${path}/manageAllOrders`}>

            <ManageAllOrders></ManageAllOrders>

        </AdminRoute>

        <AdminRoute path={`${path}/AddAProduct`}>

            <AddAProduct></AddAProduct>

        </AdminRoute>

        <AdminRoute path={`${path}/ManageProducts`}>

            <ManageProducts></ManageProducts>

        </AdminRoute>

      </Switch>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
