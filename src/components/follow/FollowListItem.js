import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Checkbox, Typography, Box, } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import BlockButton from '../base/BlockButton'

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
    thumbnail: {
        margin: 'auto 8px',
        width: '50px',
        height: '50px',
        alignContent: 'center',
        position: 'relative',
        borderRadius: '25px'
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
}))

const FollowListItem = ({ follow, isSelected, handleClick, panelNumber, panelLocation }) => {
    const classes = useStyles();

    let blockButton
    if(follow.isBlock == true) {
        blockButton = <BlockButton />
    }

    return (
        <CardActionArea component="a" onClick={() => handleClick(panelNumber, panelLocation, follow)}>
            <Card variant="outlined" square className={classes.card} style={{ background: isSelected ? 'rgb(93, 184, 61, 0.2)' : '' }}>
                <CardContent style={{ paddingBottom: 0 }} className={classes.cardContent}>
                    <Paper className={classes.root}>
                        <Box className={classes.thumbnail} component='div'>
                            <img className={classes.thumbnail} src={follow.thumbnail} />
                        </Box>
                        <Box className={classes.descriptionWrapper} component='div'>
                            <Grid className={classes.descriptionContent} container>
                                <Grid item xs={7} style={{ display: 'flex', padding: '0 16px' }}>
                                    <span className={classes.userNameLabel}>{follow.nickname}</span>
                                </Grid>
                                <Grid item xs={4} style={{ margin: 'auto', alignItems: 'left'}}>
                                    {blockButton}
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

export default FollowListItem;