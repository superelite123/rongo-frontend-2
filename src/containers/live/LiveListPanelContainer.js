import React,{Component} from 'react'
import LiveListPanel from '../../components/live/LiveListPanel'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
import * as liveActions from 'redux/modules/live/liveStream';
import storage from 'lib/storage'
import * as baseActions from 'redux/modules/base';
import {SHOW_HOMEPANEL,} from 'lib/constant'

class LiveListPanelContainer extends Component
{

    getLiveList = async () => {
        const { LiveActions,  liveStreamList,BaseActions} = this.props;

        try {
            BaseActions.setPageLoading(true)
            const token = storage.get('token');
            await LiveActions.getLiveStreams(token);
            BaseActions.setPageLoading(false)
        } catch (e) {
            BaseActions.setPageLoading(false)
        }
    }

    handleGoBack = () => {
        const {HomeActions} = this.props
        HomeActions.changeFirstStatus(SHOW_HOMEPANEL)
    }
    componentDidMount() {
        this.getLiveList()
    }

    render() {

        const { HomeActions, liveStreamList } = this.props;

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
            <LiveListPanel handleClick={handleClick} liveStreamList={ liveStreamList }
            handleGoBack={this.handleGoBack} />
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
        BaseActions: bindActionCreators(baseActions, dispatch),
    })
)((LiveListPanelContainer));