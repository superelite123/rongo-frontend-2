import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LiveChatPanel from '../../components/live/LiveChatPanel'
import * as liveActions from 'redux/modules/livePage'
import * as LiveApi from 'lib/api/live';
class LiveChatPanelContainer extends Component {
    handleQuit = () => {
        const {LiveActions,liveID} = this.props
        
        LiveApi.quitLive(liveID).then(
            (res) => {
                LiveActions.updateStatus(2)
            },
            (e) => {

            }
        )
    }
    render() {
        return (
            <LiveChatPanel 
                handleClick={this.handleQuit}
            />
        )
    }
}

export default connect(
    (state) => ({
        liveID:state.livePage.get('id'),
    }),
    (dispatch) => ({
        LiveActions: bindActionCreators(liveActions, dispatch),
    })
)(LiveChatPanelContainer);