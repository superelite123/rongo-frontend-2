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
import * as liveActions from 'redux/modules/livePage'
import {
    SHOW_LIVEFORM,
    SHOW_LIVEPLAYER,
    SHOW_LIVESTANDBYPANEL,
    SHOW_LIVEPRODUCTLIST,
    SHOW_LIVECHATPANEL
} from 'lib/constant'
class Live extends Component {
    
    render() {
        const { LiveActions, panelsInfo, } = this.props
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
        panelsInfo:state.livePage.get('panels')
    }),
    (dispatch) => ({
        LiveActions: bindActionCreators(liveActions, dispatch),
    })
)(Live);
