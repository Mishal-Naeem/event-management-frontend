import React from 'react';
import EventForm from './EventForm';
import { useNavigate } from 'react-router-dom';

const CreateEvent: React.FC = () => {
  const history = useNavigate();

  const handleSuccess = () => {
    history('/events'); // Navigate to /events
  };

  return (
    <div>
      <h2>Create New Event</h2>
      <EventForm onSuccess={handleSuccess} />
    </div>
  );
};

export default CreateEvent;
