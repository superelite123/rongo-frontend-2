import React from 'react'
import {isMobile} from "react-device-detect"
import LivePanelTemplete from '../base/LivePanelTemplete'

const LiveStandByPanel = () => {
    const widthValue = isMobile?'100%':'100%'
    const rootStyle = {
        top:0,
        width:widthValue,
        height:'100%',
        background:'#DEDCD4'
    }

    return (
        <LivePanelTemplete mode={0}>
        </LivePanelTemplete>
    )
}

export default LiveStandByPanel;