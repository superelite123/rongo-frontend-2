import axios from 'lib/clientWithAuth'

export const getSellHistory =  (token) => axios(token).get('/api/payment/sellHistory');