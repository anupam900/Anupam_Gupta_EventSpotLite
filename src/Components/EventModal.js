import React from 'react';
import styled from 'styled-components';
import { Modal, Box, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  position: 'absolute';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  width: 400px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 24;
  p: 4;
`;

const EventModal = ({ event, onClose }) => {
  return (
    <Modal
      open={!!event}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CustomBox>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {event.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {event.date} - {event.location}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {event.description}
        </Typography>
        <img src={event.image} alt={event.name} style={{ width: '100%', marginTop: '10px' }} />
      </CustomBox>
    </Modal>
  );
};

export default EventModal;
