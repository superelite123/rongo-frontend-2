import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import ProductListItem from './ProductListItem'

import BasePanel from 'components/base/BasePanel';
import PanelHeader from 'components/base/PanelHeader';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
const styles = theme => ({
  root: {
    height: '100%',
    padding: 0,
    background: '#F5F5F5'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  childToCenter: {
    margin: 'auto'
  },
  gridList: {
    marginTop: 20,
    height: 'auto'
  },
  productCategoryButtonSelected: {
    fontFamily: 'Noto Sans JP',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    color: 'primary.black',
  },
  productCategoryButtonUnSelected: {
    fontFamily: 'Noto Sans JP',
    fontWeight: 500,
    fontSize: '14px',
    color: '#BDBDBD',
    textTransform: 'uppercase'
  },
  searchButton: {
    verticalAlign: 'text-bottom',
    color: '#BBA884'
  },
  tabWrapper:{
    display:'flex',
    justifyContent:'center'
  }
});

class ProductListPanel extends Component {

  render() {
    const { classes, productList, handleClick, 
            switchingType, type,mode,isLoading, deleteMode, 
            handleSelectProduct, toggleDeleteMode, handleStageProduct } = this.props;

    let productListItems = []
    for (const key in productList){
      const product = productList[key]
      productListItems.push(<ProductListItem 
                              deleteMode={deleteMode} 
                              product={product} 
                              key={key}
                              handleClick={handleClick}
                              handleSelectProduct={handleSelectProduct}
                              handleStageProduct={handleStageProduct} />)
    }
    return (
      <BasePanel mode={mode}>
        <Grid xs={12} item>
            <PanelHeader 
              title="商品管理"
              deleteMode={deleteMode}
              handleLeftButton={toggleDeleteMode}
              leftButtonType={1}
              rightButtonType={1}
            />
        </Grid>
        <Grid xs={12} item>
            <Grid container style={{ paddingTop: '16px', paddingBottom: '16px' }}>
              <Grid item xs={4} className={classes.tabWrapper}><Button className={type === 0 ? classes.productCategoryButtonSelected : classes.productCategoryButtonUnSelected} onClick={() => switchingType(0)}>すべて</Button></Grid>
              <Grid item xs={4} className={classes.tabWrapper}><Button className={type === 1 ? classes.productCategoryButtonSelected : classes.productCategoryButtonUnSelected} onClick={() => switchingType(1)}>出品中</Button></Grid>
              <Grid item xs={4} className={classes.tabWrapper}><Button className={type === 2 ? classes.productCategoryButtonSelected : classes.productCategoryButtonUnSelected} onClick={() => switchingType(2)}>下書き</Button></Grid>
            </Grid>
          </Grid>
        
        <Grid xs={12} item>
          <GridList className={classes.gridList} cols={productListItems.length}>
            {productListItems}
          </GridList>
        </Grid>
        <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </BasePanel>
    );
  }
}

export default withStyles(styles)(ProductListPanel);
