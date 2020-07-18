import axios from 'lib/clientWithAuth'

export const getStreamList =  () => axios.get('/api/store/liveStream/1');