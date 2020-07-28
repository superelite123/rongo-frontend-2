import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeActions from 'redux/modules/homePage';
import BasePanel from 'components/base/BasePanel';
import PanelHeader from 'components/base/PanelHeader';
import { Grid } from "@material-ui/core"
import {isMobile} from "react-device-detect";
import {SHOW_HOMEPANEL} from 'lib/constant' 

class BlankPanel extends Component
{
    
    handleGoBack = () => {
        console.log('hi')
        const {HomeActions} = this.props
        HomeActions.changeFirstStatus(SHOW_HOMEPANEL)
    }
    render()
    {

        return (
            <BasePanel mode={0}>
            </BasePanel>
        )
    }
}

export default connect(
    null,
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
    })
)((BlankPanel));