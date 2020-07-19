import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import PanelTemplate from '../base/PanelTemplate'
import { Box, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import BlockButton from '../base/BlockButton'

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
    root: {
        height: '76px',
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
        fontSize: '15px',
        textAlign: 'left',
        margin: 'auto'
    },
    followCountLabel: {
        width: '100%',
        color: '#333333',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
        textAlign: 'left',
        margin: 'auto'
    },
    qtyWrapper:{
        marginLeft:'17px',
        marginRight:'17px',
        display:'flex',
    },
    qtyLabel:{
        fontSize:'13px',
        fontFamily:'Noto Sans JP',
        textAlign:'left',
        paddingTop:'17px',
        paddingBottom:'17px',
        width:'60%',
    },
    qtyNumber:{
        margin: 'auto',
        fontSize:'15px',
        fontFamily:'Roboto',
        textAlign:'right',
        paddingTop:'14px',
        paddingBottom:'14px',
        width:'40%',
    }
}))

const FollowDetailPanel = ({ showFollow, goBack }) => {
    const classes = useStyles();

    let blockButton
    if(showFollow.isBlock == true) {
        blockButton = <BlockButton />
    }

    return (
        <PanelTemplate>
            <Grid xs={12} item>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper variant="outlined" square className={classes.header}>
                            <Grid container className={classes.card}>
                                <Grid item xs={2} className={classes.leftTopButton}>
                                    <Typography variant='h5' component="h5">
                                        <KeyboardBackspaceIcon className={classes.searchButton} onClick={() => goBack()}/>
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <p variant='h5' component="h5" className={classes.headerLabel}>
                                        ユーザー情報
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
                <Paper className={classes.root}>
                    <Box className={classes.thumbnail} component='div'>
                        <img className={classes.thumbnail} src={showFollow.thumbnail} />
                    </Box>
                    <Box className={classes.descriptionWrapper} component='div'>
                        <Grid className={classes.descriptionContent} container>
                            <Grid item xs={7} style={{ display: 'flex', padding: '16px 0' }}>
                                <Grid container>
                                    <Grid item xs={12} style={{ display: 'flex', padding: '0 16px' }}>
                                        <span className={classes.userNameLabel}>{ showFollow.nickname }</span>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', padding: '0 16px' }}>
                                        <span className={classes.followCountLabel}>({showFollow.nTotalFollows})</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5} style={{ margin: 'auto', alignItems: 'left', paddingRight: '16px' }}>
                                {blockButton}
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Grid>
            <Grid style={{ marginTop: '35px' }} container>
                <Grid item xs={12}>
                    <Paper variant="outlined" square>
                        <div className={classes.qtyWrapper} >
                            <Typography className={classes.qtyLabel}>ストアブロック数</Typography>
                            <Typography className={classes.qtyNumber}>{showFollow.nTotalBlocks}</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square>
                        <div className={classes.qtyWrapper} >
                            <Typography className={classes.qtyLabel}>ユーザーブロック数</Typography>
                            <Typography className={classes.qtyNumber}>0</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square>
                        <div className={classes.qtyWrapper} >
                            <Typography className={classes.qtyLabel}>キャンセル数</Typography>
                            <Typography className={classes.qtyNumber}>0</Typography>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </PanelTemplate>
    )
}

export default FollowDetailPanel;