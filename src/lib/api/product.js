import axios from 'lib/defaultClient'

export const getProducts =  ({type,}) => axios.get('/api/product/getAdminList/' + type);
export const getProductDetail = ({id}) => axios.get('/api/product/' + id);
export const editProduct = ({id}) => axios.get('/api/product/edit/' + id);
export const saveProduct = ({formData}) => axios.post('/api/product/store',{formData})
export const deleteProducts = ({IDs}) => axios.post('/api/product/delete',{IDs})
export const stageProduct = ({id}) => axios.post('/api/product/stage',{id})