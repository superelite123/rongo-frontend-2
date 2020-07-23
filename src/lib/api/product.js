import axios from 'lib/defaultClient'

export const getProducts =  ({type,}) => axios.get('/api/store/products/' + type);
export const getProductDetail = ({id}) => axios.get('/api/product/' + id);
export const saveProduct = ({formData}) => axios.post('/api/product/store',{formData})