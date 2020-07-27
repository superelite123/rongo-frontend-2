import React, { useState, Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sellActions from 'redux/modules/sellHistory/sellHistory';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Checkbox, Typography, Box, } from '@material-ui/core';
import SellHistoryListSubItem from '../sellHistory/SellHistoryListSubItem'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { convertDateStringToMonth, convertCurrencyString } from 'helper/helper'

const useStyles = (theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        position: 'relative'
    },
    mainItem: {
        height: '50px',
        width: '100%',
        display: 'flex',
        background: 'white',
        padding: '0 0 0 16px'
    },
    subItem: {
        height: '50px',
        width: '100%',
        display: 'flex'
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
        fontSize: '15px',
        textAlign: 'right',
        margin: 'auto'
    },
    arrrowWrapper: {
        width: '16px',
        margin: 'auto 16px auto 0',
        color: '#DEDCD4'
    },
    forwardArrow: {
        verticalAlign: 'text-top',
        fontSize: '2em',
        color: '#BDBDBD'
    },
})

class SellHistoryListItem extends Component {

    render() {
        const { classes, SellActions, isExpand, sellHistoryByMonth, title, handleClick } = this.props;
        const totalPrice = sellHistoryByMonth["totalPrice"]
        
        let historyListItems = []
        let cnt = 0
        if (isExpand) {
            
            for (const key in sellHistoryByMonth) {
                if (key != "totalPrice") {
                    let sellHistory = sellHistoryByMonth[key]
                    let item =
                        <Grid item xs={12} className={classes.subItem}>
                            <SellHistoryListSubItem key={cnt} handleClick={handleClick} sellHistory={sellHistory} title={key} />
                        </Grid>
                    historyListItems.push(item)
                    
                    cnt ++
                }
            }
        }

        return (
            <Box className={classes.root} component='div'>
                <Grid style={{ height: 'flex' }} container>
                    <Grid item xs={12} className={classes.mainItem} onClick={() => { SellActions.expandDateHistory(!isExpand) }}>
                        <Grid style={{ height: 'flex' }} container>
                            <Grid item xs={6} style={{ display: 'flex' }}>
                                <span className={classes.monthLabel}>{convertDateStringToMonth(title, "-")}</span>
                            </Grid>
                            <Grid item xs={4} style={{ margin: 'auto', display: 'flex' }}>
                                <span className={classes.priceLabel}>¥{convertCurrencyString(totalPrice)}</span>
                            </Grid>
                            <Grid item xs={2} style={{ display: 'flex' }}>
                                <Box className={classes.arrrowWrapper} component='div'>
                                    <ArrowDropDownIcon className={classes.forwardArrow} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    {historyListItems}
                </Grid>
            </Box>
        )
    }
}

export default connect(
    (state) => ({
        isExpand: state.sellHistory.get('isExpand')
    }),
    (dispatch) => ({
        SellActions: bindActionCreators(sellActions, dispatch),
    })
)(withStyles(useStyles)(SellHistoryListItem));