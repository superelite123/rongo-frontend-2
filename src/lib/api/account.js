import axios from 'lib/clientWithAuth'


export const changeEmailAddress = ({email,token}) => axios(token).post('/api/me/changeEmail', { email });
export const changePassword = ({password,token}) => axios(token).post('/api/me/changePassword', { password })