import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import * as LoginAPI from 'lib/api/login';
import { pender } from 'redux-pender';

const SET_FIRST_LOGGEDIN = 'user/SET_FIRST_LOGGEDIN'; 
const SET_USER_INFO = 'user/SET_LOGGED_INFO';
const SET_AVATAR = 'user/SET_AVATAR'
const LOGOUT = 'user/LOGOUT';
const SET_EMAIL = 'user/SET_EMAIL';
const LOCAL_LOGIN_CONFIRM = 'login/confirm'

export const setEmail = createAction(SET_EMAIL); // loggedInfo
export const setFirstLoggedin = createAction(SET_FIRST_LOGGEDIN); // loggedInfo
export const setUserInfo = createAction(SET_USER_INFO); // loggedInfo
export const localLoginConfirm = createAction(LOCAL_LOGIN_CONFIRM,LoginAPI.localLoginConfirm)
export const logout = createAction(LOGOUT, LoginAPI.logout)
export const setAvatar = createAction(SET_AVATAR)
const initialState = Map({
    userInfo: Map({
        thumbnail: null,
        nickname: null,
        email:null,
        numFollowers: 0,
        id:null,
        evaluation: Map({
            like: 0,
            notBad: 0,
            dislike: 0
        })
    }),
    token:null,
    firstloggedin:-1, //pass login step 1?
    result:-1,
    logged: false, //isLogged?
});

export default handleActions({
    [SET_EMAIL]:(state,action) => state.setIn(['userInfo','email'],action.payload),
    [SET_FIRST_LOGGEDIN]:(state,action) => state.set('firstloggedin',action.payload),
    [SET_USER_INFO]: (state, action) => state.set('userInfo', Map(action.payload)),
    [SET_AVATAR]: (state, action) => {
        return state.setIn(['userInfo', 'thumbnail',], action.payload);
    },
    ...pender({
        type: LOCAL_LOGIN_CONFIRM,
        onSuccess: (state, action) => 
        {
            //confirm successed
            const { result, userInfo,token} = action.payload.data
            state.set('result',result)
            if(result === 0)
            {
                state.set('userInfo',userInfo)
                state.set('token',token)
            }
            else
            {
                state.set('userInfo',null)
                state.set('token',null)
            }
            return Map(
                {
                    ...state,
                    result:result,
                    userInfo:userInfo,
                    token:token,
                    logged:true
                }

            )
        }
    }),
}, initialState);
