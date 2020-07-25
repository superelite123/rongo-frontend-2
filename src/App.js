import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'
import { Home, Auth,Live } from 'pages';
import { LoginContainer, ConfirmContainer } from 'containers/auth'
import storage from 'lib/storage';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from 'redux/modules/user';
const theme = createMuiTheme({
    palette: {
      secondary: {
        main: blue[900],
        brown:'#BBA884'
      },
      primary: {
        main: indigo[700],
        white:'#ffffff',
        brown:'#DEDCD4',
        red:'#D74936',
        background:'#DEDCD4',
        black:'#333333',
        arrowColor:'#BDBDBD'
      }
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '"Lato"',
        'sans-serif'
      ].join(',')
    }
});
class App extends Component {
    initializeUserInfo = async () => {
        const {history} = this.props

        const firstloggedin = storage.get('firstloggedin');
        if(!firstloggedin)
        {
            history.push('/')
            return
        }
        const { UserActions } = this.props;
        UserActions.setFirstLoggedin(firstloggedin);
        //when it is confirmed
        //get logged
        const logged = storage.get('logged');
        if(!logged)
        {
            history.push('/loginconfirm')
            return
        }
        // const token = storage.get('token');
        // if(!token)
        // {
        //     history.push('/')
        //     return
        // }
        // UserActions.setToken(token)
        // get userInfo
        const userInfo = storage.get('userInfo');
        if(!userInfo) return;
        UserActions.setUserInfo(userInfo)
    }

    componentDidMount() {
        this.initializeUserInfo();
    }
    render() {
      const {classes,pageLoading} = this.props
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route path="/loginconfirm" component={ConfirmContainer}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/live" component={Live}/>
                    <Route path='/live/broadcast' component={() => {
                      window.location.href="http://localhost:5000/src/dev-view-publish";
                      return null
                    }}/>
                </ThemeProvider>
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch),
    })
)(App);