import axios from 'lib/clientWithAuth'

export const getTransactions =  () => axios.get('/api/payment/transactions');