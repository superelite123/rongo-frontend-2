import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import {isMobile} from "react-device-detect";
import {
    SHOW_HOMEPANEL,
    SHOW_PPROUCTSPANEL,
    SHOW_PADDLINK,
    SHOW_TRANSACTIONSPANEL,
    SHOW_PFORM,
    SHOW_PDETAIL,
    SHOW_TRANSACTIONDETAIL
} from 'lib/constant'
const CHANGE_FIRST_STATUS = 'homePage/CHANGE_FIRST_STATUS';
const CHANGE_SECOND_STATUS = 'homePage/CHANGE_SECOND_STATUS';
const CHANGE_THIRD_STATUS = 'homePage/CHANGE_FIRST_STATUS';

export const changeFirstStatus = createAction(CHANGE_FIRST_STATUS); //  { form, name, value }
export const changeSecondStatus = createAction(CHANGE_SECOND_STATUS); // form 
export const changeThirdStatus = createAction(CHANGE_THIRD_STATUS);

const initialState = Map({
    firstPanel:isMobile?11:SHOW_HOMEPANEL,
    seconPanel:isMobile?0:SHOW_PPROUCTSPANEL,
    thirdPanel:isMobile?0:SHOW_PFORM
})

export default handleActions({
    [CHANGE_FIRST_STATUS]: (state, action) => {
        const status = action.payload
        state = state.set('firstPanel',status)
        if(isMobile && status !== 0)
        {
            state = state.set('seconPanel',0)
            state = state.set('thirdPanel',0)
        }
        return state
    },
    [CHANGE_SECOND_STATUS]: (state, action) => {
        const status = action.payload
        state = state.set('seconPanel',status)
        if(isMobile && status !== 0)
        {
            state = state.set('firstPanel',0)
            state = state.set('thirdPanel',0)
        }
        return state
    },
    [CHANGE_THIRD_STATUS]: (state,action) => {
        const status = action.payload
        state = state.set('thirdPanel',status)
        if(isMobile && status !== 0)
        {
            state = state.set('firstPanel',0)
            state = state.set('seconPanel',0)
        }
        return state
    },
}, initialState);