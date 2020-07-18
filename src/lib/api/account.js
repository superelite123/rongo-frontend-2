import axios from 'lib/clientWithAuth'


export const changeEmailAddress = ({email}) => axios.post('/api/me/changeEmail', { email });