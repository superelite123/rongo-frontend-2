import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import ProductListItem from './ProductListItem'
import BasePanel from 'components/base/BasePanel';
import PanelHeader from 'components/base/PanelHeader';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
            switchingType, type,isLoading, deleteMode, 
            handleSelectProduct, toggleDeleteMode, handleStageProduct,
            handleDelete,confirmDelete,handleCloseConfirmDialog } = this.props;

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
      <BasePanel mode={0}>
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
            <Dialog
                open={confirmDelete}
                onClose={handleCloseConfirmDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"放送を開始しますか？"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    放送を開始しますか？
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseConfirmDialog} color="primary">
                    キャンセル
                </Button>
                <Button onClick={handleDelete} color="primary" autoFocus>
                    はい
                </Button>
                </DialogActions>
            </Dialog>
      </BasePanel>
    );
  }
}

export default withStyles(styles)(ProductListPanel);
