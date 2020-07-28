import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { Grid } from "@material-ui/core"
import LiveListItem from '../live/LiveListItem'
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import PanelHeader from 'components/base/PanelHeader';
import BasePanel from 'components/base/BasePanel';
import {isMobile} from "react-device-detect"
const useStyles = makeStyles((theme) => ({
    header: {
        paddingTop: 'px',
        paddingBottom: 'px',
    },
    leftTopButton: {
        margin: 'auto'
    },
    headerLabel: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
        marginTop: '15px',
        marginBottom: '14px',
    },
    searchButton: {
        verticalAlign: 'text-bottom',
        color: '#BBA884'
    },
    topSeperate: {
        margin: 0,
        borderTopWidth: '0px',
        borderBottomWidth: '3px',
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderColor: '#BBA884'
    },
    listContainer: {
        marginTop: '35px'
    }
}))

const LiveListPanel = ({ handleClick, liveStreamList, handleGoBack }) => {
    const classes = useStyles();

    let liveListItems = []
    for (const key in liveStreamList) {
      let live = liveStreamList[key]
      liveListItems.push(<LiveListItem live={ live } handleClick={handleClick} />)
    }

    return (
        <BasePanel mode={0}>
            <PanelHeader 
              title="配信管理"
              leftButtonType={isMobile?2:0}
              rightButtonType={0}
              handleLeftButton={handleGoBack}
            />
            <Grid xs={12} className={ classes.listContainer } item>
                <SwipeableList>
                    {liveListItems}
                </SwipeableList>
            </Grid>

        </BasePanel>
    )
}

export default LiveListPanel;