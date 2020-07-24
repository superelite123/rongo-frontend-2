import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Button, Typography} from '@material-ui/core';
import {isMobile} from "react-device-detect";
import SearchIcon from '@material-ui/icons/Search';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const useStyles = makeStyles((theme) => {
    return {
        root: {
            background:'#F5F5F5',
            width: '100%',
            height: '60px',
        },
        childToCenter:{
          margin:'auto'
        },      
        topBar: {
            margin: 0,
            borderTopWidth: '0px',
            borderBottomWidth: '3px',
            borderLeftWidth: '0px',
            borderRightWidth: '0px',
            borderColor: '#BBA884'
        },
        header: {
          paddingTop: 'px',
          paddingBottom: 'px',
        },
        headerLabel: {
          fontFamily: 'Noto Sans JP',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '17px',
          textAlign:'center',
          marginTop: '15px',
          marginBottom: '14px',
        },
        controlButton:{
            color: '#BBA884',
        },
        deleteButton:{
            color:'#D74936'
        }
    }
})

const PanelTemplate = ({ children,title,deleteMode,handleLeftButton,leftButtonType,rightButtonType }) => {
    const classes = useStyles();
    let headerButtonLabel = null
    switch(leftButtonType)
    {
        case 1:
            headerButtonLabel = deleteMode?'削除':'編集'
            break;
        case 2:
            headerButtonLabel = deleteMode?'削除':'編集'
            break;
        default:
            break;
    }
    let leftButton = null
    switch(leftButtonType)
    {
        case 1:
            leftButton = <Button className={deleteMode?classes.deleteButton:classes.controlButton} onClick={handleLeftButton}>
                            {headerButtonLabel}
                        </Button>
        break;
        case 2:
            leftButton = <Button className={deleteMode?classes.deleteButton:classes.controlButton} onClick={handleLeftButton}>
                            <KeyboardBackspaceIcon/>
                        </Button>
        break;
        default:
            leftButton = null
        break;
    }
    let rightButton = null
    switch(rightButtonType)
    {
        case 1:
            rightButton =   <Button className={classes.controlButton}>
                                <SearchIcon className={classes.searchButton} />
                            </Button>
        break;
        default:
            rightButton = null
        break;
    }
    return (
        <Box component="div" className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.header}>
                        <Grid container className={classes.card}>
                        <Grid item xs={2} className={classes.childToCenter}>
                            {leftButton}
                        </Grid>
                        <Grid item xs={8}>
                            <p variant='h5' component="h5" className={classes.headerLabel}>
                                {title}
                            </p>
                        </Grid>
                        <Grid item xs={2} className={classes.childToCenter}>
                            {rightButton}
                        </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <hr className={classes.topBar} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default PanelTemplate