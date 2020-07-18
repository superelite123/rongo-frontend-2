import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import PanelTemplate from '../base/PanelTemplate'
import { Box, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles((theme) => ({
    header: {
        paddingTop: 'px',
        paddingBottom: 'px',
    },
    leftTopButton: {
        margin: '10px auto 6px auto'
    },
    searchButton: {
        verticalAlign: 'text-bottom',
        color: '#BBA884',
        fontSize: '1.5em'
    },
    headerLabel: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
        marginTop: '15px',
        marginBottom: '14px',
    },
    topSeperate: {
        margin: 0,
        borderTopWidth: '0px',
        borderBottomWidth: '3px',
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderColor: '#BBA884'
    },
    descriptionContent: {
        padding: '35px 16px'
    },
    userNameLabel: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '17px',
        textAlign: 'left',
        margin: 'auto'
    },
    dataLabel: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        color: '#BBA884',
        margin: 'auto'
    },
    descriptionLabel: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        textAlign: 'left',
        margin: 'auto'
    },
}))

const NotificationDetailPanel = ({ notification }) => {
    const classes = useStyles();

    return (
        <PanelTemplate>
            <Grid xs={12} item>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper variant="outlined" square className={classes.header}>
                            <Grid container className={classes.card}>
                                <Grid item xs={2} className={classes.leftTopButton}>
                                    <Typography variant='h5' component="h5">
                                        <KeyboardBackspaceIcon className={classes.searchButton} />
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <p variant='h5' component="h5" className={classes.headerLabel}>
                                        ニュース
                                    </p>
                                </Grid>
                                <Grid item xs={2} className={classes.leftTopButton}>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid xs={12} item>
                        <hr className={classes.topSeperate} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} item>
                <Grid className={classes.descriptionContent} container>
                    <Grid item xs={12} style={{ textAlign: 'left' }}>
                        <span className={classes.userNameLabel}>{notification.title}</span>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '20px', textAlign: 'left' }}>
                        <span className={classes.dataLabel}>{notification.date}</span>
                    </Grid>
                    <Grid item xs={12} style={{ margin: '40px 0px', textAlign: 'left' }}>
                        <span className={classes.descriptionLabel}>{notification.body}</span>
                    </Grid>
                </Grid>
            </Grid>
        </PanelTemplate>
    )
}

export default NotificationDetailPanel;