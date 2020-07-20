import React, { Component } from "react";
import PageTemplate from 'components/base/PageTemplate'
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

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
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

class Home extends Component {
    render() {

        const { HomeActions, firstPanelVisible, secondPanelVisible, thirdPanelVisible,history } = this.props
        let firstPanel = null
        let secondPanel = null
        let thirdPanel = null
        
        switch (firstPanelVisible) {
            case FIRST_PANEL_HOME:
                firstPanel = <HomePanelContainer />
                console.log("firstpanel" + firstPanelVisible)
            
                break
            case FIRST_PANEL_LIVE:
                console.log("firstpanel" + firstPanelVisible)
                firstPanel = <NotificationListPanelContainer />
                break
            case FIRST_PANEL_NOTI:
                firstPanel = <NotificationListPanelContainer />
                console.log("firstpanel" + firstPanelVisible)
            
                break;
            default:
                break;
        }

        switch (secondPanelVisible) {
            case 0:
                secondPanel = null;
                break;
            case SHOW_FOLLOWPANEL:
                secondPanel = <FollowListPanelContainer />
                break;
            case SHOW_PPROUCTSPANEL:
                secondPanel = <ProductListPanelContainer />;
                break;
            case SHOW_TRANSACTIONSPANEL:
                secondPanel = <TransactionListPanelContainer />;
                break;
            case SHOW_LIVELISTPANEL:
                secondPanel = <LiveListPanelContainer />;
                break
            case SHOW_SELLHISTORYLISTPANEL:
                secondPanel = <SellHistoryListPanelContainer />;
                break
            case SHOW_CHANGEEMAILPANEL:
                secondPanel = <ChangeEmailAddressContainer />
                break
            case SHOW_CHANGEEPASSWORDPANEL:
                secondPanel = <ChangePasswordContainer />
                break
            case SHOW_NOTIFICATION_DETAIL:
                secondPanel = <NotificationDetailPanelContainer />
                break;
            case SHOW_STOREMANAGEMENT:
                secondPanel = <StorePanelContainer />
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
                thirdPanel = <FollowDetailPanelContainer />;
                break
            case SHOW_TRANSACTIONDETAIL:
                thirdPanel = <TransactionDetailPanelContainer />
                break
            case SHOW_PADDLINK:
                thirdPanel = <ProductAddLinkPanel />;
                break;
            case SHOW_PFORM:
                thirdPanel = <ProductFormPanelContainer />;
                break;
            case SHOW_PDETAIL:
                thirdPanel = <ProductDetailPanelContainer />;
                break;
            case SHOW_SELLHISTORYDETAILPANEL:
                thirdPanel = <SellHistoryDetailPanelContainer />;
                break;
            case SHOW_LIVE_CHAT:
                thirdPanel = <LiveChatPanelContainer />
                break
            default:
                thirdPanel = <ProductFormPanel />;
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
            <PageTemplate
                first={firstPanel}
                second={secondPanel}
                third={thirdPanel}
                handleAction = {handleBottomTab}
            ></PageTemplate>
        )
    }
}
export default connect(
    (state) => ({
        firstPanelVisible: state.homePage.get('firstPanel'),
        secondPanelVisible: state.homePage.get('seconPanel'),
        thirdPanelVisible: state.homePage.get('thirdPanel'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
    })
)(Home);
