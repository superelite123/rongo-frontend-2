// @flow
import axios from 'axios';
import storage from './storage'
const baseURL = 'http://192.168.0.116:8000'
const token = storage.get('token');
const defaultClient = axios.create({
    baseURL: baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      Authentication: `Bearer ${token}`,
    },
});

export default defaultClient;
