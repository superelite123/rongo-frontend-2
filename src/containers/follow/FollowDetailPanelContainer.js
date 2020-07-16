import React,{Component} from 'react'
import FollowDetailPanel from 'components/follow/FollowDetailPanel'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as followActions from 'redux/modules/follow/follow';

class FollowDetailPanelContainer extends Component
{
    render()
    {
        const { showFollow } = this.props;

        return (
            <FollowDetailPanel showFollow={ showFollow }/>
        )
    }
}

export default connect(
    (state) => ({
        showFollow: state.follow.get('showFollow'),
    }),
    (dispatch) => ({
        FollowActions: bindActionCreators(followActions, dispatch)
    })
)((FollowDetailPanelContainer));