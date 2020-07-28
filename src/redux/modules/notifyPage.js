import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import {isMobile} from "react-device-detect";
import {
    SHOW_HOMEPANEL,
    FIRST_PANEL_NOTI,
    SHOW_NOTIFICATION_DETAIL
} from 'lib/constant'
const CHANGE_PANEL = 'notifyPage/CHANGE_PANEL';
export const changePanel = createAction(CHANGE_PANEL);

const initialState = Map({
    panels:[
        isMobile?FIRST_PANEL_NOTI:SHOW_HOMEPANEL,
        isMobile?0:FIRST_PANEL_NOTI,
        isMobile?0:SHOW_NOTIFICATION_DETAIL
    ],
})
export default handleActions({
    [CHANGE_PANEL]: (state, action) => {
        const {panelNumber,panelIndex} = action.payload
        if(isMobile)
        {
            state = state.set('panels', 
                state.get('panels').map((panel,index)=> panel=panelIndex === index?panelNumber:0)
            )
        }
        else
        {
            state = state.set('panels', 
                state.get('panels').map((panel,index)=> panel=panelIndex === index?panelNumber:panel)
            )
        }
        
        return state;
    },
}, initialState)