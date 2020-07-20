import axios from 'axios';
import storage from './storage'
const baseURL = 'https://app.live.rongoinc.com'//'http://192.168.0.101:8888'
const token = storage.get('token');
const clientWithAuth = axios.create({
    baseURL: baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
});

export default clientWithAuth;