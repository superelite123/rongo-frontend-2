import React, { Component } from "react";
import { Grid, Box,  } from "@material-ui/core";
import HomePanelContainer from 'containers/HomePanelContainer'
import ProductListPanelContainer from 'containers/product/ProductListPanelContainer'
import ProductFormPanelContainer from 'containers/product/ProductFormPanelContainer'
import ProductFormPanel from 'components/product/ProductFormPanel'
import ProductAddLinkPanel from 'components/product/ProductAddLinkPanel'
import TransactionListPanelContainer from '../containers/transaction/TransactionListPanelContainer'
import TransactionDetailPanelContainer from '../containers/transaction/TransactionDetailPanelContainer'
import FollowListPanelContainer from '../containers/follow/FollowListPanelContainer'
import FollowDetailPanelContainer from '../containers/follow/FollowDetailPanelContainer'
import LiveListPanelContainer from '../containers/live/LiveListPanelContainer'
import SellHistoryListPanelContainer from '../containers/sellHistory/SellHistoryListPanelContainer'
import SellHistoryDetailPanelContainer from '../containers/sellHistory/SellHistoryDetailPanelContainer'
import ChangeEmailAddressContainer from '../containers/account/ChangeEmailAddressContainer'
import ChangePasswordContainer from '../containers/account/ChangePasswordContainer'
import NotificationListPanelContainer from '../containers/notification/NotificationListPanelContainer'
import NotificationDetailPanelContainer from '../containers/notification/NotificationDetailPanelContainer'
import LiveChatPanelContainer from '../containers/live/LiveChatPanelContainer'
import StorePanelContainer from '../containers/store/StorePanelContainer'
import ProductDetailPanelContainer from '../containers/product/ProductDetailPanelContainer'
import {isMobile} from "react-device-detect";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
import * as baseActions from 'redux/modules/base';
import withStyles from "@material-ui/styles/withStyles";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    SHOW_HOMEPANEL,
    SHOW_FOLLOWPANEL,
    SHOW_PPROUCTSPANEL,
    SHOW_TRANSACTIONSPANEL,
    SHOW_PADDLINK,
    SHOW_PFORM,
    SHOW_PDETAIL,
    SHOW_TRANSACTIONDETAIL,
    SHOW_SELLHISTORYLISTPANEL,
    SHOW_SELLHISTORYDETAILPANEL,
    SHOW_LIVELISTPANEL,
    SHOW_CHANGEEMAILPANEL,
    SHOW_CHANGEEPASSWORDPANEL, 
    SHOW_NOTIFICATION_DETAIL,
    SHOW_BROADCAST_LIVE,
    SHOW_LIVE_CHAT,
    FIRST_PANEL_HOME,
    FIRST_PANEL_LIVE,
    FIRST_PANEL_NOTI,
    SHOW_STOREMANAGEMENT
} from 'lib/constant'

const styles = theme => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
class Home extends Component {
    render() {
        const gridColumn = isMobile?12:4
        const { HomeActions, firstPanelVisible, secondPanelVisible, thirdPanelVisible,history, classes, pageLoading } = this.props
        let firstPanel = null
        console.log(firstPanelVisible)
        let secondPanel = null
        let thirdPanel = null
        switch (firstPanelVisible) {
            case FIRST_PANEL_HOME:
                firstPanel = <HomePanelContainer mode='1' />
                break
            case FIRST_PANEL_LIVE:
                firstPanel = <NotificationListPanelContainer mode='1' />
                break
            case FIRST_PANEL_NOTI:
                firstPanel = <NotificationListPanelContainer mode='1' />
                break;
            case 0:
                firstPanel = null;
                break;
            default:
                firstPanel = <HomePanelContainer mode='1' />
                break;
        }

        switch (secondPanelVisible) {
            case 0:
                secondPanel = null;
                break;
            case SHOW_FOLLOWPANEL:
                secondPanel = <FollowListPanelContainer mode='0' />
                break;
            case SHOW_PPROUCTSPANEL:
                secondPanel = <ProductListPanelContainer mode='0' />;
                break;
            case SHOW_TRANSACTIONSPANEL:
                secondPanel = <TransactionListPanelContainer mode='0' />;
                break;
            case SHOW_LIVELISTPANEL:
                secondPanel = <LiveListPanelContainer mode='0' />;
                break
            case SHOW_SELLHISTORYLISTPANEL:
                secondPanel = <SellHistoryListPanelContainer mode='0' />;
                break
            case SHOW_CHANGEEMAILPANEL:
                secondPanel = <ChangeEmailAddressContainer mode='0' />
                break
            case SHOW_CHANGEEPASSWORDPANEL:
                secondPanel = <ChangePasswordContainer mode='0' />
                break
            case SHOW_NOTIFICATION_DETAIL:
                secondPanel = <NotificationDetailPanelContainer mode='0' />
                break;
            case SHOW_STOREMANAGEMENT:
                secondPanel = <StorePanelContainer mode='0' />
                break;
            default:
                secondPanel = null;
                break;
        }

        switch (thirdPanelVisible) {
            case 0:
                thirdPanel = null;
                break;
            case SHOW_FOLLOWPANEL:
                thirdPanel = <FollowDetailPanelContainer mode='0' />;
                break
            case SHOW_TRANSACTIONDETAIL:
                thirdPanel = <TransactionDetailPanelContainer mode='0' />
                break
            case SHOW_PADDLINK:
                thirdPanel = <ProductAddLinkPanel mode='0' />;
                break;
            case SHOW_PFORM:
                thirdPanel = <ProductFormPanelContainer mode='0' />;
                break;
            case SHOW_PDETAIL:
                thirdPanel = <ProductDetailPanelContainer mode='0' />;
                break;
            case SHOW_SELLHISTORYDETAILPANEL:
                thirdPanel = <SellHistoryDetailPanelContainer mode='0' />;
                break;
            case SHOW_LIVE_CHAT:
                thirdPanel = <LiveChatPanelContainer mode='0' />
                break
            default:
                thirdPanel = <ProductFormPanel mode='0' />;
                break;
        }

        const handleBottomTab = (event, newValue) => {

            if (newValue == "home") {
                history.push('/home')
            } else if (newValue == "live") {
                history.push('/live')
            } else {
                HomeActions.changeFirstStatus(FIRST_PANEL_NOTI)
            }
            
        }

        return (
            <Grid container>
                <Grid item xs={gridColumn} key={1}>{firstPanel}</Grid>
                <Grid item xs={gridColumn} key={2}>{secondPanel}</Grid>
                <Grid item xs={gridColumn} key={3}>{thirdPanel}</Grid>
                <Backdrop className={classes.backdrop} open={pageLoading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Grid>
        )
    }
}
export default connect(
    (state) => ({
        firstPanelVisible: state.homePage.get('firstPanel'),
        secondPanelVisible: state.homePage.get('seconPanel'),
        thirdPanelVisible: state.homePage.get('thirdPanel'),
        pageLoading:state.base.get('pageLoading')
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(withStyles(styles)(Home));
