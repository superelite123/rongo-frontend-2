import React from 'react'
import {isMobile} from "react-device-detect"
const LivePlayer = ({ handleClick, liveStreamList }) => {
    const widthValue = isMobile?'100%':'100%'
    const rootStyle = {
        top:0,
        width:widthValue,
        height:'100%',
        background:'black'
    }

    return (
        <div style={rootStyle}>
        </div>
    )
}

export default LivePlayer;