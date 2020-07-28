import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { Grid } from "@material-ui/core"
import NotificationListItem from '../notification/NotificationListItem'
import BasePanel from 'components/base/BasePanel';
import PanelHeader from 'components/base/PanelHeader';
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
}))

const NotificationListPanel = ({ handleClick, notificationList }) => {

    let notificationListItems = []
    for (const key in notificationList) {
      let notification = notificationList[key]
      notificationListItems.push(<NotificationListItem notification={ notification } handleClick= { handleClick } />)
    }

    return (
        <BasePanel mode={0}>
            <Grid xs={12} item>
                <PanelHeader               
                    title="ニュース"
                    leftButtonType={0}
                    rightButtonType={0}
                />
            </Grid>
            {notificationListItems}
        </BasePanel>
    )
}

export default NotificationListPanel;