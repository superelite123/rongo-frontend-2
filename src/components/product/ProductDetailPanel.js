import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import BasePanel from 'components/base/BasePanel';
import { Box, Grid} from "@material-ui/core"
import PhotoSlider from '../base/PhotoSlider'
import FavoriteStarIcon from '../base/icons/FavoriteStarIcon'
import LiveButton from '../base/LiveButton'
import { convertCurrencyString } from 'helper/helper'
import PanelHeader from 'components/base/PanelHeader';
import {isMobile} from "react-device-detect";

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
    mainContent: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
    },
    nameContent: {
        width: '100%',
        background: 'white',
        padding: '16px',
        textAlign: 'left',
        border: '1px solid #DEDEDE'
    },
    nameLabel: {
        margin: 'auto 0',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
        color: '#333333'
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
        fontSize: '11px',
        margin: '10px 0'
    },
    remainProductCount: {
        margin: 'auto 0px',
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        paddingTop: '1px'
    },
    starRateIcon: {
        color: '#BBA884',
        fontSize: '15px',
        verticalAlign: 'middle',
        margin: '2px'
    },
    rateCounter: {
        margin: 'auto 2px',
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
        color: '#333333'
    },
    descriptionContent: {
        marginTop: '35px',
        width: '100%',
        background: 'white',
        padding: '16px',
        textAlign: 'left',
        border: '1px solid #DEDEDE'
    },
    descriptionLabel: {
        textAlign: 'left',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        margin: '10px 0'
    },
    priceContent: {
        height: '110px',
        width: '100%',
        background: '#333333',
        bottom: '-110px'
    },
    bottomButton: {
        display: 'flex',
        margin: 'auto'
    },
    priceTitle: {
        textAlign: 'left',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '11px',
        color: 'white'
    },
    priceLabel: {
        textAlign: 'left',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '25px',
        color: 'white'
    }
}))

const ProductDetailPanel = ({ product, title,handleEdit, mode, handleGoBack }) => {
    const classes = useStyles();
    
    var images = []
    var name = ""
    var number = ""
    var numLikes = 0
    var description = ""
    var price = 0
    if (product != null) {
        for (const key in product.portfolios) {
            let image = { url: product.portfolios[key] }
            images.push(image)
        }

        name = product.label
        number = product.number
        numLikes = product.nLikes
        description = product.description
        price = product.price
    }
    return (
        <BasePanel mode={0}>
            <Grid xs={12} item>
                <Grid container>
                    <Grid item xs={12}>
                        <PanelHeader               
                            title="商品登録"
                            leftButtonType={2}
                            rightButtonType={0}
                            handleLeftButton={handleGoBack}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} item>
                <Grid container className={classes.mainContent}>
                    <Grid item xs={12}>
                        <PhotoSlider product={product} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container className={classes.nameContent}>
                            <Grid item xs={12} style={{display: 'flex'}}>
                                <p className={classes.nameLabel}>{name}</p>
                            </Grid>
                            <Grid item xs={12} style={{display: 'flex'}}>
                                <span className={classes.remainProductTitle}>品番：</span>
                                <span className={classes.remainProductCount}>{number}</span>
                            </Grid>
                            <Grid item xs={12} style={{display: 'flex', marginTop: '10px'}}>
                                <Box component='span'style={{display: 'flex'}}><FavoriteStarIcon className={classes.starRateIcon} /></Box>
                                <Box component='span' className={classes.rateCounter}>{numLikes}</Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} item>
                <Grid container className={classes.descriptionContent}>
                    <span className={classes.descriptionLabel}>{description}</span>
                </Grid>
            </Grid>
            <Grid xs={12} item>
                <Grid container className={classes.priceContent} style={{marginTop: '35px'}}>
                    <Grid item xs={ 7 }>
                        <Grid container>
                            <Grid item xs={12} style={{display: 'flex', margin: '20px 16px 2px 16px'}}>
                                <span className={classes.priceTitle}>税 + 送料込</span>
                            </Grid>
                            <Grid item xs={12} style={{display: 'flex', margin: '0px 16px 8px 16px'}}>
                                <span className={classes.priceLabel}>¥{convertCurrencyString(price)}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={ 5 } className={classes.bottomButton}>
                        <LiveButton onClick={handleEdit}><span style={{ textAlign: 'center', margin: 'auto' }}>商品を編集する</span></LiveButton>
                    </Grid>
                </Grid>
            </Grid>
        </BasePanel>
    )
}

export default ProductDetailPanel;