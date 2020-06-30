import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from 'pages';
import styled from 'styled-components';
import { LoginContainer, ConfirmContainer } from 'containers/auth'
import HeaderContainer from 'containers/base/HeaderContainer';
class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer/>
                <Route exact path="/home" component={Home}/>
                <Route path="/" component={LoginContainer}/>
            </div>
        );
    }
}

export default App;