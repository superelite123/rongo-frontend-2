import React, { Component } from 'react'
import { Login } from 'components/auth'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Route } from 'react-router-dom';
import * as loginActions  from 'redux/modules/login';
import * as baseActions  from 'redux/modules/base';
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
    handleChange = (e) => {
        const { LoginActions } = this.props;
        const { name, value } = e.target;

        LoginActions.changeInput({
            name,
            value,
        });
    }
    render() 
    {
        return (
            <Login onChange={this.handleChange} />
        )
    }
}

export default connect(
    (state) => ({
        email:state.login.email,
        password:state.login.password
    }),
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch),
        baseActions: bindActionCreators(baseActions, dispatch)
    })
)(LoginContainer);