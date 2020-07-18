import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as accountActions from 'redux/modules/account/account';
import ChangePasswordPanel from 'components/account/ChangePasswordPanel'

class ChangePasswordContainer extends Component
{
    render()
    {
        const { AccountActions } = this.props;

        return (
            <ChangePasswordPanel />
        )
    }
}

export default connect(
    (state) => ({
        liveStreamList: state.account.get('showFollow'),
    }),
    (dispatch) => ({
        AccountActions: bindActionCreators(accountActions, dispatch)
    })
)((ChangePasswordContainer));