import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { Box, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"

import LivePanelTemplete from '../base/LivePanelTemplete'

const useStyles = makeStyles((theme) => ({
    header: {
        paddingTop: 'px',
        paddingBottom: 'px',
    },
    leftTopButton: {
        margin: 'auto'
    },
    headerLabel: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
        marginTop: '15px',
        marginBottom: '14px',
    },
    searchButton: {
        verticalAlign: 'text-bottom',
        color: '#BBA884'
    },
}))

const BroadcastLivePanel = ({ handleClick, liveStreamList }) => {
    const classes = useStyles();

    return (
        <LivePanelTemplete>
            
            
        </LivePanelTemplete>
    )
}

export default BroadcastLivePanel;