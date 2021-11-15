import * as React from 'react';
import { Grid } from '@mui/material';
import Explores from '../../Explores/Explores';
import useAuth from '../../../../hooks/useAuth';

    const DashboardHome = () => {

    const [date, setDate] = React.useState(new Date())

    const {user} = useAuth();

    return (
        
        <Grid container spacing={2}>

        <Grid item xs={12} sm={6} md={12}>

                    <div className="text-center mt-5 w-50 mx-auto">


                            <h1 className="text-dark">Welcome {user?.displayName} in the Dashboard!</h1>
                            <p>You Can Explore in here as you wish to </p>

                    </div>


            {/* <Calendar
            
            date={date}
            setDate={setDate}

            ></Calendar> */}

        </Grid>

        <Grid item xs={12} sm={7}>

            {/* <Explores date={date}></Explores> */}

        </Grid>

     </Grid>
    );
};

export default DashboardHome;