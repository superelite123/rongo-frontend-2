import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import PanelTemplate from '../base/PanelTemplate'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Box, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"
import NotificationListItem from '../notification/NotificationListItem'

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
}))

const NotificationListPanel = ({ handleClick, notificationList }) => {

    const classes = useStyles();

    let notificationListItems = []
    for (const key in notificationList) {
      let notification = notificationList[key]
      notificationListItems.push(<NotificationListItem notification={ notification } handleClick= { handleClick } />)
    }

    return (
        <PanelTemplate>
            <Grid xs={12} item>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper variant="outlined" square className={classes.header}>
                            <Grid container className={classes.card}>
                                <Grid item xs={2} className={classes.leftTopButton}>
                                    
                                </Grid>
                                <Grid item xs={8}>
                                    <p variant='h5' component="h5" className={classes.headerLabel}>
                                        ニュース
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
            {notificationListItems}
        </PanelTemplate>
    )
}

export default NotificationListPanel;