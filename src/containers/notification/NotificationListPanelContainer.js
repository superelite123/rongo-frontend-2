import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as notiActions from 'redux/modules/notification/notification';
import NotificationListPanel from 'components/notification/NotificationListPanel'
import * as homeActions from 'redux/modules/homePage';
import {SHOW_NOTIFICATION_DETAIL} from 'lib/constant' 
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
    
    render()
    {
        const { NotiActions, HomeActions, notificationList } = this.props;

        console.log(notificationList)

        const handleClick = (notification) => {
            console.log(notification)
            NotiActions.showNotificationDetail(notification)
            HomeActions.changeSecondStatus(SHOW_NOTIFICATION_DETAIL)
        }

        return (
            <NotificationListPanel notificationList= { notificationList } handleClick={ handleClick } />
        )
    }
}

export default connect(
    (state) => ({
        notificationList: state.notification.get('notificationList'),
    }),
    (dispatch) => ({
        NotiActions: bindActionCreators(notiActions, dispatch),
        HomeActions: bindActionCreators(homeActions, dispatch),
    })
)((NotificationListPanelContainer));