import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'; // Correct import
import ChairIcon from '@mui/icons-material/Chair';

// Custom styles for the form
const useStyles = makeStyles({
  seatCard: {
    marginLeft: '20px',
    marginTop: '40px',
    width: 'fit-content',
    margin: '0 auto',
    textAlign: 'left',
    boxShadow: '0px 0px 10px rgba(255, 165, 0, 0.5)',
    border: '2px solid orange',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  formCard: {
    marginLeft: '790px', 
    marginTop: '10px', 
    width: 'fit-content',
    textAlign: 'top',
    boxShadow: '0px 0px 10px rgba(255, 165, 0, 0.5)',
    border: '2px solid orange',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px', // Add padding to separate the form elements
  },
});

const SeatVacancy = () => {
  const location = useLocation();
  const { seatvacancy } = location.state || {};

  const [formData, setFormData] = useState({
    ID: '',
    name: '',
    boarding: '',
    destination: '',
    boardingtime: '',
    droptime: '',
    price: '',
    noofseats: '',
    acornonac: '',
    seaterorsleeper: '',
    seatstatus: '',
    rating: '',
    selectedseats: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here
  };

  const classes = useStyles();

  // Split seatvacancy string by commas and remove empty strings
  const seatNumbers = seatvacancy ? seatvacancy.split(',').filter((seat) => seat.trim() !== '') : [];

  // Generate an array of numbers from 1 to 28
  const seatAvailability = Array.from({ length: 28 }, (_, index) => index + 1);

  // Calculate the number of squares per row
  const squaresPerRow = 7;

  // Split the seat availability array into rows
  const seatRows = [];
  for (let i = 0; i < seatAvailability.length; i += squaresPerRow) {
    seatRows.push(seatAvailability.slice(i, i + squaresPerRow));
  }

  return (
    <div>
      <Card className={classes.seatCard}>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {seatRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                  marginBottom: rowIndex === 1 ? '40px' : '20px', // Add more space between 2nd and 3rd rows
                }}
              >
                {row.map((seatNumber) => (
                  <Button
                  key={seatNumber}
                  variant="outlined"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid black',
                    textAlign: 'center',
                    lineHeight: '40px',
                    backgroundColor: seatNumbers.includes(seatNumber.toString()) ? '#ffcccc' : '#e0ffe0', // Change colors here
                    color: '#000000', // Black color for text
                  }}
                  startIcon={<ChairIcon style={{ color: '#ffffff' }} />} // White icon color
                >
                  {seatNumber}
                </Button>
                ))}
              </div>
            ))}
          </div>
          <Card className={classes.formCard}>
        <CardContent className={classes.formContent}>
          <TextField
            name="ID"
            label="ID"
            value={formData.ID}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="boarding"
            label="Boarding"
            value={formData.boarding}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="destination"
            label="Destination"
            value={formData.destination}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="boardingtime"
            label="Boarding Time"
            value={formData.boardingtime}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="droptime"
            label="Drop Time"
            value={formData.droptime}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="price"
            label="Price"
            value={formData.price}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="noofseats"
            label="Number of Seats"
            value={formData.noofseats}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="acornonac"
            label="AC or Non-AC"
            value={formData.acornonac}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="seaterorsleeper"
            label="Seater or Sleeper"
            value={formData.seaterorsleeper}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="seatstatus"
            label="Seat Status"
            value={formData.seatstatus}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="rating"
            label="Rating"
            value={formData.rating}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="selectedseats"
            label="Selected Seats"
            value={formData.selectedseats}
            onChange={handleChange}
            variant="outlined"
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </CardContent>
      </Card>
        </CardContent>
      </Card>

      <Card className={classes.formCard}>
        <CardContent className={classes.formContent}>
          <TextField
            name="ID"
            label="ID"
            value={formData.ID}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="boarding"
            label="Boarding"
            value={formData.boarding}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="destination"
            label="Destination"
            value={formData.destination}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="boardingtime"
            label="Boarding Time"
            value={formData.boardingtime}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="droptime"
            label="Drop Time"
            value={formData.droptime}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="price"
            label="Price"
            value={formData.price}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="noofseats"
            label="Number of Seats"
            value={formData.noofseats}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="acornonac"
            label="AC or Non-AC"
            value={formData.acornonac}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="seaterorsleeper"
            label="Seater or Sleeper"
            value={formData.seaterorsleeper}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="seatstatus"
            label="Seat Status"
            value={formData.seatstatus}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="rating"
            label="Rating"
            value={formData.rating}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            name="selectedseats"
            label="Selected Seats"
            value={formData.selectedseats}
            onChange={handleChange}
            variant="outlined"
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SeatVacancy;
