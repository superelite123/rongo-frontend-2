import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import * as FollowAPI from 'lib/api/follow';
import { pender } from 'redux-pender';

const GET_FOLLOWS = 'follow/GET_FOLLOWS';
const SHOW_FOLLOWER_DETAIL = 'follow/SHOW_FOLLOWER_DETAIL'

export const getFollows = createAction(GET_FOLLOWS, FollowAPI.getFollows)
export const showFollowerDetail = createAction(SHOW_FOLLOWER_DETAIL)

const initialState = Map({
    followList: null,
    showFollow: null,
})

export default handleActions({
    [SHOW_FOLLOWER_DETAIL]: (state, action) => {
        const follow = action.payload
        state = state.set('showFollow',follow)
        
        return state
    },
    ...pender({
        type: GET_FOLLOWS,
        onSuccess: (state, action) => {
            const data = action.payload.data;
            return state.set('followList', data)            
        }
    })
}, initialState)