import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
import * as sellActions from 'redux/modules/sellHistory/sellHistory';
import storage from 'lib/storage'
import SellHistoryListPanel from '../../components/sellHistory/SellHistoryListPanel';

class SellHistoryListPanelContainer extends Component {

    getSellHistoryList = async () => {
        const { SellActions,  sellHistoryList} = this.props;

        try {
            const token = storage.get('token');
            await SellActions.getSellHistory();
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getSellHistoryList()
    }

    render () {
        const { HomeActions, SellActions,  sellHistoryList} = this.props;
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
                    SellActions.showSellDateHitory(sellHistory)
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
        sellHistoryList:state.sellHistory.get('sellHistoryList'),
        isExpand:state.sellHistory.get('isExpand')
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        SellActions: bindActionCreators(sellActions, dispatch),
    })
)((SellHistoryListPanelContainer));