import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
import * as sellActions from 'redux/modules/sellHistory/sellHistory';
import * as baseActions from 'redux/modules/base';
import storage from 'lib/storage'
import SellHistoryListPanel from '../../components/sellHistory/SellHistoryListPanel';
import {SHOW_HOMEPANEL,SHOW_SELLHISTORYDETAILPANEL,} from 'lib/constant'

class SellHistoryListPanelContainer extends Component {
    constructor() {
        super()
        this.state = {
            hasUpdated: false,
            token:null
        }
    }
    getSellHistoryList = async () => {
        const { SellActions} = this.props;

        const token = storage.get('token');
        this.setState({token:token})
        try {
            await SellActions.getSellHistory({token:token});
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getSellHistoryList()
    }
    handleGoBack = () => {
        const {HomeActions} = this.props
        HomeActions.changeFirstStatus(SHOW_HOMEPANEL)
    }
    handleClick = (date, sellHistory) => {
        const { HomeActions, BaseActions, SellActions,} = this.props;
        BaseActions.setPageLoading(true)
        SellActions.getDetail({date:date,token:this.state.token}).then(
            (res) => {
                HomeActions.changeThirdStatus(SHOW_SELLHISTORYDETAILPANEL)
                BaseActions.setPageLoading(false)
            },
            (e) => {
                console.log(e)
                BaseActions.setPageLoading(false)
            }
        )
    }
    render () {
        const { sellHistoryList} = this.props;

        return (
            <SellHistoryListPanel 
                handleClick={this.handleClick} 
                sellHistoryList={sellHistoryList}
                handleGoBack={this.handleGoBack}
             />
        )
    }
}

export default connect(
    (state) => ({
        sellHistoryList:state.sellHistory.get('sellHistoryList'),
        isExpand:state.sellHistory.get('isExpand')
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        SellActions: bindActionCreators(sellActions, dispatch),
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)((SellHistoryListPanelContainer));