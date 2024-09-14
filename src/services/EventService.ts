import axios from 'axios';

const API_URL = 'https://damp-escarpment-75226-e51e64ebca86.herokuapp.com/events'; // Update with your Rails API URL

export const getEvents = () => {
  return axios.get(API_URL);
};

export const getEventById = (id: number) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createEvent = async (event: { title: string; description: string; location: string; date: string }) => {
  try {
    const response = await axios.post(API_URL, event);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const updateEvent = (id: number, event: { title: string; description: string; location: string; date: string }) => {
  return axios.put(`${API_URL}/${id}`, event);
};

export const deleteEvent = (id: number) => {
  return axios.delete(`${API_URL}/${id}`);
};
