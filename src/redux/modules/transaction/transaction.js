import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';

import * as TransactionAPI from 'lib/api/transaction';

const GET_TRANSACTIONS = 'transaction/GET_TRANSACTIONS';
const SHOW_TRANSACTION_DETAIL = 'transaction/SHOW_TRANSACTION_DETAIL'

export const getTransactions = createAction(GET_TRANSACTIONS, TransactionAPI.getTransactions);
export const showTransactionDetail = createAction(SHOW_TRANSACTION_DETAIL)

const initialState = Map({
    transactionList: null,
    showTransaction: null,
});

export default handleActions({
    [SHOW_TRANSACTION_DETAIL]: (state, action) => {
        const transaction = action.payload
        state = state.set('showTransaction', transaction)
        
        return state
    },
    ...pender({
        type: GET_TRANSACTIONS,
        onSuccess: (state, action) => {
            const transactions = action.payload.data;
            console.log(transactions)
            return state.set('transactionList', transactions)            
        }
    })
}, initialState)