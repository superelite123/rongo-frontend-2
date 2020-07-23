import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Button, Typography} from '@material-ui/core';
import {isMobile} from "react-device-detect";
import SearchIcon from '@material-ui/icons/Search';
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

const PanelTemplate = ({ children,title,leftButton,deleteMode, headerButtonLabel,toggleDeleteMode }) => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.header}>
                        <Grid container className={classes.card}>
                        <Grid item xs={2} className={classes.childToCenter}>
                            <Button className={deleteMode?classes.deleteButton:classes.controlButton} onClick={toggleDeleteMode}>
                                {headerButtonLabel}
                            </Button>
                        </Grid>
                        <Grid item xs={8}>
                            <p variant='h5' component="h5" className={classes.headerLabel}>
                                {title}
                            </p>
                        </Grid>
                        <Grid item xs={2} className={classes.childToCenter}>
                            <Button className={classes.controlButton}>
                                <SearchIcon className={classes.searchButton} />
                            </Button>
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