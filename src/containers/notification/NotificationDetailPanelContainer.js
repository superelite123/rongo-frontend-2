import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as notiActions from 'redux/modules/notification/notification';
import * as notifyActions from 'redux/modules/notifyPage';
import NotificationDetailPanel from 'components/notification/NotificationDetailPanel'
import {SHOW_HOMEPANEL,SHOW_NOTIFICATION_DETAIL} from 'lib/constant' 

class NotificationDetailPanelContainer extends Component
{
    
    handleGoBack = () => {
        const {NotifyActions} = this.props
        NotifyActions.changePanel({panelNumber:SHOW_HOMEPANEL,panelIndex:1})
    }
    render()
    {
        const { showNotification } = this.props

        return (
            <NotificationDetailPanel 
            notification= { showNotification } 
            handleLeftButton={this.handleGoBack}
            />
        )
    }
}

export default connect(
    (state) => ({
        showNotification: state.notification.get('showNotification'),
    }),
    (dispatch) => ({
        NotiActions: bindActionCreators(notiActions, dispatch),
        NotifyActions: bindActionCreators(notifyActions, dispatch),
    })
)((NotificationDetailPanelContainer));