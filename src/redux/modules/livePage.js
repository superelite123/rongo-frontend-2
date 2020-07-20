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
const ADD_PRODUCT = 'livePage/ADD_PRODUCT';
const UPDATE_FORM = 'livePage/UPDATE_FORM';
const UPDATE_STATUS = 'livePage/UPDATE_STATUS'
const QUIT = 'livePage/QUIT'
const SET_LIVE_ID = 'livePage/SET_LIVE_ID'
export const changePanelStatus = createAction(CHANGE_PANEL);
export const addProduct = createAction(ADD_PRODUCT);
export const updateForm = createAction(UPDATE_FORM);
export const updateStatus = createAction(UPDATE_STATUS);
export const updateLiveID = createAction(SET_LIVE_ID);
const initialState = Map({
    panels:List([
        SHOW_LIVEFORM,
        SHOW_LIVEPLAYER,
        SHOW_LIVECHATPANEL
    ]),
    products:List([]),
    isLive:false,
    title:'',
    tag:'',
    thumbnail:null,
    status:0,
    id:61
})
export default handleActions({
    [CHANGE_PANEL]: (state, action) => {
        console.log('hi')
        state = state.set('panels', 
            state.get('panels').update(
                action.payload.panelIndex, item=>item=action.payload.panelNumber)
        )
        return state;
            },
    [ADD_PRODUCT]: (state, action) => (
        state.set('products',state.get('products').push(Map(action.payload)))
    ),
    [UPDATE_FORM]: (state, action) => {
        state = state.set([action.payload.name],action.payload.value)
        return state
    },
    [UPDATE_STATUS]: (state, action) => state.set('status',action.payload),
    [SET_LIVE_ID]: (state, action) => state.set('id',action.payload),
}, initialState);