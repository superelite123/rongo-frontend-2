import React, { Component } from 'react';
import Header from 'components/base/header';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
    render() {
        const {visible} = this.props
        if(!visible) return null
        return (
            <Header>
            </Header>
        );
    }
}

export default connect(
    (state) => ({
        visible:state.base.getIn(['header','visible'])
    }),
    (dispatch) => ({

    })
)(HeaderContainer)