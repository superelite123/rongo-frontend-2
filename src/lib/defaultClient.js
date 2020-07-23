// @flow
import axios from 'axios';
import storage from './storageAsync'
const baseURL = 'http://192.168.0.100:8000'//'http://192.168.0.101:8888'
const token = storage.get('token');
const defaultClient = axios.create({
    baseURL: baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
});

export default defaultClient;
