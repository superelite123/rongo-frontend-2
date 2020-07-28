import axios from 'lib/clientWithAuth'

export const getSellHistory =  ({token}) => axios(token).get('/api/sell_history/');
export const getDetail =  ({date,token}) => axios(token).post('/api/sell_history/getDetail',{date});