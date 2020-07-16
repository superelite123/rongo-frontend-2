import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Checkbox, Typography, Box, } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { SHOW_SELLHISTORYDETAILPANEL } from 'lib/constant'
import { convertDateStringToDay, convertCurrencyString } from 'helper/helper'

const useStyles = makeStyles((theme) => ({
    card: {
        borderTopWidth: '0px'
    },
    cardContent: {
        padding: 0,
    },
    root: {
        height: '50px',
        width: '100%',
        display: 'flex',
        position: 'relative',
    },
    monthLabel: {
        width: '100%',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        textAlign: 'left',
        margin: 'auto'
    },
    priceLabel: {
        width: '100%',
        color: '#333333',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
        textAlign: 'right',
        margin: 'auto'
    },
    arrrowWrapper: {
        width: '16px',
        margin: 'auto',
        color: '#BDBDBD'
    },
    forwardArrow: {
        verticalAlign: 'text-top',
        fontSize: '1em',
        color: '#BDBDBD'
    },
}))

const SellHistoryListSubItem = ({ sellHistory, title, handleClick }) => {

    const classes = useStyles();

    return (
        <CardActionArea component="a" onClick={() => handleClick(SHOW_SELLHISTORYDETAILPANEL, 3)}>
            <Card variant="outlined" square className={classes.card} style={{ background: '#EBE7DE' }}>
                <CardContent style={{ paddingBottom: 0 }} className={classes.cardContent}>
                    <Box className={classes.root} component='div'>
                        <Grid style={{ height: 'flex', paddingLeft: '16px' }} container>
                            <Grid item xs={7} style={{ display: 'flex' }}>
                                <span className={classes.monthLabel}>{ convertDateStringToDay(title, "-") }</span>
                            </Grid>
                            <Grid item xs={4} style={{ margin: 'auto', display: 'flex' }}>
                                <span className={classes.priceLabel}>¥{convertCurrencyString(sellHistory.price)}</span>
                            </Grid>
                            <Grid item xs={1} style={{ display: 'flex' }}>
                                <Box className={classes.arrrowWrapper} component='div'>
                                    <ArrowForwardIosIcon className={classes.forwardArrow} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

export default SellHistoryListSubItem