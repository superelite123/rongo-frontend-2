import axios from 'lib/clientWithAuth'

export const getTransactions =  ({token}) => axios(token).get('/api/payment/transactions');