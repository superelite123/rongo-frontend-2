import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import base from './base';
import login from './login';
import user from './user';

export default combineReducers({
    base,
    login,
    user,
    pender: penderReducer
});