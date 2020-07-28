import storage from 'lib/storage';
import React,{Component} from 'react'
import FollowListPanel from '../../components/follow/FollowListPanel'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
import * as followActions from 'redux/modules/follow/follow';
import * as baseActions from 'redux/modules/base';
import {isMobile} from "react-device-detect";
import {SHOW_HOMEPANEL,} from 'lib/constant'

class FollowListPanelContainer extends Component
{
    getFollowList = async () => {
        const { FollowActions, BaseActions } = this.props;
        BaseActions.setPageLoading(true)
        try {
            const token = storage.get('token');
            await FollowActions.getFollows(token);
            BaseActions.setPageLoading(false)
        } catch (e) {
            console.log(e)
        }
        
    }
    
    componentDidMount() {
        this.getFollowList();
    }
    handleGoBack = () => {
        if(isMobile)
        {
            const {HomeActions} = this.props
            HomeActions.changeFirstStatus(SHOW_HOMEPANEL)
        }
    }
    render() {

        const { HomeActions, FollowActions, followList, mode } = this.props;
        const handleClick = (panelNumber, panelType, follow) => {
            switch (panelType) {
                case 1:
                    HomeActions.changeFirstStatus(panelNumber)
                    HomeActions.changeSecondStatus(0)
                    HomeActions.changeThirdStatus(0)
                    break;
                case 2:
                    HomeActions.changeSecondStatus(panelNumber)
                    HomeActions.changeThirdStatus(0)
                    break;
                case 3:
                    HomeActions.changeThirdStatus(panelNumber)
                    FollowActions.showFollowerDetail(follow)
                    break;
                default:
                    break;
            }
        }

        return (
            <FollowListPanel 
                    mode={mode} 
                    handleClick={handleClick} 
                    onBack={this.handleGoBack} 
                    followList={followList} />
        )
    }
}

export default connect(
    (state) => ({
        firstPanelVisible:state.homePage.get('firstPanel'),
        secondPanelVisible:state.homePage.get('seconPanel'),
        thirdPanelVisible:state.homePage.get('thirdPanel'),
        followList:state.follow.get('followList'),
        showFollow:state.follow.get('showFollow'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        FollowActions: bindActionCreators(followActions, dispatch),
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)((FollowListPanelContainer));