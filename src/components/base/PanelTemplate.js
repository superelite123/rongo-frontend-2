import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {isMobile} from "react-device-detect";
const useStyles = makeStyles((theme) => {
    const widthValue = isMobile?'100%':'80%'
    const heightValue = isMobile?'100%':'790px'
    return {
        root: {
            background:'#F5F5F5',
            width:widthValue,
            padding: 0,
            height:heightValue,
            overflowY: 'scroll',
        },
        childToCenter:{
          margin:'auto'
        }
    }
})
const PanelTemplate = ({ children }) => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.root}>
            <Grid container>
                {children}
            </Grid>
        </Box>
    )
}

export default PanelTemplate