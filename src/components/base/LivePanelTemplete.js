import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {isMobile} from "react-device-detect";

const useStyles = makeStyles((theme) => {
    const widthValue = isMobile?'100%':'100%'
    const heightValue = isMobile?'100%':'100%'
    return {
        root: {
            background:'#F5F5F5',
            width: widthValue,
            padding: 0,
            height: heightValue
        },
        childToCenter:{
          margin:'auto'
        }
    }
})
const LivePanelTemplate = ({ children }) => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.root}>
            {children}
        </Box>
    )
}

export default LivePanelTemplate