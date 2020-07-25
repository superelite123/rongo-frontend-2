import axios from 'lib/defaultClient'


export const changeEmailAddress = ({email}) => axios.post('/api/me/changeEmail', { email });
export const changePassword = ({password}) => axios.post('/api/me/changePassword', { password })