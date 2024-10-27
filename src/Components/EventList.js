import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, CardMedia, Grid, MenuItem, Select } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventModal from './EventModal';
import events from '../Data/Events';
import './EventList.css';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('Anywhere');
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setFilteredEvents(
      events.filter(event =>
        (event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (location === 'Anywhere' || event.location === location)
      )
    );
  }, [searchTerm, location]);

  return (
    <div>
      <SearchContainer>
        <LocationOnIcon />
        <Select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ marginRight: '10px' }}
        >
          <MenuItem value="Anywhere">Anywhere</MenuItem>
          <MenuItem value="City Park">City Park</MenuItem>
          <MenuItem value="Art Gallery">Art Gallery</MenuItem>
          <MenuItem value="Downtown Plaza">Downtown Plaza</MenuItem>
          <MenuItem value="City Stadium">City Stadium</MenuItem>
          <MenuItem value="Convention Center">Convention Center</MenuItem>
        </Select>
        <SearchInput
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <Grid container spacing={4}>
        {filteredEvents.map(event => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card className="event-card" onClick={() => setSelectedEvent(event)} style={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                alt={event.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.date} - {event.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default EventList;
