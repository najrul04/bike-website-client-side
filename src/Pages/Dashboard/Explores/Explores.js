import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Explores = ({date}) => {
    const {user, token} = useAuth();
    const [ explores, setExplores] = useState([])

    useEffect( () => {

        const url = `http://localhost:5000/explores?email=${user.email}&date=${date}`
        fetch(url, {

            headers: {

              'authorization' : `Bearer ${token}`

            }

        })
        .then(res=> res.json())
        .then(data => setExplores(data))

    } , [date, user.email, token])
    return (
        <div>

                <h2>Explore: {explores.length}</h2>

                <TableContainer component={Paper}>
      <Table sx={{}} aria-label="Orders table">
        <TableHead>
          <TableRow>
            <TableCell>Bike Name</TableCell>
            <TableCell align="right">Bike</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {explores.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.bikeName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    );
};

export default Explores;