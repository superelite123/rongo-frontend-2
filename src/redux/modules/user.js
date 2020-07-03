import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import * as LoginAPI from 'lib/api/login';
import { pender } from 'redux-pender';

const SET_FIRST_LOGGEDIN = 'user/SET_FIRST_LOGGEDIN'; // 로그인 정보 설정
const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO'; // 로그인 정보 설정
const SET_VALIDATED = 'user/SET_VALIDATED'; // validated 값 설정
const LOGOUT = 'user/LOGOUT'; // 로그아웃
const CHECK_STATUS = 'user/CHECK_STATUS'; // 현재 로그인상태 확인
const SET_EMAIL = 'user/SET_EMAIL'; // 로그인 정보 설정

export const setEmail = createAction(SET_EMAIL); // loggedInfo
export const setFirstLoggedin = createAction(SET_FIRST_LOGGEDIN); // loggedInfo
export const setLoggedInfo = createAction(SET_LOGGED_INFO); // loggedInfo
export const setValidated = createAction(SET_VALIDATED); // validated
export const logout = createAction(LOGOUT, LoginAPI.logout);
export const checkStatus = createAction(CHECK_STATUS, LoginAPI.checkStatus);

const initialState = Map({
    loggedInfo: Map({ // 현재 로그인중인 유저의 정보
        thumbnail: null,
        username: null,
        email:null,
        id:null,
    }),
    firstloggedin:-1, //passes login step 1?
    logged: false, // 현재 로그인중인지 알려준다
    validated: false // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미
});

export default handleActions({
    [SET_EMAIL]:(state,action) => state.setIn(['loggedInfo','email'],action.payload),
    [SET_FIRST_LOGGEDIN]:(state,action) => state.set('firstloggedin',action.payload),
    [SET_LOGGED_INFO]: (state, action) => state.set('loggedInfo', Map(action.payload)),
    [SET_VALIDATED]: (state, action) => state.set('validated', action.payload),
    ...pender({
        type: CHECK_STATUS,
        onSuccess: (state, action) => state.set('loggedInfo', Map(action.payload.data)).set('validated', true), 
        onFailure: (state, action) => initialState
    })
}, initialState);