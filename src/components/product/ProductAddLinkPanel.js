import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import PanelTemplate from '../base/PanelTemplate'
import {Box, Button} from "@material-ui/core"
import ContainerDimensions from 'react-container-dimensions'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as homeActions from 'redux/modules/homePage';
import {
    SHOW_PFORM,
} from 'lib/constant'
const useStyles = makeStyles((theme) => ({
    root:{
      height: '750px',
      width:'80%',
      background:'#DEDCD4',
      position:'relative'
    },
    addButton: {
        width:'63px',
        height:'63px',
        borderRadius:'50%',
        color:'white',
        background:'#BBA884',
        position:'absolute',
        fontSize: '13px',
        left:'calc(50% - 63px/2)',
        top:'calc(50% - 63px/2)',
        margin:'auto',
    }
  }));
const ProductAddLinkPanel = ({HomeActions}) => {
    
    const handleClick = () => {
        HomeActions.changeFirstStatus(SHOW_PFORM,3)
    }
    const classes = useStyles();
    return (
            <Box borderColor="primary.white" border={2} className={classes.root}>
                <Button className={classes.addButton} onClick={handleClick}>
                    <LocalMallIcon />
                    登録
                </Button>
            </Box>
      )
}

export default connect(
    (state) => ({
        firstPanelVisible:state.homePage.get('firstPanel'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
    })
)(ProductAddLinkPanel);