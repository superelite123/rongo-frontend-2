import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LivePlayer from '../../components/live/LivePlayer'

class LivePlayerContainer extends Component {

    render() {
        return (
            <LivePlayer />
        )
    }
}

export default LivePlayerContainer;