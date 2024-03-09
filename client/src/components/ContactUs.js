import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Contactus = () => {
  return (
    <div>
      <center>
        <Card style={{ backgroundColor: '#ffe9ce', width: '1500px', marginTop: '20px' }}>
          <CardContent>
            <div className="paragraph-container" style={paragraphContainerStyle}>
              <h2 style={{ textAlign: 'left' }}>Contact us !</h2>
              <p style={{ textAlign: 'left' }}>
                Email : bus@gmail.com<br></br>
                ph:9966332211
              </p>
            </div>
          </CardContent>
        </Card>
      </center>
    </div>
  )
}


const paragraphContainerStyle = {
  width: '1400px',
  border: '2px solid black',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '15px',
};

export default Contactus