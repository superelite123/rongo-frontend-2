import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as accountActions from 'redux/modules/account/account';
import ChangeEmailAddressPanel from 'components/account/ChangeEmailAddressPanel'

class ChangeEmailAddressContainer extends Component
{
    render()
    {
        const { AccountActions } = this.props;
        console.log('change email')
        return (
            <ChangeEmailAddressPanel />
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
)((ChangeEmailAddressContainer));