// @flow
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, Box,} from '@material-ui/core';
import TextTruncate from 'react-text-truncate';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FavoriteStarIcon from '../base/icons/FavoriteStarIcon'
const useStyles = makeStyles((theme) => ({
    root: {
        backgrodund: 'red',
        height: '70px',
        width: '100%',
        display: 'flex',
        position: 'relative',
        borderBottom:'1px solid #e2e2e2'
    },
    thumbnail: {
        width: '70px',
        height: '70px',
        alignContent: 'center',
        position: 'relative'
    },
    childToCenter: {
        verticalAlign: 'middle',
    },
    checkBox: {
        color: '#BBA884'
    },
    descriptionWrapper: {
        width: '100%'
    },
    descriptionContent: {
        padding: '6px 0 0 16px'
    },
    productLabel: {
        width: '100%',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
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
    productNumber: {
        margin: '2px auto',
        color: '#A5A5A5',
        textAlign: 'left'
    },
    productNumberTitle: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
    },
    productNumberContent: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '11px',
    },
    productPrice: {
        color: '#333333',
        fontWeight: '500',
        fontSize: '15px',
        margin: 'auto'
    },
    statusStaged: {
        width: '60px',
        height: '20px',
        background: '#D74936',
        color: 'white',
        borderRadius: '5px',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: '12px',
    },
    rateWrapper: {
        display: 'flex',
        marginBottom: '2px'
    },
    starRateIcon: {
        color: '#BBA884',
        fontSize: '13px',
        verticalAlign: 'middle'
    },
    rateCounter: {
        margin: 'auto 2px',
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '11px',
        color: '#333333'
    },
    centering: {
        margin: 'auto 0 4px 0',
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
    },
    remainProduct: {
        margin: 'auto auto 6px auto',
        textAlign: 'left',
    },
    remainProductTitle: {
        textAlign: 'left',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
    },
    remainProductCount: {
        marginLeft: '2px',
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '11px',
    },
    statusDraft: {
        width: '60px',
        height: '26px',
        background: 'white',
        color: '#BDBDBD',
        borderRadius: '5px',
        textAlign: 'center',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        border: '1px solid #BDBDBD',
        lineHeight: '200%'
    },
    statusStaging: {
        width: '60px',
        height: '26px',
        background: '#D74936',
        color: '#FFFFFF',
        borderRadius: '5px',
        textAlign: 'center',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        border: '1px solid #BDBDBD',
        lineHeight: '200%'
    },
    statusRestaging: {
        width: '60px',
        height: '26px',
        background: '#BDBDBD',
        color: '#FFFFFF',
        borderRadius: '5px',
        textAlign: 'center',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        border: '1px solid #BDBDBD',
        lineHeight: '200%'
    },
    addButton:{
        width: '60px',
        height: '26px',
        color: '#BDBDBD',
        background:'white',
        borderRadius: '5px',
        border: '1px solid #BDBDBD',
    }
}))

const ProductListItem = ({ product,index, handleAddProduct }) => {
    const classes = useStyles();

    let linkArrow =
            <Box className={classes.arrrowWrapper} component='div'>
                <ArrowForwardIosIcon className={classes.forwardArrow} />
            </Box>

    return (
        <Paper square className={classes.root}>
            <Box className={classes.thumbnail} component='div'>
                <img className={classes.thumbnail} src={product.thumbnail} alt="" />
            </Box>
            <Box className={classes.descriptionWrapper} component='div'>
                <Grid className={classes.descriptionContent} container>
                    <Grid item xs={12} style={{ textAlign: 'left' }}>
                        <TextTruncate
                            className={classes.productLabel}
                            line={1}
                            element="div"
                            truncateText="…"
                            text={product.label}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={9}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.productNumber}>
                                        <span className={classes.productNumberTitle}>品番：</span>
                                        <span className={classes.productNumberContent}>{product.number}</span>
                                    </Grid>
                                    <Grid item xs={7} md={4} sm={4} className={classes.centering}>
                                        <span className={classes.productPrice}>
                                            ¥{product.price}
                                        </span>
                                    </Grid>
                                    <Grid item xs={2} md={3} sm={4} className={classes.remainProduct}>
                                        <span className={classes.remainProductTitle}>在庫</span>
                                        <span className={classes.remainProductCount}>{product.quantity}</span>
                                    </Grid>

                                    <Grid className={classes.rateWrapper} item xs={2}>
                                        <Box component='span'><FavoriteStarIcon className={classes.starRateIcon} /></Box>
                                        <Box component='span' className={classes.rateCounter}>{product.numLikes}</Box>
                                    </Grid>
                                    <Grid item xs={1} md={2} sm={2}></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} style={{ marginTop: '10px' }}>
                                <Button onClick={() => handleAddProduct(index)} className={classes.addButton}>追加</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            {linkArrow}
        </Paper>
    );
};
export default ProductListItem;
