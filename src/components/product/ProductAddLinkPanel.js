import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import {Box, Button} from "@material-ui/core"
import BasePanel from 'components/base/BasePanel';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as homeActions from 'redux/modules/homePage';
import * as productFormActions from 'redux/modules/product/productForm';
import {SHOW_PFORM,} from 'lib/constant'
const useStyles = makeStyles((theme) => ({
    root:{
      height: '95%',
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
const ProductAddLinkPanel = ({HomeActions,ProductFormActions}) => {
    
    const handleClick = () => {
        ProductFormActions.selectProduct(null)
        HomeActions.changeThirdStatus(SHOW_PFORM,3)
    }
    const classes = useStyles();
    return (
            <BasePanel mode={0} bgColor='1'>
                <Box borderColor="primary.white" border={2} className={classes.root}>
                    <Button className={classes.addButton} onClick={handleClick}>
                        <LocalMallIcon />
                        登録
                    </Button>
                </Box>
            </BasePanel>
      )
}

export default connect(
    (state) => ({
        firstPanelVisible:state.homePage.get('firstPanel'),
    }),
    (dispatch) => ({
        HomeActions: bindActionCreators(homeActions, dispatch),
        ProductFormActions: bindActionCreators(productFormActions, dispatch),
    })
)(ProductAddLinkPanel);