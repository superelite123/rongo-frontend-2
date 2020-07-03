import React, { Component } from 'react'
import { Login } from 'components/auth'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions  from 'redux/modules/login';
import * as baseActions  from 'redux/modules/base';
import * as userActions from 'redux/modules/user';
import storage from 'lib/storage';

class LoginContainer extends Component
{
    componentWillMount() 
    {
        this.props.baseActions.setHeaderVisibility(false)
        const { LoginActions } = this.props;
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
    handleChange = (e) => {
        const { LoginActions } = this.props;
        const { name, value } = e.target;
        LoginActions.changeInput({
            name,
            value,
        });
        this.setError(null)
    }
    handleSubmit = async () => {
        const { LoginActions,UserActions,email,password,history  } = this.props
        try {
            await LoginActions.localLogin({email,password});
            const result = this.props.login1;
            UserActions.setFirstLoggedin(result);
            UserActions.setEmail(email);
            if(result > 0)
            {
                storage.set('firstloggedin', result);
                storage.set('loggedInfo', this.props.loggedInfo);
                history.push('/loginconfirm');
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
        const { error } = this.props
        return (
            <Login handleChange={this.handleChange} error={error} handleSubmit={ this.handleSubmit } />
        )
    }
}

export default connect(
    (state) => ({
        email:state.login.get('email'),
        password:state.login.get('password'),
        error:state.login.get('error'),
        login1: state.login.get('login1'),
        loggedInfo: state.user.get('loggedInfo')
    }),
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch),
        baseActions: bindActionCreators(baseActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(LoginContainer);