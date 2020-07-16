import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as SellHistoryAPI from 'lib/api/sellHistory';

const GET_SELLHISTORY = 'sell/GET_SELLHISTORY';
const EXPAND_MONTH = 'sell/EXPAND_MONTH';
const SHOW_HISTORY_DETAIL = 'sell/SHOW_HISTORY_DETAIL'

export const getSellHistory = createAction(GET_SELLHISTORY, SellHistoryAPI.getSellHistory);
export const expandDateHistory = createAction(EXPAND_MONTH);

const initialState = Map({
    sellHistoryList: null,
    showSellHistory: null,
    isExpand: false
})

export default handleActions({
    [SHOW_HISTORY_DETAIL]: (state, action) => {
        const sellHistory = action.payload
        state = state.set('showSellHistory',sellHistory)
        
        return state
    },
    [EXPAND_MONTH]: (state, action) => {
        const isExpand = action.payload
        state = state.set('isExpand',isExpand)
        
        return state
    },
    ...pender({
        type: GET_SELLHISTORY,
        onSuccess: (state, action) => {
            const sellHistoryHistory = action.payload.data;
            console.log(sellHistoryHistory)
            return state.set('sellHistoryList', sellHistoryHistory)            
        }
    })
}, initialState)