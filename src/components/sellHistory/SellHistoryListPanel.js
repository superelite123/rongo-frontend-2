import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { Grid, GridList } from "@material-ui/core"
import SellHistoryListItem from '../sellHistory/SellHistoryListItem'
import PanelHeader from 'components/base/PanelHeader';
import BasePanel from 'components/base/BasePanel';
import {isMobile} from "react-device-detect";

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
}))

const SellHistoryListPanel = ({ handleClick, sellHistoryList,handleGoBack }) => {
    const classes = useStyles();

    let historyListItems = []
    let cnt = 1
    for (const key in sellHistoryList) {
      let sellHistory = sellHistoryList[key]
      historyListItems.push(<SellHistoryListItem key={cnt} handleClick={ handleClick } title={ key } sellHistoryByMonth={ sellHistory } />)
      cnt ++
    }
    
    return (
        <BasePanel mode={0}>
            <PanelHeader 
              title="売上管理"
              leftButtonType={isMobile?2:0}
              rightButtonType={1}
              handleLeftButton={handleGoBack}
            />
            <Grid xs={12} item>
                <GridList style={{marginTop: '20px'}} className={classes.gridList} cols={ historyListItems.length }>
                    { historyListItems }
                </GridList>
            </Grid>
        </BasePanel>
    )
}

export default SellHistoryListPanel