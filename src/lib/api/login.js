//import axios from 'axios';
//axios.defaults.baseURL = 'http://192.168.0.116:8000';
import axios from 'lib/defaultClient'
export const localLogin = ({email, password}) => axios.post('/api/auth/login/seller', { email, password });
export const localLoginConfirm = ({pwd,id}) => axios.post('/api/auth/login/seller/2fa', { pwd, id });

export const checkStatus = () => axios.get('/api/login/check');
export const logout = () => axios.post('/api/login/logout');