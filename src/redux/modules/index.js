import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import base from './base';
import login from './login';
import user from './user';
import homePage from './homePage';
import follow from './follow/follow';
import productList from './product/productList';
import transaction from './transaction/transaction';
import sellHistory from './sellHistory/sellHistory'

export default combineReducers({
    base,
    login,
    user,
    follow,
    homePage,
    sellHistory,
    productList,
    transaction,
    pender: penderReducer
});