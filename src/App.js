import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from 'pages';
import { LoginContainer, ConfirmContainer } from 'containers/auth'
import HeaderContainer from 'containers/base/HeaderContainer';
import storage from 'lib/storage';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from 'redux/modules/user';
class App extends Component {
    initializeUserInfo = async () => {
        const firstloggedin = storage.get('firstloggedin'); // 로그인 정보를 로컬스토리지에서 가져옵니다.
        if(!firstloggedin) return; // 로그인 정보가 없다면 여기서 멈춥니다.
        const { UserActions } = this.props;
        UserActions.setFirstLoggedin(firstloggedin);
        const loggedInfo = storage.get('loggedInfo'); // 로그인 정보를 로컬스토리지에서 가져옵니다.
        if(!loggedInfo) return;
        UserActions.setLoggedInfo(loggedInfo)
        console.log(loggedInfo)
        // try {
        //     await UserActions.checkStatus();
        // } catch (e) {
        //     //storage.remove('firstloggedin');
        //     window.location.href = '/';
        // }
    }

    componentDidMount() {
        this.initializeUserInfo();
    }
    render() {
        return (
            <div>
                <HeaderContainer/>
                <Route path="/home" component={Home}/>
                <Route exact path="/" component={LoginContainer}/>
                <Route path="/loginconfirm" component={ConfirmContainer}/>
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(App);