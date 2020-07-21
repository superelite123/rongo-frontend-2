import axios from 'axios';
import storage from './storage'

import { BASE_URL } from './constant'

const token = storage.get('token');
//const token = localStorage['token']
const clientWithAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
});

export default clientWithAuth;