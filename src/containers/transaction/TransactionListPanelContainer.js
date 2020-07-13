import React,{Component} from 'react'
import TransactionListPanel from '../../components/transaction/TransactionListPanel'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';

class TransactionListPanelContainer extends Component
{
    render() {

        const { HomeActions } = this.props;

        const handleClick = (panelNumber, panelType) => {
            console.log(panelNumber + ',' + panelType)
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
            <TransactionListPanel handleClick={handleClick} />
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
)((TransactionListPanelContainer));