import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.0.116:8000';
export const localLogin = ({email, password}) => axios.post('/api/auth/login/seller', { email, password });
export const localLoginConfirm = ({password,userID}) => axios.post('/api/auth/login/confirm', { password, userID });

export const checkStatus = () => axios.get('/api/login/check');
export const logout = () => axios.post('/api/login/logout');