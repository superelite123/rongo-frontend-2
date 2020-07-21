import axios from 'lib/clientWithAuth'

export const getStreamList =  (token) => axios(token).get('/api/store/liveStream/1');