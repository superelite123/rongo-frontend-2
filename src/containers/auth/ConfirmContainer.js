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
        const { LoginActions,firstloggedin } = this.props;
        console.log(firstloggedin)
        LoginActions.initializeForm()
    }
    componentWillUnmount() {
        this.props.baseActions.setHeaderVisibility(true);
    }

    handleComplete = async (value,index) => {
        try {
            const { LoginActions,password,userID,history  } = this.props
            await LoginActions.localLoginConfirm({password,userID});
            const result = this.props.result;
            if(result === 0)
            {
                //store jwt token
                //store user info to storage
            }
            else
            {
                this.setError('メールアドレスまたはパスワードが違います')
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
        result:state.login.get('login2'),
        userID:state.user.get('firstloggedin'),
    }),
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch),
        baseActions: bindActionCreators(baseActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(ConfirmContainer);