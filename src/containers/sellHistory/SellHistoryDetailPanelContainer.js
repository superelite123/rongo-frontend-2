
import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SellHistoryDetailPanel from 'components/sellHistory/SellHistoryDetailPanel'
import * as homeActions from 'redux/modules/homePage';
import * as sellActions from 'redux/modules/sellHistory/sellHistory';
import {SHOW_SELLHISTORYLISTPANEL,} from 'lib/constant'

class SellHistoryListPanelContainer extends Component {

    handleItemClick = (index) => {
        const {SellActions} = this.props
        SellActions.toggleExpand(index)
    }
    handleGoBack = () => {
        const {HomeActions} = this.props
        HomeActions.changeSecondStatus(SHOW_SELLHISTORYLISTPANEL)
    }
    render () {
        const { liveData } = this.props;
        return (
            <SellHistoryDetailPanel 
                liveData={liveData}
                handleItemClick={this.handleItemClick}
                handleGoBack={this.handleGoBack}
            />
        )
    }


}

export default connect(
    (state) => ({
        showSellHistory:state.sellHistory.get('showSellHistory'),
        liveData:state.sellHistory.get('detail'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        SellActions: bindActionCreators(sellActions, dispatch),
    })
)((SellHistoryListPanelContainer));