import { combineReducers } from 'redux';
import base from './base';
import login from './login';
export default combineReducers({
    base,
    login
});