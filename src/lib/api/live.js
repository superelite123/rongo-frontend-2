import axios from 'lib/defaultClient'

export const getProducts =  (token) => axios.get('/api/live/initial_products');
export const quitLive =  ({id, token}) => axios.post('/api/live/quit',{id});
//export const saveLive =  ({title,tag,thumbnail,products, token}) => axios(token).post('/api/live/create',{title,tag,thumbnail,products});
export const saveLive =  ({id}) => axios.post('/api/live/create',{id});