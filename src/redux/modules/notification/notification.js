import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import * as NotificationAPI from 'lib/api/notification';
import { pender } from 'redux-pender';

const GET_NOTIFICATIONS = 'notification/GET_NOTIFICATIONS';
const SHOW_NOTIFICATION = 'notification/SHOW_NOTIFICATION';

export const getNotifications = createAction(GET_NOTIFICATIONS, NotificationAPI.getNews)
export const showNotificationDetail = createAction(SHOW_NOTIFICATION)

const initialState = Map({
    notificationList: null,
    showNotification: null,
})

export default handleActions({
    [SHOW_NOTIFICATION]: (state, action) => {
        const notification = action.payload
        state = state.set('showNotification',notification)
        
        return state
    },
    ...pender({
        type: GET_NOTIFICATIONS,
        onSuccess: (state, action) => {
            const data  = action.payload.data;
            console.log(data)
            return state.set('notificationList', data)            
        }
    })
}, initialState)