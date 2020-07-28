import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Box,  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LiveFormContainer from 'containers/live/LiveFormContainer'
import LivePlayerContainer from 'containers/live/LivePlayerContainer'
import LiveStandByPanel from 'components/live/LiveStandByPanel'
import LiveProductsContainer from 'containers/live/LiveProductsContainer'
import LiveChatPanelContainer from 'containers/live/LiveChatPanelContainer'
import * as notifyActions from 'redux/modules/notifyPage'
import {
    SHOW_HOMEPANEL,
    SHOW_NOTIFICATION_DETAIL,
    
} from 'lib/constant'
class Notify extends Component {
    
    render() {
        const {  panelsInfo, } = this.props
        let panels = [null,null,null]
        panelsInfo.map((panelNumber,index) => {
            switch (panelNumber) {
                case SHOW_LIVEFORM:
                    panels[index] = <LiveFormContainer/>
                break;
                case SHOW_LIVEPLAYER:
                    panels[index] = <LivePlayerContainer />
                break;
                case SHOW_LIVESTANDBYPANEL:
                    panels[index] = <LiveStandByPanel />
                break;
                case SHOW_LIVEPRODUCTLIST:
                    panels[index] = <LiveProductsContainer />
                break;
                case SHOW_LIVECHATPANEL:
                    panels[index] = <LiveChatPanelContainer />
                break;
                default:
                    panels[index] = <LiveStandByPanel />
                break;
            }
        })
        return (
            <Grid container>
                {
                    panels.map((panel,index) => (<Grid item xs={4} key={index}>{panel}</Grid>))
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
