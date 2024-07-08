import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Use environment variable
});

export const fetchData = async () => {
  try {
    const response = await api.get('/articles'); // Replace '/articles' with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
