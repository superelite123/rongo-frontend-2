import axios from 'lib/defaultClient'

export const getSellHistory =  () => axios.get('/api/sell_history/');
export const getDetail =  ({date}) => axios.post('/api/sell_history/getDetail',{date});