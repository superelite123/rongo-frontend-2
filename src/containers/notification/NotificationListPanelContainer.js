import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as notiActions from 'redux/modules/notification/notification';
import * as notifyActions from 'redux/modules/notifyPage';
import NotificationListPanel from 'components/notification/NotificationListPanel'
import {SHOW_HOMEPANEL,SHOW_NOTIFICATION_DETAIL} from 'lib/constant' 
import storage from 'lib/storage'

class NotificationListPanelContainer extends Component
{
    getNotifications = async () => {
        const { NotiActions,  notificationList} = this.props;

        try {
            const token = storage.get('token');
            await NotiActions.getNotifications();
            console.log(notificationList)
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getNotifications()
    }
    
    handleGoBack = () => {
        const {NotifyActions} = this.props
        NotifyActions.changePanel({panelNumber:SHOW_HOMEPANEL,panelIndex:1})
    }
    render()
    {
        const { NotiActions, notificationList } = this.props;

        const handleClick = (notification) => {
            console.log(notification)
            NotiActions.showNotificationDetail(notification)
        }

        return (
            <NotificationListPanel 
                notificationList= { notificationList } 
                handleLeftButton={ handleClick } />
        )
    }
}

export default connect(
    (state) => ({
        notificationList: state.notification.get('notificationList'),
    }),
    (dispatch) => ({
        NotiActions: bindActionCreators(notiActions, dispatch),
        NotifyActions: bindActionCreators(notifyActions, dispatch),
    })
)((NotificationListPanelContainer));