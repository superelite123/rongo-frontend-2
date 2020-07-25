import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as accountActions from 'redux/modules/account/account';
import ChangeEmailAddressPanel from 'components/account/ChangeEmailAddressPanel'
import * as AccountAPI from 'lib/api/account';
import { SHOW_HOMEPANEL } from 'lib/constant'
class ChangeEmailAddressContainer extends Component
{
    constructor() {
        super()
        this.state = {
            hasUpdated: false,
        }
    }
    handleSubmit = (data) => {
        console.log(data)
        AccountAPI.changeEmailAddress({email:data.email}).then(
            (res) => {
                this.setState({hasUpdated:true})
            },
            (e) => {

            }
        )
    }
    handleReturn = () => {
        const {HomeActions} = this.props
        HomeActions.changeFirstStatus(SHOW_HOMEPANEL)
        HomeActions.changeSecondStatus(0)
        HomeActions.changeThirdStatus(0)
    }
    handleCloseAlert = () => {
        this.setState({hasUpdated:false})
    }
    render()
    {
        console.log('change email')
        return (
            <ChangeEmailAddressPanel 
            onSubmit={this.handleSubmit} 
            onReturn={this.handleReturn} 
            onCloseAlert={this.handleCloseAlert}
            hasUpdated={this.state.hasUpdated}/>
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