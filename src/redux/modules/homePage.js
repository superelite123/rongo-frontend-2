import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import {isMobile} from "react-device-detect";
import {
    SHOW_HOMEPANEL,
    SHOW_PPROUCTSPANEL,
    SHOW_LIVELISTPANEL,
    SHOW_PADDLINK,
    SHOW_TRANSACTIONSPANEL,
    SHOW_PFORM,
    SHOW_PDETAIL,
    SHOW_TRANSACTIONDETAIL,
    SHOW_FOLLOWPANEL,
    FIRST_PANEL_HOME,
    SHOW_STOREMANAGEMENT,
    SHOW_SELLHISTORYLISTPANEL
} from 'lib/constant'
const CHANGE_FIRST_STATUS = 'homePage/CHANGE_FIRST_STATUS';
const CHANGE_SECOND_STATUS = 'homePage/CHANGE_SECOND_STATUS';
const CHANGE_THIRD_STATUS = 'homePage/CHANGE_THIRD_STATUS';

export const changeFirstStatus = createAction(CHANGE_FIRST_STATUS); //  { form, name, value }
export const changeSecondStatus = createAction(CHANGE_SECOND_STATUS); // form 
export const changeThirdStatus = createAction(CHANGE_THIRD_STATUS);

const initialState = Map({
    firstPanel:isMobile? 11:FIRST_PANEL_HOME,
    seconPanel:isMobile? 0:SHOW_STOREMANAGEMENT,
    thirdPanel:isMobile? 0:SHOW_PADDLINK
})

export default handleActions({
    [CHANGE_FIRST_STATUS]: (state, action) => {
        const status = action.payload
        state = state.set('firstPanel',status)
        state = state.set('seconPanel', 0)
        state = state.set('thirdPanel', 0)
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
        //state = state.set('thirdPanel', 0)
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