import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import base from './base';
import login from './login';
import user from './user';
import homePage from './homePage';
import livePage from './livePage';
import follow from './follow/follow';
import productList from './product/productList';
import transaction from './transaction/transaction';
import sellHistory from './sellHistory/sellHistory'
import liveStream from './live/liveStream'
import account from './account/account'
import notification from './notification/notification'


export default combineReducers({
    base,
    login,
    user,
    follow,
    homePage,
    livePage,
    account,
    liveStream,
    sellHistory,
    productList,
    transaction,
    notification,
    pender: penderReducer
});