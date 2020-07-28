import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import BasePanel from 'components/base/BasePanel';
import FollowListItem from '../follow/FollowListItem'
import { Grid, GridList } from "@material-ui/core"
import { SHOW_FOLLOWPANEL } from 'lib/constant'
import PanelHeader from 'components/base/PanelHeader';
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
    gridList: {
        marginTop: 20,
        height: 'auto'
    },
}))

const FollowListPanel = ({ handleClick, onBack, followList,mode }) => {
    const classes = useStyles();
    let followListItems = []
    for (const key in followList) {
        let followItem = followList[key]
        followListItems.push(<FollowListItem key={key} follow={followItem} handleClick={handleClick} panelNumber={SHOW_FOLLOWPANEL} panelLocation={3} />)
    }
    const title = 'フォロワー(' + followListItems.length + ')'
    return (
        <BasePanel mode={0}>
            <PanelHeader               
                title={title}
                leftButtonType={isMobile?2:0}
                handleLeftButton={onBack}
                rightButtonType={1}
            />
            

            <Grid xs={12} item>
                <GridList style={{marginTop: '20px'}} className={classes.gridList} cols={followListItems.length}>
                    {followListItems}                    
                </GridList>
            </Grid>
        </BasePanel>
    )
}

export default FollowListPanel