import axios from 'lib/clientWithAuth'

export const getProducts =  (token) => axios(token).get('/api/live/initial_products');
export const quitLive =  ({id, token}) => axios(token).post('/api/live/quit',{id});
export const saveLive =  ({title,tag,thumbnail,products, token}) => axios(token).post('/api/live/create',{title,tag,thumbnail,products});