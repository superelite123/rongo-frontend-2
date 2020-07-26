import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { Grid,  } from "@material-ui/core"
import PanelHeader from 'components/base/PanelHeader';
import BasePanel from 'components/base/BasePanel';
import {isMobile} from "react-device-detect";
import { convertDateStringToDay } from 'helper/helper'
import SellDetailItem from './SellDetailItem'
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

const SellHistoryDetailPanel = ({ liveData,handleGoBack, handleItemClick }) => {
    const classes = useStyles();
    const {date,lives} = liveData
    return (
        <BasePanel mode={0}>
            <PanelHeader 
              title={convertDateStringToDay(date, "-")}
              leftButtonType={isMobile?2:0}
              rightButtonType={1}
              handleLeftButton={handleGoBack}
            />
            <Grid container>
                {
                    lives.map((live,index) => 
                        <Grid item xs={12}>
                            <SellDetailItem key={index} index={index} live={live} handleClick={handleItemClick} />
                        </Grid>
                    )
                }
            </Grid>
        </BasePanel>
    )
}

export default SellHistoryDetailPanel