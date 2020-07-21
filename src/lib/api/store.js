import axios from 'lib/clientWithAuth'
export const getStore =  ({type, token}) => axios(token).get('/api/store/products/' + type);
export const getMyStore =  (token) => axios(token).get('/api/me/getStore/');
export const setMyStore =  (store, token) => axios(token).post('/api/me/saveStore/',store);