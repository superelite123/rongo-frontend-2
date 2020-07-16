import axios from 'lib/clientWithAuth'

export const getSellHistory =  () => axios.get('/api/payment/sellHistory');