
import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { Grid,GridList } from "@material-ui/core"
import TransactionListItem from '../transaction/TransactionListItem'
import { SHOW_TRANSACTIONDETAIL } from 'lib/constant'
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

const TransactionListPanel = ({ handleClick, transactionList }) => {
    const classes = useStyles();

    let transactionListItems = []
    for (const key in transactionList) {
      let transaction = transactionList[key]
      transactionListItems.push(<TransactionListItem handleClick={ handleClick } transaction={ transaction } panelNumber={SHOW_TRANSACTIONDETAIL} panelLocation={3} />)
    }

    return (
        <BasePanel mode={0}>
            <Grid xs={12} item>
                <Grid container>
                    <Grid item xs={12}>
                        <PanelHeader               
                            title="取引管理"
                            leftButtonType={isMobile?2:0}
                            rightButtonType={0}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid xs={12} item>
                <GridList style={{marginTop: '20px'}} className={classes.gridList} cols={transactionListItems.length}>
                    {transactionListItems}
                </GridList>
            </Grid>
        </BasePanel>
    )
}

export default TransactionListPanel
