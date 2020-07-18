import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';

import * as AccountAPI from 'lib/api/account';

const CHANGE_EMAIL_ADDRESS = 'account/CHANGE_EMAIL_ADDRESS';
const SHOW_LIVESTREAM_DETAIL = 'live/SHOW_LIVESTREAM_DETAIL';

export const changeEmailAddress = createAction(CHANGE_EMAIL_ADDRESS, AccountAPI.changeEmailAddress);

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