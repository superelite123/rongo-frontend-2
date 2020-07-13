import React, { Component } from "react";
import PageTemplate from 'components/base/PageTemplate'
import HomePanelContainer from 'containers/HomePanelContainer'
import ProductListPanelContainer from 'containers/product/ProductListPanelContainer'
import ProductFormPanel from 'components/product/ProductFormPanel'
import ProductAddLinkPanel from 'components/product/ProductAddLinkPanel'
import TransactionListPanelContainer from '../containers/transaction/TransactionListPanelContainer'
import TransactionDetailPanelContainer from '../containers/transaction/TransactionDetailPanelContainer'
import FollowListPanelContainer from '../containers/follow/FollowListPanelContainer'
import FollowDetailPanelContainer from '../containers/follow/FollowDetailPanelContainer'
import LiveListPanelContainer from '../containers/live/LiveListPanelContainer'
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
    SHOW_LIVELISTPANEL
} from 'lib/constant'
class Home extends Component {
    render() {
        const { firstPanelVisible, secondPanelVisible, thirdPanelVisible } = this.props
        let firstPanel = firstPanelVisible !== 0 ? <HomePanelContainer /> : null
        let secondPanel = null
        let thirdPanel = null
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
                thirdPanel = <ProductFormPanel />;
                break;
            case SHOW_PDETAIL:
                thirdPanel = <ProductListPanelContainer />;
                break;
            default:
                thirdPanel = <ProductFormPanel />;
                break;
        }
        return (
            <PageTemplate
                first={firstPanel}
                second={secondPanel}
                third={thirdPanel}
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
