import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import PanelTemplate from '../base/PanelTemplate'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Box, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"
import ConfirmButton from 'components/base/ConfirmButton';
import { CustomTextField } from '../typo'

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
    labelPanel: {
        height: '70px',
        position: 'relative'
    },
    label: {
        color: '#A5A5A5',
        fontSize: '12px',
        position: 'absolute',
        bottom: '12px',
        textAlign: 'center',
        marginLeft: '17px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal'
    },
    bottomBtnWrapper: {
        marginTop: '34px',
        marginBottom: '16px',
        padding: '0 50px'
    },
}))


const ChangePasswordPanel = ({ showFollow }) => {

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
                                        パスワード変更
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
            <Grid item xs={12}>
                <div className={classes.labelPanel}>
                    <Typography className={classes.label}>現在のパスワード</Typography>
                </div>
            </Grid>
            <Grid item xs={12}>
                <CustomTextField style={{fontSize: '13px'}} placeholder={"入力してください"} />
            </Grid>
            <Grid item xs={12}>
                <div className={classes.labelPanel}>
                    <Typography className={classes.label}>新しいパスワード</Typography>
                </div>
            </Grid>
            <Grid item xs={12}>
                <CustomTextField style={{fontSize: '13px'}} placeholder={"半角英数字で8文字以上"} />
            </Grid>
            <Grid xs={12} item className={classes.bottomBtnWrapper}>
                <ConfirmButton >変更する</ConfirmButton>
            </Grid>
        </PanelTemplate>
    )
}

export default ChangePasswordPanel;