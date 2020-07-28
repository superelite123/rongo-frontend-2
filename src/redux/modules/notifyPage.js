import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import {isMobile} from "react-device-detect";
import {
    SHOW_LIVEFORM,
    SHOW_LIVEPLAYER,
    SHOW_LIVESTANDBYPANEL,
    SHOW_LIVEPRODUCTLIST,
    SHOW_LIVECHATPANEL
} from 'lib/constant'
const CHANGE_PANEL = 'livePage/CHANGE_PANEL';
const initialState = Map({
    panels:List([
        SHOW_LIVEFORM,
        SHOW_LIVEPLAYER,
        SHOW_LIVECHATPANEL,
    ]),
})
export default handleActions({
    [CHANGE_PANEL]: (state, action) => {
        state = state.set('panels', 
            state.get('panels').update(
                action.payload.panelIndex, item=>item=action.payload.panelNumber)
        )
        return state;
    },
})