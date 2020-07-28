import axios from 'lib/clientWithAuth'

export const getProducts =  (token) => axios(token).get('/api/live/initial_products');
export const quitLive =  ({id, token}) => axios(token).post('/api/live/quit',{id});
export const saveLive =  ({title,tag,thumbnail,products, token}) => axios(token).post('/api/live/create',{title,tag,thumbnail,products});
//export const saveLive =  ({id,token}) => axios(token).post('/api/live/create',{id});
export const addProduct = ({live_id,product_id,qty,token}) => axios(token).post('/api/live/add_product',{live_id,product_id,qty})