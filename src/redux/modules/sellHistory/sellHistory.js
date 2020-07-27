import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as SellHistoryAPI from 'lib/api/sellHistory';

const GET_SELLHISTORY = 'sell/GET_SELLHISTORY';
const EXPAND_MONTH = 'sell/EXPAND_MONTH';
const SHOW_HISTORY_DETAIL = 'sell/SHOW_HISTORY_DETAIL'
const GET_DETAIL = 'sell/GET_DETAIL'
const TOGGLE_EXPAND = 'sell/TOGGLE_EXPAND'
export const getSellHistory = createAction(GET_SELLHISTORY, SellHistoryAPI.getSellHistory);
export const showSellDateHitory = createAction(SHOW_HISTORY_DETAIL);
export const expandDateHistory = createAction(EXPAND_MONTH);
export const getDetail = createAction(GET_DETAIL,SellHistoryAPI.getDetail)
export const toggleExpand = createAction(TOGGLE_EXPAND);
const initialState = Map({
    sellHistoryList: null,
    showSellHistory: null,
    isExpand: false,
    detail:null
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
    [TOGGLE_EXPAND]: (state, action) => {
        const index = action.payload
        let detail = state.get('detail')
        detail.lives.forEach((live, i) => {
            if(i === index)
            {
                live.expand = !live.expand
            }
        });
        state.set('detail',detail)
        return state
    },
    ...pender({
        type: GET_SELLHISTORY,
        onSuccess: (state, action) => {
            const sellHistoryHistory = action.payload.data;
            return state.set('sellHistoryList', sellHistoryHistory)            
        }
    }),
    ...pender({
        type: GET_DETAIL,
        onSuccess: (state, action) => {
            const data = action.payload.data;
            return state.set('detail', data)            
        }
    })
}, initialState)