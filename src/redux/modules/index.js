import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import base from './base';
import login from './login';
import user from './user';
import homePage from './homePage';
import transactionList from './trasaction/transactionList';

export default combineReducers({
    base,
    login,
    user,
    homePage,
    transactionList,
    pender: penderReducer
});