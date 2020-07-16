
import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SellHistoryDetailPanel from 'components/sellHistory/SellHistoryDetailPanel'
import * as homeActions from 'redux/modules/homePage';

class SellHistoryListPanelContainer extends Component {

    
    render () {
        return (
            <SellHistoryDetailPanel />
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
)((SellHistoryListPanelContainer));