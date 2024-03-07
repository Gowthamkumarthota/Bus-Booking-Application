import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AcIcon from '@mui/icons-material/AcUnit';
import NonAcIcon from '@mui/icons-material/Brightness1';
import SeaterIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import SleeperIcon from '@mui/icons-material/Hotel';
import BeforeTenAMIcon from '@mui/icons-material/WbTwilight';
import TenAMToFivePMIcon from '@mui/icons-material/Brightness5';
import FivePMToElevenPMIcon from '@mui/icons-material/NightsStay';
import AfterElevenPMIcon from '@mui/icons-material/LightMode';

const View = () => {
  const [priceDropChecked, setPriceDropChecked] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 100, max: 3999, value: 100 });
  const [selectedBusType, setSelectedBusType] = useState([]);
  const [selectedDepartureTime, setSelectedDepartureTime] = useState([]);

  const handlePriceDropChange = () => {
    setPriceDropChecked(!priceDropChecked);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange({ ...priceRange, value: event.target.value });
  };

  const handleBusTypeChange = (type) => {
    if (selectedBusType.includes(type)) {
      setSelectedBusType(selectedBusType.filter((item) => item !== type));
    } else {
      setSelectedBusType([...selectedBusType, type]);
    }
  };

  const handleDepartureTimeChange = (time) => {
    if (selectedDepartureTime.includes(time)) {
      setSelectedDepartureTime(selectedDepartureTime.filter((item) => item !== time));
    } else {
      setSelectedDepartureTime([...selectedDepartureTime, time]);
    }
  };

  return (
    <div style={{ display: 'flex', marginTop: '40px' }}>
      <Card
        sx={{
          width: 300,
          marginRight: 2,
          height: '440px',
          padding: 2,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add shadow
          marginLeft: '20px', // Add left margin
          marginBottom: '20px', // Add bottom margin
          backgroundColor: '#fff', // Add background color
          border: '5px solid #f5f5f5', // Add colored border
        }}
      >
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <label>
              <input
                type="checkbox"
                checked={priceDropChecked}
                onChange={handlePriceDropChange}
              />
              Price Drop
            </label>
          </div>
          <span>Bus Type:</span>
          <br></br>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
              <Button
                variant={selectedBusType.includes('ac') ? 'contained' : 'outlined'}
                startIcon={<AcIcon />}
                onClick={() => handleBusTypeChange('ac')}
                style={{ marginRight: '8px', marginBottom: '8px' }}
              >
                AC
              </Button>
              <Button
                variant={selectedBusType.includes('non-ac') ? 'contained' : 'outlined'}
                startIcon={<NonAcIcon />}
                onClick={() => handleBusTypeChange('non-ac')}
                style={{ marginRight: '8px', marginBottom: '8px' }}
              >
                Non AC
              </Button>
              <Button
                variant={selectedBusType.includes('seater') ? 'contained' : 'outlined'}
                startIcon={<SeaterIcon />}
                onClick={() => handleBusTypeChange('seater')}
                style={{ marginRight: '8px', marginBottom: '8px' }}
              >
                Seater
              </Button>
              <Button
                variant={selectedBusType.includes('sleeper') ? 'contained' : 'outlined'}
                startIcon={<SleeperIcon />}
                onClick={() => handleBusTypeChange('sleeper')}
                style={{ marginRight: '8px', marginBottom: '8px' }}
              >
                Sleeper
              </Button>
            </div>
            
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <span>{priceRange.min}</span>
            <div style={{ flex: 1, marginLeft: '8px', marginRight: '8px' }}>
              <input
                type="range"
                min={priceRange.min}
                max={priceRange.max}
                value={priceRange.value}
                onChange={handlePriceRangeChange}
                style={{ width: '100%' }}
              />
            </div>
            <span>{priceRange.max}</span>
          </div>
          <span>Price Range</span>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <Button
                variant={selectedDepartureTime.includes('before-10am') ? 'contained' : 'outlined'}
                startIcon={<BeforeTenAMIcon style={{ transform: 'rotate(-20deg)' }} />}
                onClick={() => handleDepartureTimeChange('before-10am')}
                style={{ marginRight: '8px' }}
              >
                Before 10 AM
              </Button>
              <Button
                variant={selectedDepartureTime.includes('10am-5pm') ? 'contained' : 'outlined'}
                startIcon={<TenAMToFivePMIcon style={{ transform: 'rotate(20deg)' }} />}
                onClick={() => handleDepartureTimeChange('10am-5pm')}
                style={{ marginRight: '8px' }}
              >
                10 AM - 5 PM
              </Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <Button
                variant={selectedDepartureTime.includes('5pm-11pm') ? 'contained' : 'outlined'}
                startIcon={<FivePMToElevenPMIcon style={{ transform: 'rotate(20deg)' }} />}
                onClick={() => handleDepartureTimeChange('5pm-11pm')}
                style={{ marginRight: '8px' }}
              >
                5 PM - 11 PM
              </Button>
              <Button
                variant={selectedDepartureTime.includes('after-11pm') ? 'contained' : 'outlined'}
                startIcon={<AfterElevenPMIcon style={{ transform: 'rotate(-20deg)' }} />}
                onClick={() => handleDepartureTimeChange('after-11pm')}
                style={{ marginRight: '8px' }}
              >
                After 11 PM
              </Button>
            </div>
            <span>Departure Time</span>
          </div>
        </CardContent>
      </Card>
      {/* Placeholder for other content */}
      <div>
        {/* Add your other content here */}
      </div>
    </div>
  );
};

export default View;