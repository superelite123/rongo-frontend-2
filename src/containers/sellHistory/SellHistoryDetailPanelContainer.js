
import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SellHistoryDetailPanel from 'components/sellHistory/SellHistoryDetailPanel'
import * as homeActions from 'redux/modules/homePage';
import * as sellActions from 'redux/modules/sellHistory/sellHistory';

class SellHistoryListPanelContainer extends Component {

    
    render () {
        const { HomeActions, SellActions,  sellHistoryList} = this.props;

        return (
            <SellHistoryDetailPanel />
        )
    }


}

export default connect(
    (state) => ({
        showSellHistory:state.sellHistory.get('showSellHistory')
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        SellActions: bindActionCreators(sellActions, dispatch),
    })
)((SellHistoryListPanelContainer));