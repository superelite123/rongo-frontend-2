import axios from 'lib/clientWithAuth'

export const getNews =  (token) => axios(token).get('/api/news');