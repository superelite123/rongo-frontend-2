import React,{Component} from 'react'
import LiveListPanel from '../../components/live/LiveListPanel'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
import * as liveActions from 'redux/modules/live/liveStream';

class LiveListPanelContainer extends Component
{

    getLiveList = async () => {
        const { LiveActions,  liveStreamList} = this.props;

        try {
            await LiveActions.getLiveStreams();
            console.log(liveStreamList)
        } catch (e) {
            console.log(e)
        }
    }

    componentWillMount() {
        this.getLiveList()
    }

    render() {

        const { HomeActions, LiveActions, liveStreamList } = this.props;

        const handleClick = (panelNumber, panelType) => {
            console.log(panelNumber + ',' + panelType)
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
                    break;
                default:
                    break;
            }
        }

        return (
            <LiveListPanel handleClick={handleClick} liveStreamList={ liveStreamList } />
        )
    }
}

export default connect(
    (state) => ({
        liveStreamList:state.liveStream.get('liveStreamList'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        LiveActions: bindActionCreators(liveActions, dispatch),
    })
)((LiveListPanelContainer));