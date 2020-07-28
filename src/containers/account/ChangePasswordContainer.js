import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as accountActions from 'redux/modules/account/account';
import * as homeActions from 'redux/modules/homePage';
import ChangePasswordPanel from 'components/account/ChangePasswordPanel'
import * as AccountAPI from 'lib/api/account';
import { SHOW_HOMEPANEL } from 'lib/constant'
import storage from 'lib/storage'
class ChangePasswordContainer extends Component
{
    constructor() {
        super()
        this.state = {
            hasUpdated: false,
            token:null
        }
    }
    async componentDidMount(){
        const token = storage.get('token');
        this.setState({token:token})
    }
    handleSubmit = (data) => {
        console.log(data)
        AccountAPI.changePassword({password:data.password,token:this.state.token}).then(
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
        return (
            <ChangePasswordPanel 
                onSubmit={this.handleSubmit} 
                onReturn={this.handleReturn} 
                onCloseAlert={this.handleCloseAlert}
                hasUpdated={this.state.hasUpdated}
                />
        )
    }
}

export default connect(
    (state) => ({
        liveStreamList: state.account.get('showFollow'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        AccountActions: bindActionCreators(accountActions, dispatch)
    })
)((ChangePasswordContainer));