import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';


const Travel = () => {
  const users = [
    { name: 'Ramsai', phonenumber: '123456789', email: 'asdf@gmail.com', price: '', date: '', time: '' },
  ];

  // Define the number of cards per row
  const cardsPerRow = 3;

  const theme = useTheme();

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <h2>
        <center>Ticket Details</center>
      </h2>
      {users.map((user, index) => (
        <Card key={index} sx={{ maxWidth: 500,margin: '10px', border: '2px solid black', display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5" style={{ color: 'black' }}>
                < ConfirmationNumberIcon  style={{ fontSize: 50, color: 'black' }} />
                <h3>
                  <font face="Times New Roman" size="4"> Tickets Details</font>
                </h3>
              </Typography>
              <Typography variant="h6" color="black" textAlign='left'>
                <font face="Times New Roman" size="4">
                  name: {user.user}<br />
                  Phonenumber: {user.phonenumber}<br />
                  email:{user.email}<br />
                  Price :{user.price}<br />
                  Date & Time: {user.date} {user.time}
                </font>
              </Typography>
            </CardContent>
            
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="/static/images/cards/live-from-space.jpg"  // replace with your image or content
            alt="Live from space album cover"
          />
        </Card>
      ))}
    </div>
  );
};

export default Travel;