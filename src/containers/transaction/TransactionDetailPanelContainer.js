import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as transactionActions from 'redux/modules/transaction/transaction';
import TransactionDetailPanel from 'components/transaction/TransactionDetailPanel'

class TransactionDetailPanelContainer extends Component
{
    render()
    {
        const { TransactionActions,  showTransaction} = this.props;

        return (
            <TransactionDetailPanel transaction={ showTransaction } />
        )
    }
}

export default connect(
    (state) => ({
        showTransaction: state.transaction.get('showTransaction')
    }),
    (dispatch) => ({
        TransactionActions: bindActionCreators(transactionActions, dispatch)
    })
)((TransactionDetailPanelContainer));