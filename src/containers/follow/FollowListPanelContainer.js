import storage from 'lib/storage';
import React,{Component} from 'react'
import FollowListPanel from '../../components/follow/FollowListPanel'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
import * as followActions from 'redux/modules/follow/follow';

class FollowListPanelContainer extends Component
{
    getFollowList = async () => {
        const { HomeActions, FollowActions } = this.props;
        try {
            const token = storage.get('token');
            await FollowActions.getFollows(token);
            console.log(this.props.followList)
        } catch (e) {
            console.log(e)
        }
        
    }
    
    componentDidMount() {
        this.getFollowList();
    }

    render() {

        const { HomeActions, FollowActions, followList } = this.props;
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
                    console.log(follow);
                    break;
                default:
                    break;
            }
        }

        return (
            <FollowListPanel handleClick={handleClick} followList={followList} />
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
        FollowActions: bindActionCreators(followActions, dispatch)
    })
)((FollowListPanelContainer));