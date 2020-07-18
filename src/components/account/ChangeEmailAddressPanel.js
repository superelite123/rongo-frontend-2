import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import PanelTemplate from '../base/PanelTemplate'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Box, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"
import { TakePhoto, CustomTextField, TagButton, CustomTextArea } from '../typo'
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
    description: {
        color: '#333333',
        fontSize: '12px',
        textAlign: 'center',
        margin: '20px 16px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal'
    },
    bottomBtnWrapper: {
        marginTop: '20px',
        marginBottom: '16px',
        padding: '0 50px'
    },
}))

const ChangeEmailAddressPanel = ({ showFollow }) => {

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
                                        メールアドレス変更
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
                    <Typography className={classes.label}>変更するメールアドレス</Typography>
                </div>
            </Grid>
            <Grid item xs={12}>
                <CustomTextField placeholder={"例）hello@rongoinc.com"} />
            </Grid>
            <Grid item xs={12}>
            <div className={classes.labelPanel}>
                    <Typography className={classes.description}>メールアドレスを変更すると、変更したメールアドレスに確認メールが送信されます。メール内のURLをクリックすると変更完了です。</Typography>
                </div>
            </Grid>
            <Grid xs={12} item className={classes.bottomBtnWrapper}>
                <ConfirmButton >変更する</ConfirmButton>
            </Grid>
        </PanelTemplate>
    )
}

export default ChangeEmailAddressPanel;