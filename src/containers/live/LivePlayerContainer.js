import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LivePlayer from '../../components/live/LivePlayer'
import * as liveActions from 'redux/modules/livePage'

class LivePlayerContainer extends Component {
    render() {
        const {stamps} = this.props
        const filteredStamps = stamps.filter(stamp => stamp.visible === true)
        return (
            <LivePlayer
                stamps={filteredStamps}
            />
        )
    }
}

export default connect(
    (state) => ({
        stamps:state.livePage.get('stamps'),
    }),
    (dispatch) => ({
        LiveActions: bindActionCreators(liveActions, dispatch),
    })
)(LivePlayerContainer);