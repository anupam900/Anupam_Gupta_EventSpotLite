import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from './Components/Header';
import EventList from './Components/EventList';
import './App.css'; // Add your styles here

function App() {
  return (
    <div className="App">
      <Header />
      <Box className="background-video">
        <video autoPlay loop muted>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Container className="content-container">
        <Typography variant="h3" align="center" gutterBottom>
          EventSpot Lite
        </Typography>
        <EventList />
      </Container>
    </div>
  );
}

export default App;
