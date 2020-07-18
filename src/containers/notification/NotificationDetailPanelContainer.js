import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as notiActions from 'redux/modules/notification/notification';
import NotificationDetailPanel from 'components/notification/NotificationDetailPanel'

class NotificationDetailPanelContainer extends Component
{
    render()
    {
        const { showNotification } = this.props

        return (
            <NotificationDetailPanel notification= { showNotification } />
        )
    }
}

export default connect(
    (state) => ({
        showNotification: state.notification.get('showNotification'),
    }),
    (dispatch) => ({
        NotiActions: bindActionCreators(notiActions, dispatch),
    })
)((NotificationDetailPanelContainer));