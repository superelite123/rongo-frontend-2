import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
import {isMobile} from "react-device-detect";
import {
    SHOW_LIVEFORM,
    SHOW_LIVEPLAYER,
    SHOW_LIVESTANDBYPANEL,
    SHOW_LIVEPRODUCTLIST
} from 'lib/constant'
const CHANGE_PANEL = 'livePage/CHANGE_PANEL';
const ADD_PRODUCT = 'livePage/ADD_PRODUCT';
export const changePanelStatus = createAction(CHANGE_PANEL);
export const addProduct = createAction(ADD_PRODUCT);
const initialState = Map({
    panels:List([
        SHOW_LIVEFORM,
        SHOW_LIVEPLAYER,
        SHOW_LIVEPRODUCTLIST
    ]),
    products:List([]),
    isLive:false
})
export default handleActions({
    [CHANGE_PANEL]: (state, action) => (
        state.set('panels', 
            state.get('panels').update(
                action.payload.panelIndex, item=>action.payload.panelNumber)
        )
    ),
    [ADD_PRODUCT]: (state, action) => (
        state.set('products',state.get('products').push(Map(action.payload)))
    ),
}, initialState);