import axios from 'lib/clientWithAuth'

export const getProducts =  ({type,token}) => axios(token).get('/api/product/getAdminList/' + type);
export const getProductDetail = ({id,token}) => axios(token).get('/api/product/' + id);
export const editProduct = ({id,token}) => axios(token).get('/api/product/edit/' + id);
export const saveProduct = ({formData,token}) => axios(token).post('/api/product/store',{formData})
export const deleteProducts = ({IDs,token}) => axios(token).post('/api/product/delete',{IDs})
export const stageProduct = ({id,token}) => axios(token).post('/api/product/stage',{id})