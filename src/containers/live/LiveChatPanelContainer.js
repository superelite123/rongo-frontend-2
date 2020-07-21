import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LiveChatPanel from '../../components/live/LiveChatPanel'
import * as liveActions from 'redux/modules/livePage'
import * as LiveApi from 'lib/api/live';
import storage from 'lib/storage'

class LiveChatPanelContainer extends Component {
    handleQuit = async () => {
        const {LiveActions,liveID} = this.props
        
        const token = storage.get('token');
        LiveApi.quitLive({id: liveID, token: token}).then(
            (res) => {
                LiveActions.updateStatus(2)
                console.log('e')
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