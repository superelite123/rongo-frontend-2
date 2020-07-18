import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LiveChatPanel from '../../components/live/LiveChatPanel'

class LiveChatPanelContainer extends Component {

    render() {
        return (
            <LiveChatPanel />
        )
    }
}

export default LiveChatPanelContainer;