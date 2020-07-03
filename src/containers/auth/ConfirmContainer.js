import React, { Component } from 'react'
import { Confirm } from 'components/auth'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions  from 'redux/modules/login';
import * as baseActions  from 'redux/modules/base';
import * as userActions from 'redux/modules/user';

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

    handleComplete = (value,index) => {
        console.log(value)
    }
    handleSubmit = () => {

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
    }),
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch),
        baseActions: bindActionCreators(baseActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(ConfirmContainer);