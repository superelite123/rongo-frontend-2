import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import ProductListItem from './ProductListItem'
import { sizing } from '@material-ui/system';
import BasePanel from 'components/base/BasePanel';
const styles = theme => ({
  root: {
    height: '100%',
    padding: 0,
    background: '#F5F5F5'
  },
  header: {
    paddingTop: 'px',
    paddingBottom: 'px',
  },
  headerLabel: {
    fontFamily: 'Noto Sans JP',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '17px',
    marginTop: '15px',
    marginBottom: '14px',
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
  topBar: {
    margin: 0,
    borderTopWidth: '0px',
    borderBottomWidth: '3px',
    borderLeftWidth: '0px',
    borderRightWidth: '0px',
    borderColor: '#BBA884'
  },
  searchButton: {
    verticalAlign: 'text-bottom',
    color: '#BBA884'
  }
});

class ProductListPanel extends Component {
  render() {
    const { classes, productList, handleClick, switchingType, type,mode } = this.props;

    let productListItems = []
    for (const key in productList) {
      let product = productList[key]
      productListItems.push(<ProductListItem product={product} handleClick={handleClick} />)
    }

    return (
      <BasePanel mode={mode}>
        <Grid xs={12} item>
          <Grid container>
            <Grid item xs={12}>
              <Paper variant="outlined" square className={classes.header}>
                <Grid container className={classes.card}>
                  <Grid item xs={2} className={classes.childToCenter}>
                    <Button style={{ color: '#BBA884', paddingBottom: '3px' }}>
                      編集
                      </Button>
                  </Grid>
                  <Grid item xs={8}>
                    <p variant='h5' component="h5" className={classes.headerLabel}>
                      商品管理
                    </p>
                  </Grid>
                  <Grid item xs={2} className={classes.childToCenter}>
                    <Typography variant='h5' component="h5">
                      <SearchIcon className={classes.searchButton} />
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item>
          <hr className={classes.topBar} />
        </Grid>
        <Grid xs={12} item>
          <Grid container style={{ paddingTop: '16px', paddingBottom: '16px' }}>
            <Grid item xs={4}><Button className={type == 0 ? classes.productCategoryButtonSelected : classes.productCategoryButtonUnSelected} onClick={() => switchingType(0)}>すべて</Button></Grid>
            <Grid item xs={4}><Button className={type == 1 ? classes.productCategoryButtonSelected : classes.productCategoryButtonUnSelected} onClick={() => switchingType(1)}>出品中</Button></Grid>
            <Grid item xs={4}><Button className={type == 2 ? classes.productCategoryButtonSelected : classes.productCategoryButtonUnSelected} onClick={() => switchingType(2)}>下書き</Button></Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item>
          <GridList className={classes.gridList} cols={productListItems.length}>
            {productListItems}
          </GridList>
        </Grid>
      </BasePanel>
    );
  }
}

export default withStyles(styles)(ProductListPanel);
