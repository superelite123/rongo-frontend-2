import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { Box, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"

import LivePanelTemplete from '../base/LivePanelTemplete'
import LiveButton from 'components/base/LiveButton';
import AddIcon from '@material-ui/icons/Add';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SellProductListPanel from '../live/SellProductListPanel'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end'
    },
    paperView: {
        boxShadow: '0 0 #00000000',
        background: '#00000000',
        borderRadius: '0px',
        display: 'flex'
    },
    liveThumb: {
        border: '2px solid white',
        marginLeft: '16px',
        minWidth: '115px',
        height: '115px',
        background: '#00000000',
        display: 'flex',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
        color: 'white'
    },
    infoWrapper: {
        height: '100%',
        display: 'flex',
        paddingLeft: '10px',
        paddingRight: '16px',
        flexGrow: '1',
    },
    nameField: {
        height: '47px',
        resize: 'inherit',
        boxShadow: '0 0 #00000000',
        border: '0 solid black',
        padding: '10px 15px',
        flexGrow: '1',
        borderRadius: '5px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
    },
    tagField: {
        height: '22px',
        resize: 'inherit',
        boxShadow: '0 0 #00000000',
        border: '0 solid black',
        padding: '10px 15px',
        flexGrow: '1',
        borderRadius: '5px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
    }
}))

const CreateLivePanel = ({ handleClick, liveStreamList }) => {
    const classes = useStyles();

    return (
        <LivePanelTemplete>
            <Box component="div" className={classes.root}>
            <Grid container>
            <Grid xs={12} item style={{ padding: '0 20px' }}>
                    <Paper className={classes.paperView}>
                        <Box component='div' className={classes.liveThumb}>
                            <Grid container style={{ margin: 'auto' }}>
                                <Grid item xs={12}>
                                    <PhotoCameraIcon style={{ margin: 'auto 0' }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <span style={{ margin: 'auto 0' }}>サムネール</span>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box component='div' className={classes.infoWrapper}>
                            <Grid container>
                                <Grid xs={12} item style={{ display: 'flex' }}>
                                    <textarea className={classes.nameField} placeholder={"タイトル"} />
                                </Grid>
                                <Grid xs={12} item style={{ display: 'flex', marginTop: '10px' }}>
                                    <textarea className={classes.tagField} placeholder={"ライブタグ"} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>

                <SellProductListPanel />

                <Grid xs={12} item style={{ padding: '20px' }}>
                    <LiveButton >
                        <div style={{ display: 'flex', margin: 'auto' }}>
                            <AddIcon style={{ margin: 'auto 0' }} />
                            <span style={{ margin: 'auto 0' }}>出品する商品を選択する</span>
                        </div>
                    </LiveButton>
                </Grid>
            </Grid>
            </Box>
            
        </LivePanelTemplete>
    )
}

export default CreateLivePanel;