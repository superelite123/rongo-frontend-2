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
const SET_CHAT_INFO = 'livePage/SET_CHAT_INFO'
const SET_STAMP = 'livePage/SET_STAMP'
const SAVE_LIVE = 'livePage/SAVE_LIVE'
const ADD_STAMP = 'livePage/ADD_STAMP'
const INVISIBLE_STAMP = 'livePage/INVISIBLE_STAMP'
const ADD_MESSAGE = 'livePage/ADD_MESSAGE'
const SET_CHANNEL = 'livePage/SET_CHANNEL'
const SET_STARTTIME = 'livePage/SET_STARTTIME'

export const changePanelStatus = createAction(CHANGE_PANEL);
export const addProduct = createAction(ADD_PRODUCT);
export const updateForm = createAction(UPDATE_FORM);
export const updateStatus = createAction(UPDATE_STATUS);
export const updateLiveID = createAction(SET_LIVE_ID);
export const setChatInfo = createAction(SET_CHAT_INFO);
export const saveLive = createAction(SAVE_LIVE)
export const addStamp = createAction(ADD_STAMP)
export const invisibleStamp = createAction(INVISIBLE_STAMP)
export const addMessage = createAction(ADD_MESSAGE)
export const setChannel = createAction(SET_CHANNEL)
export const setStartTime = createAction(SET_STARTTIME)
const initialState = Map({
    panels:List([
        SHOW_LIVEFORM,
        SHOW_LIVEPLAYER,
        SHOW_LIVESTANDBYPANEL,
    ]),
    products:List([]),
    messages:List([]),
    stamps:[
        {
            number:1,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:2,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:3,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:4,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:5,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:6,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:7,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:8,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:9,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:10,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:11,
            gridPosition:0,
            qty:0,
            visible:false,
        },
        {
            number:12,
            gridPosition:0,
            qty:0,
            visible:false,
        }
    ],
    title:'',
    tag:'',
    thumbnail:null,
    status:0,
    id:null,
    channelID:null,
    chatAdminID:null,
    chatUserID:null,
    client:null,
    channel:null,
    startTime:null,
    endTime:null
})
export default handleActions({
    [CHANGE_PANEL]: (state, action) => {
        state = state.set('panels', 
            state.get('panels').update(
                action.payload.panelIndex, item=>item=action.payload.panelNumber)
        )
        return state;
    },
    [SET_CHANNEL]: (state,action) => state.set('channel',action.payload.channel),
    [SET_STARTTIME]: (state,action) => state.set('startTime',action.payload.startTime),
    [SET_CHAT_INFO]: (state, action) => {
        state = state.set('channelID',action.payload.channelID)
        state = state.set('chatAdminID',action.payload.chatAdminID)
        state = state.set('chatUserID',action.payload.chatUserID)
        return state
    },
    [ADD_STAMP]: (state, action) => state.set('stamps',state.get('stamps').map(
            (stamp,index) => 
            index === action.payload.index?{
                ...stamp,
                ...action.payload.stamp,
                qty:stamp.qty + 1,
                visible:true}:stamp)
    ),
    [ADD_MESSAGE]: (state,action) => state.set('messages',state.get('messages').push(action.payload)),
    [INVISIBLE_STAMP]: (state, action) => state.set('stamps',state.get('stamps').map(
        (stamp,index) => index === action.payload.index?{...stamp,visible:false}:stamp)
    ),
    [SET_STAMP]: (state, action) => state.set('stamps',state.stamps.conact(action.payload)),
    [ADD_PRODUCT]: (state, action) => (
        state.set('products',state.get('products').push(Map(action.payload)))
    ),
    [UPDATE_FORM]: (state, action) => {
        state = state.set([action.payload.name],action.payload.value)
        return state
    },
    [UPDATE_STATUS]: (state, action) => state.set('status',action.payload),
    [SET_LIVE_ID]: (state, action) => state.set('id',action.payload),
    ...pender({
        type: SAVE_LIVE,
        onSuccess: (state, action) => {
            const data = action.data
            console.log(data)
        }
    }),
}, initialState);