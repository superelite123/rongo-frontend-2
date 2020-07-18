import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as LoginAPI from 'lib/api/login';

const CHANGE_INPUT = 'login/CHANGE_INPUT'; 

const SET_ERROR = 'auth/SET_ERROR';
const INITIALIZE_FORM = 'login/INITIALIZE_FORM'; 
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN';
const LOGOUT = 'auth/LOGOUT';

export const changeInput = createAction(CHANGE_INPUT); //  { form, name, value }
export const initializeForm = createAction(INITIALIZE_FORM); // form 
export const localLogin = createAction(LOCAL_LOGIN, LoginAPI.localLogin); // { email, password }
export const setError = createAction(SET_ERROR);
//export const checkUsernameExists = createAction(CHECK_USERNAME_EXISTS, LoginAPI.checkUsernameExists); // username

const initialState = Map({
    email: '',
    password: '',
    error: null,
    login1:null,
    result:null
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.set(name, value);
    },
    [INITIALIZE_FORM]: (state, action) => {
        return state.set(initialState);
    },
    [SET_ERROR]: (state,action) => {
        const { message } = action.payload
        return state.set('error',message)
    },
    ...pender({
        type: LOCAL_LOGIN,
        onSuccess: (state, action) => state.set('login1', action.payload.data.success)
    }),
}, initialState);