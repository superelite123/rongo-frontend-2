import axios from 'lib/clientWithAuth'

export const getProducts =  ({type}) => axios.get('/api/store/products/' + type);