import axios from 'lib/defaultClient'

export const getProducts =  ({email, password}) => axios.post('/api/auth/login/seller', { email, password });