import axios from 'lib/clientWithAuth'
export const getFollows = () => axios.get('/api/store/follows/1');
export const localLoginConfirm = ({pwd,id}) => axios.post('/api/auth/login/seller/2fa', { pwd, id });