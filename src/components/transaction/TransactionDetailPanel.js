import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import PanelTemplate from '../base/PanelTemplate'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Box, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"
import ScheduleIcon from '@material-ui/icons/Schedule';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ConfirmButton from 'components/base/ConfirmButton';

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
        margin: 'auto',
        display: 'flex'
    },
    scheduleActive: {
        verticalAlign: 'text-bottom',
        color: '#ffffff',
        fontSize: '1.75em',
    },
    statusLabelActive: {
        width: '100%',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
        textAlign: 'left',
        margin: 'auto 5px'
    },
    labelPanel: {
        height: '70px',
        position: 'relative'
    },
    label: {
        color: '#A5A5A5',
        fontSize: '13px',
        position: 'absolute',
        bottom: '12px',
        textAlign: 'center',
        marginLeft: '17px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal'
    },
    infoContainer: {
        margin: '20px 0',
        display: 'flex',
        boxShadow: '0 0 #00000000'
    },
    thumbnail: {
        margin: 'auto 8px',
        width: '70px',
        height: '70px',
        alignContent: 'center',
        position: 'relative'
    },
    descriptionContent: {
        padding: 0,
        height: '100%'
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
    productNoLabel: {
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        textAlign: 'left',
    },
    noLabel: {
        color: '#333333',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        textAlign: 'left',
        margin: 'auto 3px'
    },
    descriptionWrapper: {
        width: '86px',
        display: 'flex',
        marginLeft: '16px',
        textAlign: 'left',
    },
    detailContainer: {
        margin: '10px 0',
        display: 'flex',
        boxShadow: '0 0 #00000000'
    },
    detailTitle: {
        color: '#BBA884',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        textAlign: 'left',
    },
    noDetailLabel: {
        color: '#333333',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
        textAlign: 'left',
        margin: 'auto 3px'
    },
    bottomBtnWrapper: {
        marginTop: '20px',
        marginBottom: '16px',
        padding: '0 50px'
    }
}))

const TransactionDetailPanel = ({ handleClick }) => {

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
                                        取引情報
                                    </p>
                                </Grid>
                                <Grid item xs={2} className={classes.leftTopButton}>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid xs={12} style={{ display: 'flex', height: '70px', background: '#BBA884' }} item>
                        <Box className={classes.topSeperate} component='div'>
                            <span>
                                <ScheduleIcon className={classes.scheduleActive} />
                            </span>
                            <span className={classes.statusLabelActive}>発送準備をしてください</span>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.labelPanel}>
                    <Typography className={classes.label}>商品名</Typography>
                </div>
            </Grid>
            <Grid item xs={12} style={{ background: '#ffffff' }}>
                <Grid container>
                    <Grid item xs={12} >
                        <Paper style={{ display: 'flex' }} className={classes.infoContainer}>
                            <Box className={classes.thumbnail} component='div'>
                                <img className={classes.thumbnail} src='/images/2.png' />
                            </Box>
                            <Box component='div'>
                                <Grid className={classes.descriptionContent} container>
                                    <Grid item xs={12} style={{ display: 'flex', padding: '0 16px', margin: 'auto', height: '65%' }}>
                                        <span className={classes.userNameLabel}>ユーザー名が入ります sdfas asdfa sdf asda asdfa sdfa sdfa sdf</span>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', padding: '0 16px', height: '20px' }}>
                                        <span className={classes.productNoLabel}>品番：</span>
                                        <span className={classes.noLabel}>12222</span>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ display: 'flex' }} className={classes.detailContainer}>
                            <Box className={classes.descriptionWrapper} component='div'>
                                <span className={classes.detailTitle}>売上総額</span>
                            </Box>
                            <Box component='div'>
                                <span className={classes.noLabel}>¥100,000</span>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ display: 'flex' }} className={classes.detailContainer}>
                            <Box className={classes.descriptionWrapper} component='div'>
                                <span className={classes.detailTitle}>購入日時</span>
                            </Box>
                            <Box component='div'>
                                <span className={classes.noLabel}>2020/04/20  15:50</span>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ display: 'flex' }} className={classes.detailContainer}>
                            <Box className={classes.descriptionWrapper} component='div'>
                                <span className={classes.detailTitle}>取引ID</span>
                            </Box>
                            <Box component='div'>
                                <span className={classes.noLabel}>r0000000000</span>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ display: 'flex' }} className={classes.detailContainer}>
                            <Box className={classes.descriptionWrapper} component='div'>
                                <span className={classes.detailTitle}>購入者</span>
                            </Box>
                            <Box component='div'>
                                <span className={classes.userNameLabel}>レイン</span>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ display: 'flex' }} className={classes.detailContainer}>
                            <Box className={classes.descriptionWrapper} component='div'>
                                <span className={classes.detailTitle}>お届け先</span>
                            </Box>
                            <Box component='div' style={{textAlign: 'left', maxWidth: '120px'}}>
                                <span className={classes.userNameLabel}>
                                    〒107-0062
                                    東京都港区南青山7-13-28
                                    CAPRICE201
                                    北本 浩一郎
                                </span>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} item className={classes.bottomBtnWrapper}>
                <ConfirmButton >取引完了する</ConfirmButton>
            </Grid>
        </PanelTemplate>
    )
}

export default TransactionDetailPanel