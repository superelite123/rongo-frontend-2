// @flow
import React,{ useState } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Grid, Paper, CardMedia, Checkbox, Typography,
        Box, 
} from '@material-ui/core';
import TextTruncate from 'react-text-truncate';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteStarIcon from '../base/icons/FavoriteStarIcon'
import SoldMark from '../typo/SoldMark'
const useStyles = makeStyles((theme) => ({
    root:{
        backgrodund:'red',
        height:'70px',
        width:'100%',
        display:'flex',
        position:'relative'
    },
    thumbnail:{
        width:'70px',
        height:'70px',
        alignContent:'center',
        position:'relative'
    },
    childToCenter:{
        verticalAlign:'middle',
    },
    checkBox: {
        color:'#BBA884'
    },
    descriptionWrapper: {
        width:'100%'
    },
    descriptionContent: {
        padding: '6px 0 0 16px'
    },
    productLabel: {
        width:'100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color:'#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
    },
    arrrowWrapper: {
        width:'16px',
        margin: 'auto 16px auto 0',
        color: '#DEDCD4'
    },
    forwardArrow: {
        verticalAlign: 'text-top',
        fontSize: '1em',
        color: '#DEDCD4'
    },
    productNumber:{
        margin: '2px auto',
        color:'#A5A5A5',
        textAlign:'left'
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
    productPrice:{
        color:'#333333',
        fontWeight: '500',
        fontSize: '15px',
        margin:'auto'
    },
    statusStaged:{
        width:'60px',
        height:'20px',
        background:'#D74936',
        color:'white',
        borderRadius: '5px',
        textAlign:'center',
        fontWeight: '500',
        fontSize:'12px',
    },
    rateWrapper:{
        display:'flex',
        marginBottom: '2px'
    },
    starRateIcon:{
        color:'#BBA884',
        fontSize:'13px',
        verticalAlign: 'middle'
    },
    rateCounter:{
        margin:'auto 2px',
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '11px',
        color:'#333333'
    },
    centering:{
        margin:'auto 0 4px auto',
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
    },
    remainProduct:{
        margin:'auto auto 6px auto',
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
    statusDraft:{
        width:'60px',
        height:'26px',
        background:'white',
        color:'#BDBDBD',
        borderRadius: '5px',
        textAlign:'center',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        border: '1px solid #BDBDBD',
        lineHeight: '200%'
    },

}))

const handleCheck = (id) => {
    console.log(id)
}
const ProductListItem = ({ text, link,isBottomBorder,number }) => {
    const classes = useStyles();
    const [deleteMode, setDeleteMode] = useState(0);
    let checkbox,linkArrow
    if (deleteMode == 1) {
        checkbox = 
        <Box style={{webkitWritingMode:'vertical-rl'}} className={classes.checkBox} component='div'>
            <Checkbox />
        </Box>
        linkArrow = null
    }
    else{
        
        linkArrow = 
        <Box className={classes.arrrowWrapper} component='div'>
                <ArrowForwardIosIcon className={classes.forwardArrow}/>
        </Box>
    }
    checkbox = 
        <Box style={{webkitWritingMode:'vertical-rl'}} className={classes.checkBox} component='div'>
            <Checkbox className={classes.checkBox} />
        </Box>
    return (
        <Paper className={classes.root}>
            {checkbox}
            <Box className={classes.thumbnail} component='div'>
                <img className={classes.thumbnail} src='/images/2.png' />
                <SoldMark />
            </Box>
            <Box className={classes.descriptionWrapper} component='div'>
                <Grid className={classes.descriptionContent} container>
                    <Grid item xs={12} style={{textAlign:'left'}}>
                        <TextTruncate
                            className={classes.productLabel}
                            line={1} 
                            element="span"
                            truncateText="…"
                            text="商品名が入りますここに商品名が入りますります品名が入りますりま品名が入りますりま品名が入りますりま品名が入りますりま"
                        />
                    </Grid>
                    <Grid item xs='12'>
                        <Grid container>
                            <Grid item xs={9}>
                                <Grid container>
                                    <Grid item xs={12} className={classes.productNumber}>
                                        <span className={classes.productNumberTitle}>品番：</span>
                                        <span className={classes.productNumberContent}>0000</span>
                                    </Grid>
                                    <Grid item xs={5} md={4} sm={4} className={classes.centering}>
                                        <span className={classes.productPrice}>
                                            ¥10,000
                                        </span>
                                    </Grid>
                                    <Grid item xs={3} md={3} sm={4} className={classes.remainProduct}>
                                        <span className={classes.remainProductTitle}>在庫</span>
                                        <span className={classes.remainProductCount}>10</span>
                                    </Grid>
                                    
                                    <Grid className={classes.rateWrapper} item xs={3}>
                                        <Box component='span'><FavoriteStarIcon className={classes.starRateIcon} /></Box>
                                        <Box component='span' className={classes.rateCounter}>10000</Box>
                                    </Grid>
                                    <Grid item xs={1} md={2} sm={2}></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} style={{marginTop: '10px'}}>
                                <Box className={classes.statusDraft}>
                                    出品中
                                </Box>
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
