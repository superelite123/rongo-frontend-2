import axios from 'lib/clientWithAuth'

export const getProducts =  ({type, token}) => axios(token).get('/api/store/products/' + type);
export const getProductDetail = ({id, token}) => axios(token).get('/api/product/' + id);
