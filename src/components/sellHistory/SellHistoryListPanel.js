import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import SectionHeader from '../typo/SectionHeader'
import PanelTemplate from '../base/PanelTemplate'
import { Box, Button, Grid, Typography, Paper, TextField, GridList } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import SellHistoryListItem from '../sellHistory/SellHistoryListItem'

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

const SellHistoryListPanel = ({ handleClick, sellHistoryList }) => {
    const classes = useStyles();

    console.log(sellHistoryList)

    let historyListItems = []
    for (const key in sellHistoryList) {
      let sellHistory = sellHistoryList[key]
      historyListItems.push(<SellHistoryListItem handleClick={ handleClick } title={ key } sellHistoryByMonth={ sellHistory } />)
    }

    return (
        <PanelTemplate>
            <Grid xs={12} item>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper variant="outlined" square className={classes.header}>
                            <Grid container className={classes.card}>
                                <Grid item xs={2} className={classes.leftTopButton}>
                                    <Button style={{ color: '#BBA884', paddingBottom: '3px' }}>
                                        削除
                                    </Button>
                                </Grid>
                                <Grid item xs={8}>
                                    <p variant='h5' component="h5" className={classes.headerLabel}>
                                        売上管理
                                    </p>
                                </Grid>
                                <Grid item xs={2} className={classes.leftTopButton}>
                                    <Typography variant='h5' component="h5">
                                        <SearchIcon className={classes.searchButton} />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid xs={12} item>
                        <hr className={classes.topSeperate} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} item>
                <GridList style={{marginTop: '20px'}} className={classes.gridList} cols={ historyListItems.length }>
                    { historyListItems }
                </GridList>
            </Grid>
        </PanelTemplate>
    )
}

export default SellHistoryListPanel