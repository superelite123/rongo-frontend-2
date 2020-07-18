import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Checkbox, Typography, Box, SvgIcon } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    card: {
        borderTopWidth: '0px'
    },
    cardContent: {
        padding: 0,
    },
    root: {
        backgrodund: 'red',
        height: '70px',
        width: '100%',
        display: 'flex',
        position: 'relative'
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
        fontSize: '12px',
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
    dataLabel: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        color: '#BBA884',
        margin: 'auto 16px'
    }
}))

const NotificationListItem = ({ handleClick, isSelected, notification }) => {
    const classes = useStyles();

    return (
        <CardActionArea component="a" onClick={() => handleClick(notification)}>
            <Card variant="outlined" square className={classes.card} style={{ background: isSelected ? 'rgb(93, 184, 61, 0.2)' : '' }}>
                <CardContent style={{ paddingBottom: 0 }} className={classes.cardContent}>
                    <Grid className={classes.descriptionContent} container>
                        <Grid item xs={11}>
                            <Grid container>
                                <Grid item xs={12} style={{ marginTop: '16px', textAlign: 'left' }}>
                                    <span className={classes.dataLabel}>{ notification.date }</span>
                                </Grid>
                                <Grid item xs={12} style={{ margin: '4px 0 16px 0', padding: '0 16px', textAlign: 'left' }}>
                                    <span className={classes.userNameLabel}>{notification.title}</span>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={1} style={{ display: 'flex' }}>
                            <Box className={classes.arrrowWrapper} component='div'>
                                <ArrowForwardIosIcon className={classes.forwardArrow} />
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

export default NotificationListItem;