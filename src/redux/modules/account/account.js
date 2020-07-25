import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';

import * as AccountAPI from 'lib/api/account';

const CHANGE_EMAIL_ADDRESS = 'account/CHANGE_EMAIL_ADDRESS';
const SHOW_LIVESTREAM_DETAIL = 'live/SHOW_LIVESTREAM_DETAIL';
const CHANGE_PASSWORD = 'account/CHANGE_PASSWORD'
export const changeEmailAddress = createAction(CHANGE_EMAIL_ADDRESS, AccountAPI.changeEmailAddress);
export const changePassword = createAction(CHANGE_PASSWORD,AccountAPI.changePassword)
const initialState = Map({
    liveStreamList: null,
    showLiveStream: null,
});


export default handleActions({
    [SHOW_LIVESTREAM_DETAIL]: (state, action) => {
        const liveStream = action.payload
        state = state.set('showLiveStream', liveStream)
        
        return state
    },
    ...pender({
        type: CHANGE_EMAIL_ADDRESS,
        onSuccess: (state, action) => {
            const listStreamList = action.payload.data;
            console.log(listStreamList)
            return state.set('liveStreamList', listStreamList)            
        }
    })
}, initialState)