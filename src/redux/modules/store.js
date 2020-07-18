import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import * as StoreApi from 'lib/api/store';
import { pender } from 'redux-pender';

const GET_MY_STORE = 'store/GET_MY_STORE'; 
export const localLogin = createAction(GET_MY_STORE, StoreApi.localLogin);
const initialState = Map({
    email: '',
    password: '',
    error: null,
    login1:null,
    result:null
});