import axios from 'lib/clientWithAuth'

export const getNews =  () => axios.get('/api/news');