import React,{Component} from 'react'
import FollowDetailPanel from 'components/follow/FollowDetailPanel'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as followActions from 'redux/modules/follow/follow';
import * as homeActions from 'redux/modules/homePage';
import {isMobile} from "react-device-detect";
import {SHOW_FOLLOWPANEL,SHOW_PADDLINK} from 'lib/constant'
class FollowDetailPanelContainer extends Component
{
    goBack = () => {
        const { HomeActions} = this.props;
        
        HomeActions.changeThirdStatus(0)
    }
    handleGoBack = () => {
        const {HomeActions} = this.props
        if(isMobile)
        {
            HomeActions.changeSecondStatus(SHOW_FOLLOWPANEL)
        }
        if(!isMobile)
        {
            HomeActions.changeThirdStatus(SHOW_PADDLINK)
        }
    }

    render()
    {
        const { showFollow } = this.props;

        return (
            <FollowDetailPanel 
                showFollow={ showFollow } 
                goBack={ this.handleGoBack }/>
        )
    }
}

export default connect(
    (state) => ({
        showFollow: state.follow.get('showFollow'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        FollowActions: bindActionCreators(followActions, dispatch)
    })
)((FollowDetailPanelContainer));