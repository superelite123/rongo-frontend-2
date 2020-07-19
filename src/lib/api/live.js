import axios from 'lib/clientWithAuth'

export const getProducts =  () => axios.get('/api/live/initial_products');