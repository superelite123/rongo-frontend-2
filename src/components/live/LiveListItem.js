import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Checkbox, Typography, Box, SvgIcon } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '93px',
        width: '100%',
        display: 'flex',
        position: 'relative'
    },
    thumbnail: {
        margin: 'auto 8px',
        width: '70px',
        height: '70px',
        alignContent: 'center',
        position: 'relative'
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
        fontSize: '13px',
        textAlign: 'left',
        margin: 'auto'
    },
    userTagLabel: {
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#a5a5a5',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        textAlign: 'left',
        margin: 'auto'
    },
    dateLabel: {
        color: '#a5a5a5',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        textAlign: 'left',
        margin: 'auto 0'
    },
    eyeBrows: {
        margin: 'auto',
        fontSize: '1em'
    },
    statusLabelActive: {
        color: '#A5A5A5',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        textAlign: 'left',
        margin: 'auto 3px'
    },
    playCountLabel: {
        color: '#333333',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
        textAlign: 'left',
        margin: 'auto 3px'
    }
}))


const LiveListItem = ({ text, link, isSelected, handleClick, panelNumber, panelLocation }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Box className={classes.thumbnail} component='div'>
                <img className={classes.thumbnail} src='/images/2.png' />
            </Box>
            <Box className={classes.descriptionWrapper} component='div'>
                <Grid className={classes.descriptionContent} container>
                    <Grid item xs={9} style={{ display: 'flex', padding: '8px 0px' }}>
                        <Grid container>
                            <Grid item xs={12} style={{ display: 'flex', padding: '0 16px', height: '34px' }}>
                                <span className={classes.userNameLabel}>ユーザー名が入ります</span>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', padding: '0 16px', height: '22px' }}>
                                <span className={classes.userTagLabel}>ファッション</span>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', padding: '0 16px', height: '22px' }}>
                                <span className={classes.dateLabel}>2020/04/23</span>
                                <span style={{ display: 'flex', margin: 'auto 0px auto 16px' }}>
                                    <SvgIcon viewBox={'0 0 16 9'} className={classes.eyeBrows}>
                                        <g fill="#bdbdbd00">
                                            <path d="M1.26172 0.799805C2.29061 3.2545 4.91853 4.99982 7.99799 4.99982C11.0775 4.99982 13.7054 3.2545 14.7343 0.799805" stroke="#A5A5A5" stroke-linecap="round" />
                                            <path d="M2.19257 2.36776L0.534583 3.75898" stroke="#A5A5A5" stroke-linecap="round" />
                                            <path d="M3.52056 3.83616L2.24392 5.53032" stroke="#A5A5A5" stroke-linecap="round" />
                                            <path d="M5.40157 4.83325L4.64135 6.81368" stroke="#A5A5A5" stroke-linecap="round" />
                                            <path d="M7.85949 5.23914V7.36046" stroke="#A5A5A5" stroke-linecap="round" />
                                            <path d="M10.2495 4.81998L10.9401 6.82573" stroke="#A5A5A5" stroke-linecap="round" />
                                            <path d="M12.2431 3.83616L13.5198 5.53032" stroke="#A5A5A5" stroke-linecap="round" />
                                            <path d="M13.8045 2.36804L15.4296 3.7316" stroke="#A5A5A5" stroke-linecap="round" />
                                        </g>
                                    </SvgIcon>
                                </span>
                                <span className={classes.statusLabelActive}>100,000</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ display: 'flex', paddingRight: '16px' }}>
                        <span style={{ display: 'flex', margin: 'auto 0px' }}>
                            <PlayCircleOutlineIcon style={{color: '#BBA884'}}/>
                        </span>
                        <span className={classes.playCountLabel}>100,000</span>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

export default LiveListItem;