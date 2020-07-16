import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
import * as sellActions from 'redux/modules/sellHistory/sellHistory';

import SellHistoryListPanel from '../../components/sellHistory/SellHistoryListPanel';

class SellHistoryListPanelContainer extends Component {

    getSellHistoryList = async () => {
        const { SellActions,  sellHistoryList} = this.props;

        try {
            await SellActions.getSellHistory();
        } catch (e) {
            console.log(e)
        }
    }

    componentWillMount() {
        this.getSellHistoryList()
    }

    render () {
        const { HomeActions,  sellHistoryList} = this.props;
        const handleClick = (panelNumber, panelType, sellHistory) => {

            switch (panelType) {
                case 1:
                    HomeActions.changeFirstStatus(panelNumber)
                    HomeActions.changeSecondStatus(0)
                    HomeActions.changeThirdStatus(0)
                    break;
                case 2:
                    HomeActions.changeSecondStatus(panelNumber)
                    HomeActions.changeThirdStatus(0)
                    break;
                case 3:
                    HomeActions.changeThirdStatus(panelNumber)
                    break;
                default:
                    break;
            }
        }

        return (
            <SellHistoryListPanel handleClick={handleClick} sellHistoryList={sellHistoryList} />
        )
    }
}

export default connect(
    (state) => ({
        firstPanelVisible:state.homePage.get('firstPanel'),
        secondPanelVisible:state.homePage.get('seconPanel'),
        thirdPanelVisible:state.homePage.get('thirdPanel'),
        sellHistoryList:state.sellHistory.get('sellHistoryList'),
        isExpand:state.sellHistory.get('isExpand')
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        SellActions: bindActionCreators(sellActions, dispatch),
    })
)((SellHistoryListPanelContainer));