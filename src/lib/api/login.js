import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/api/login/exists/email/' + email);