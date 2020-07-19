import React,{Component} from 'react'
import FollowDetailPanel from 'components/follow/FollowDetailPanel'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as followActions from 'redux/modules/follow/follow';
import * as homeActions from 'redux/modules/homePage';

class FollowDetailPanelContainer extends Component
{
    goBack = () => {
        const { HomeActions} = this.props;
        
        HomeActions.changeThirdStatus(0)
    }

    render()
    {
        const { showFollow } = this.props;

        return (
            <FollowDetailPanel showFollow={ showFollow } goBack={ this.goBack }/>
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