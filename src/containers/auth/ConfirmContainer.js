import React, { Component } from 'react'
import { Confirm } from 'components/auth'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions  from 'redux/modules/login';
import * as baseActions  from 'redux/modules/base';
import * as userActions from 'redux/modules/user';
import storage from 'lib/storage';

class ConfirmContainer extends Component
{
    componentWillMount() 
    {
        this.props.baseActions.setHeaderVisibility(false)
        const { LoginActions } = this.props
        LoginActions.initializeForm()
    }
    componentWillUnmount() {
        this.props.baseActions.setHeaderVisibility(true);
    }
    setError = (message) => {
        const { LoginActions } = this.props;
        LoginActions.setError({
            message
        });
    }
    handleComplete = async (value,index) => {
        try {
            const { UserActions,userID,history  } = this.props
            await UserActions.localLoginConfirm({pwd:value,id:userID});
            const {result,userInfo,token} = this.props
            storage.set('userInfo',userInfo)
            storage.set('logged',true)
            storage.set('token',token)
            switch(result)
            {
                //success
                case 0:
                    storage.set('userInfo',userInfo)
                    storage.set('token',token)
                    history.push('/home');
                    // window.location.href="/home"
                    // store user info and token to storage
                    break;
                //expired
                case 409:
                    this.setError('メールアドレスまたはパスワードが違います1');
                    break;
                //invalide code
                case 501:
                    this.setError('メールアドレスまたはパスワードが違います2');
                    break;
                default:
                    break;
            }
        } catch (e) {
            this.setError('メールアドレスまたはパスワードが違います')
        }
    }
    render() 
    {
        const {email} = this.props
        return (
            <Confirm email={email} handleComplete={this.handleComplete} />
        )
    }
}

export default connect(
    (state) => ({
        email:state.user.getIn(['loggedInfo','email']),
        error:state.login.get('error'),
        result:state.user.get('result'),
        userID:state.user.get('firstloggedin'),
        token:state.user.get('token'),
        userInfo:state.user.get('userInfo'),
    }),
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch),
        baseActions: bindActionCreators(baseActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(ConfirmContainer);