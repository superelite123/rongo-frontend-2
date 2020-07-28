import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import BasePanel from 'components/base/BasePanel';
import PanelHeader from 'components/base/PanelHeader';
import { Grid } from "@material-ui/core"
import {isMobile} from "react-device-detect";

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
    descriptionContent: {
        padding: '35px 16px'
    },
    userNameLabel: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '17px',
        textAlign: 'left',
        margin: 'auto'
    },
    dataLabel: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        color: '#BBA884',
        margin: 'auto'
    },
    descriptionLabel: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        textAlign: 'left',
        margin: 'auto'
    },
}))

const NotificationDetailPanel = ({ notification,handleGoBack }) => {
    const classes = useStyles();

    return (
        <BasePanel mode={0}>
            <Grid xs={12} item>
                <PanelHeader               
                    title="ニュース"
                    leftButtonType={isMobile?2:0}
                    rightButtonType={0} 
                    handleGoBack={this.handleGoBack}
                />
            </Grid>
            <Grid xs={12} item>
                <Grid className={classes.descriptionContent} container>
                    <Grid item xs={12} style={{ textAlign: 'left' }}>
                        <span className={classes.userNameLabel}>{notification.title}</span>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '20px', textAlign: 'left' }}>
                        <span className={classes.dataLabel}>{notification.date}</span>
                    </Grid>
                    <Grid item xs={12} style={{ margin: '40px 0px', textAlign: 'left' }}>
                        <span className={classes.descriptionLabel}>{notification.body}</span>
                    </Grid>
                </Grid>
            </Grid>
        </BasePanel>
    )
}

export default NotificationDetailPanel;