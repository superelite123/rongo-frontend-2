import React,{Component} from 'react'
import TransactionListPanel from '../../components/transaction/TransactionListPanel'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
import * as transactionActions from 'redux/modules/transaction/transaction';
import storage from 'lib/storage'

class TransactionListPanelContainer extends Component
{
    constructor() {
        super()
        this.state = {
            deleteMode:false,
            searchMode:false,
            selectedProducts:[],
            confirmDelete:false,
            token:null
        }
    }

    getTransactionList = async () => {
        const { TransactionActions,  transactionList} = this.props;

        const token = storage.get('token');
        this.setState({token:token})
        try {
            await TransactionActions.getTransactions({token:token});
            console.log(transactionList)
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getTransactionList()
    }

    render() {

        const { HomeActions, TransactionActions, transactionList } = this.props;
        console.log(transactionList)

        const handleClick = (panelNumber, panelType, transaction) => {
            console.log(panelNumber + panelType)
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
                    TransactionActions.showTransactionDetail(transaction)
                    console.log(transaction);
                    break;
                default:
                    break;
            }
        }

        return (
            <TransactionListPanel handleClick={handleClick} transactionList={transactionList} />
        )
    }
}

export default connect(
    (state) => ({
        firstPanelVisible:state.homePage.get('firstPanel'),
        secondPanelVisible:state.homePage.get('seconPanel'),
        thirdPanelVisible:state.homePage.get('thirdPanel'),
        transactionList:state.transaction.get('transactionList'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        TransactionActions: bindActionCreators(transactionActions, dispatch),
    })
)((TransactionListPanelContainer));