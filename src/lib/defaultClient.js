// @flow
import axios from 'axios';
import storage from './storageAsync'
import { BASE_URL } from './constant'
const token = storage.get('token');
const defaultClient = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
});

export default defaultClient;
