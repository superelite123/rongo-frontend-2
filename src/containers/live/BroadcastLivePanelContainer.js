import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BroadcastLivePanel from '../../components/live/BroadcastLivePanel'

class BroadcastLivePanelContainer extends Component {

    render() {
        return (
            <BroadcastLivePanel />
        )
    }
}

export default BroadcastLivePanelContainer;