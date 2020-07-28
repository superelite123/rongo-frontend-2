import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid } from "@material-ui/core";
import * as notifyActions from 'redux/modules/notifyPage'
import HomePanelContainer from 'containers/HomePanelContainer'
import NotificationListPanelContainer from 'containers/notification/NotificationListPanelContainer'
import {
    SHOW_HOMEPANEL,
    FIRST_PANEL_NOTI,
    SHOW_NOTIFICATION_DETAIL,
} from 'lib/constant'
import {isMobile} from "react-device-detect";

class Notify extends Component {
    
    render() {
        const {  panelsInfo, } = this.props
        let panels = [null,null,null]
        panelsInfo.map((panelNumber,index) => {
            switch (panelNumber) {
                case SHOW_HOMEPANEL:
                    panels[index] = <HomePanelContainer/>
                break;
                case FIRST_PANEL_NOTI:
                    panels[index] = <NotificationListPanelContainer mode='1' />
                break;
                case 0:
                    panels[index] = null;
                break;
                default:
                    panels[index] = <HomePanelContainer />
                break;
            }
        })
        return (
            <Grid container>
                {
                    panels.map((panel,index) => (<Grid item xs={isMobile?12:4} key={index}>{panel}</Grid>))
                }
            </Grid>
        )
    }
}
export default connect(
    (state) => ({
        panelsInfo:state.notifyPage.get('panels')
    }),
    (dispatch) => ({
        NotifyActions: bindActionCreators(notifyActions, dispatch),
    })
)(Notify);
