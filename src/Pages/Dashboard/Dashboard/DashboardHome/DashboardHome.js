import * as React from 'react';
import { Grid } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

    const DashboardHome = () => {


    const {user} = useAuth();

    return (
        
        <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={12}>

                    <div className="text-center mt-5 w-50 mx-auto">


                            <h1 className="text-dark">Welcome {user?.displayName} in the Dashboard!</h1>
                            <p>You Can Explore in here as you wish to </p>

                    </div>

        </Grid>

     </Grid>
    );
};

export default DashboardHome;