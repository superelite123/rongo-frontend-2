import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Checkbox, Typography, Box, } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextTruncate from 'react-text-truncate';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles((theme) => ({
    card: {
        borderTopWidth: '0px',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
    },
    cardContent: {
        padding: 0,
    },
    root: {
        height: '70px',
        width: '100%',
        display: 'flex',
        position: 'relative'
    },
    thumbnail: {
        margin: 'auto 8px',
        width: '50px',
        height: '50px',
        alignContent: 'center',
        position: 'relative'
    },
    descriptionWrapper: {
        width: '100%',
        display: 'flex'
    },
    descriptionContent: {
        padding: 0
    },
    userNameLabel: {
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
        textAlign: 'left',
        margin: 'auto'
    },
    arrrowWrapper: {
        width: '16px',
        margin: 'auto 16px auto 0',
        color: '#DEDCD4'
    },
    forwardArrow: {
        verticalAlign: 'text-top',
        fontSize: '1em',
        color: '#DEDCD4'
    },
    statusLabelActive: {
        width: '100%',
        color: '#BBA884',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        textAlign: 'left',
        margin: '1px 3px'
    },
    statusLabelFinish: {
        width: '100%',
        color: '#BDBDBD',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        textAlign: 'left',
        margin: '1px 3px'
    },
    scheduleActive: {
        verticalAlign: 'text-bottom',
        color: '#BBA884',
        fontSize: '1em',
    },
    scheduleFinish: {
        verticalAlign: 'text-bottom',
        color: '#BDBDBD',
        fontSize: '1em',
    }
}))

const TransactionListItem = ({ transaction, isSelected, handleClick, panelNumber, panelLocation }) => {
    const classes = useStyles();

    let statusView
    if (transaction.status == 0) {
        statusView =
            <Grid item xs={12} style={{ display: 'flex', padding: '0 16px' }}>
                <span>
                    <ScheduleIcon className={classes.scheduleActive} />
                </span>
                <span className={classes.statusLabelActive}>発送準備</span>
            </Grid>
    } else {
        statusView =
            <Grid item xs={12} style={{ display: 'flex', padding: '0 16px' }}>
                <span>
                    <ThumbUpAltIcon className={classes.scheduleFinish} />
                </span>
                <span className={classes.statusLabelFinish}>取引完了</span>
            </Grid>
    }

    return (
        <CardActionArea component="a" onClick={() => handleClick(panelNumber, panelLocation, transaction)}>
            <Card variant="outlined" square className={classes.card} style={{ background: isSelected ? 'rgb(93, 184, 61, 0.2)' : '' }}>
                <CardContent style={{ paddingBottom: 0 }} className={classes.cardContent}>
                    <Paper className={classes.root}>
                        <Box className={classes.thumbnail} component='div'>
                            <img className={classes.thumbnail} src={transaction.product.thumbnail} />
                        </Box>
                        <Box className={classes.descriptionWrapper} component='div'>
                            <Grid className={classes.descriptionContent} container>
                                <Grid item xs={11} style={{ display: 'flex', padding: '10px 0px 8px 0px' }}>
                                    <Grid container>
                                        <Grid item xs={12} style={{ display: 'flex', padding: '0 16px' }}>
                                            <span className={classes.userNameLabel}>{transaction.product.title}</span>
                                        </Grid>
                                        {statusView}
                                    </Grid>
                                </Grid>
                                <Grid item xs={1} style={{ display: 'flex' }}>
                                    <Box className={classes.arrrowWrapper} component='div'>
                                        <ArrowForwardIosIcon className={classes.forwardArrow} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

export default TransactionListItem;