import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { Box,IconButton, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
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
    root:{
        width:'100%',
        justifyContent:'right'
    },
    quitButtonWrapper:{
        display:'flex',
    },
    quitTimeWrapper:{

    },
    quitButton:{
        borderRadius:'12px',
        border:'1px solid #333333',
        fontSize:'11px'
    }
}))

const LiveChatPanel = ({ handleClick, liveStreamList }) => {
    const classes = useStyles();

    return (
        <LivePanelTemplete mode={0}>
            <div className={classes.root}>
                <div className={classes.quitButtonWrapper}>
                    <IconButton color="primary" onClick={handleClick} aria-label="upload picture" component="span">
                        <CloseIcon />
                    </IconButton>
                    
                </div>
            </div>
        </LivePanelTemplete>
    )
}

export default LiveChatPanel;