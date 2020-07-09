import React, { Component } from "react";
import PageTemplate from 'components/base/PageTemplate'
import HomePanelContainer from 'containers/HomePanelContainer'
import ProductListPanelContainer from 'containers/product/ProductListPanelContainer'
import ProductFormPanel from 'components/ProductFormPanel'
import ProductAddLinkPanel from 'components/ProductAddLinkPanel'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as homeActions from 'redux/modules/homePage';
import {
    SHOW_HOMEPANEL,
    SHOW_PPROUCTSPANEL,
    SHOW_TRANSACTIONSPANEL,
    SHOW_PADDLINK,
    SHOW_PFORM,
    SHOW_PDETAIL,
    SHOW_TRANSACTIONDETAIL
} from 'lib/constant'
class Home extends Component {
    render() {
        const {firstPanelVisible,secondPanelVisible,thirdPanelVisible} = this.props
        let firstPanel = firstPanelVisible !== 0?<HomePanelContainer />:null
        let secondPanel = null
        let thirdPanel = null
        switch(secondPanelVisible)
        {
            case 0:
                secondPanel = null;
            break;
            case SHOW_PPROUCTSPANEL:
                secondPanel = <ProductListPanelContainer />;
            break;
            default:
                secondPanel = null;
            break;
        }
        switch(thirdPanelVisible)
        {
            case 0:
                thirdPanel = null;
            break;
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
                first = {firstPanel}
                second = {secondPanel}
                third = {thirdPanel}
            ></PageTemplate>
        )
      }
}
export default connect(
    (state) => ({
        firstPanelVisible:state.homePage.get('firstPanel'),
        secondPanelVisible:state.homePage.get('seconPanel'),
        thirdPanelVisible:state.homePage.get('thirdPanel'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
    })
)(Home);
