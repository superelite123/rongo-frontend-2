import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CreateLivePanel from '../../components/live/CreateLivePanel'

class CreateLivePanelContainer extends Component {

    render() {
        return (
            <CreateLivePanel />
        )
    }
}

export default CreateLivePanelContainer;