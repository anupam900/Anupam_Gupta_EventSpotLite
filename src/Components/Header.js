import React from 'react';
import { AppBar, Toolbar, Typography, Button, Select, MenuItem } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from 'styled-components';

const Logo = styled.img`
  height: 40px;
  margin-right: 20px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo src="/images/logo.png" alt="EventSpot Lite" />
        <Typography variant="h6" component="div">
          EventSpot Lite
        </Typography>
        <Spacer />
        <LocationOnIcon />
        <Select defaultValue="Select Location" style={{ marginLeft: '10px', marginRight: '20px', color: 'white' }}>
          <MenuItem value="City Park">City Park</MenuItem>
          <MenuItem value="Art Gallery">Art Gallery</MenuItem>
          <MenuItem value="Downtown Plaza">Downtown Plaza</MenuItem>
          <MenuItem value="City Stadium">City Stadium</MenuItem>
          <MenuItem value="Convention Center">Convention Center</MenuItem>
        </Select>
        <Button color="inherit" style={{ marginRight: '10px' }}>Create Event</Button>
        <Button color="inherit">Sign In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
