import axios from 'lib/clientWithAuth'
export const getStore =  ({type}) => axios.get('/api/store/products/' + type);
export const getMyStore =  () => axios.get('/api/me/getStore/');
export const setMyStore =  (store) => axios.post('/api/me/saveStore/',store);