import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';

import * as LiveStreamAPI from 'lib/api/liveStream';

const GET_LIVESTREAMS = 'live/GET_LIVESTREAMS';
const SHOW_LIVESTREAM_DETAIL = 'live/SHOW_LIVESTREAM_DETAIL';

export const getLiveStreams = createAction(GET_LIVESTREAMS, LiveStreamAPI.getStreamList);
export const showTransactionDetail = createAction(SHOW_LIVESTREAM_DETAIL)

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
        type: GET_LIVESTREAMS,
        onSuccess: (state, action) => {
            const listStreamList = action.payload.data;
            console.log(listStreamList)
            return state.set('liveStreamList', listStreamList)            
        }
    })
}, initialState)