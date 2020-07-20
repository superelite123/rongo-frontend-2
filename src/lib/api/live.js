import axios from 'lib/clientWithAuth'

export const getProducts =  () => axios.get('/api/live/initial_products');
export const quitLive =  ({id}) => axios.post('/api/live/quit',{id});
export const saveLive =  ({title,tag,thumbnail,products}) => axios.post('/api/live/create',{title,tag,thumbnail,products});