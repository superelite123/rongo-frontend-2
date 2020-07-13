import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles'
import { Box, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"
import { shadow } from 'lib/styleUtil';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#D74936',
        width: '90px',
        height: '26px'
    },
    title: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '11px',
        color: '#FFFFFF',
        paddingBottom: '2px'
    },
    clearIcon: {
        fontSize: '1.2em',
        color: '#ffffff',
        verticalAlign: 'sub'
    }
}))

const BlockButton = ({ status, onClick }) => {
    const classes = useStyles();

    return (
        <Button className={classes.root} onClick={() => onClick()}>
            <span>
                <ClearIcon className={classes.clearIcon} />
            </span>
            <span className={classes.title}>ブロック中</span>
        </Button>
    )
}

export default BlockButton;