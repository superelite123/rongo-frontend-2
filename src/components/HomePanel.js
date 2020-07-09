import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import ListCard from './base/ListCard'
import PanelTemplate from './base/PanelTemplate'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Box from '@material-ui/core/Box';
import * as homeActions from 'redux/modules/homePage';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  SHOW_HOMEPANEL,
  SHOW_PPROUCTSPANEL,
  SHOW_TRANSACTIONSPANEL,
  SHOW_PADDLINK,
  SHOW_PFORM,
  SHOW_PDETAIL,
  SHOW_TRANSACTIONDETAIL
} from 'lib/constant'
const styles = theme => ({
  root: {
    height: '100%',
    padding: 0,
    background:'#F5F5F5'
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:'100%',
    margin:0,
    paddingTop:theme.spacing(7),
    paddingBottom:theme.spacing(7),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  card: {
    marginTop:50
  },
  cardDetails: {
    flex: 1,
    display: 'flex',
    padding:0,
  },
  followList: {
    marginTop:50,
    padding:20
  },
  followDetails: {
    margin:0,
    padding:0,
    borderTopWidth: '0px'
  },
  childToCenter:{
    margin:'auto'
  }
});
class HomePanel extends Component {
  render() {
    const { classes,HomeActions } = this.props;

    const handleClick = (panelNumber,panelType) => 
    {
      console.log(panelNumber + ',' + panelType)
      switch(panelType)
      {
        case 1:
          HomeActions.changeFirstStatus(panelNumber)
        break;
        case 2:
          HomeActions.changeSecondStatus(panelNumber)
        break;
        case 3:
          HomeActions.changeThirdStatus(panelNumber)
        break;
        default:
          break;
      }
      
    }
    return (
      <PanelTemplate >
          {/* Avatar */}
            <Grid xs={12} item>
              <Paper variant="outlined" square elevation={1} className={classes.avatarWrapper}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                  BLUE ROSE
                </Typography>
              </Paper>    
            </Grid>
          {/* /.Avatar */}
          
          {/* Link to Follow List */}
          <Grid item style={{marginTop:'40px'}} xs={12} >
            <ListCard text={'商品管理'} 
                      number={'1,000'} 
                      panelNumber={SHOW_PPROUCTSPANEL} 
                      panelLocation={2} 
                      handleClick={handleClick} />
          </Grid>
          {/* Link to Follow List */}
          {/* Follow Detail */}
            <Grid item style={{paddingBottom: '40px'}} xs={12}> 
              <Paper  variant="outlined" square className={classes.followDetails}>
                <Grid container>
                  <Grid xs={4} className={classes.childToCenter} item>
                    <Typography component="h4">
                      <Box textAlign="center">評価一覧</Box>
                    </Typography>
                  </Grid>
                  <Grid xs={2} item></Grid>
                  <Grid xs={2} item>
                    <Typography component="div">
                      <Box lineHeight={1} mt={1}><EmojiEmotionsIcon /></Box>
                      <Box lineHeight={1} mt={1}>良い</Box>
                      <Box lineHeight={1} mt={0.5}>100</Box>
                    </Typography>
                  </Grid>
                  <Grid xs={2} item>
                    <Typography component="div">
                      <Box lineHeight={1} mt={1}><EmojiEmotionsIcon /></Box>
                      <Box lineHeight={1} mt={1}>良い</Box>
                      <Box lineHeight={1} mt={0.5}>100</Box>
                    </Typography>
                  </Grid>
                  <Grid xs={2} item>
                    <Typography component="div">
                      <Box lineHeight={1} mt={1}><EmojiEmotionsIcon /></Box>
                      <Box lineHeight={1} mt={1}>良い</Box>
                      <Box lineHeight={1} mt={0.5}>100</Box>
                    </Typography>
                  </Grid> 
                </Grid>
              </Paper>
            </Grid>
          {/* Follow Detail */}
          <Grid item xs={12} >
            <ListCard text={'商品管理'} 
                      panelNumber={SHOW_PPROUCTSPANEL} 
                      panelLocation={2} 
                      handleClick={handleClick} />
          </Grid>
          <Grid item xs={12} >
            <ListCard text={'取引管理'} />
          </Grid>
          <Grid item xs={12} >
            <ListCard text={'配信管理'} />
          </Grid>
          <Grid item xs={12} >
            <ListCard text={'ストア管理'} />
          </Grid>

          <Grid item style={{paddingTop: '40px'}} xs={12} >
            <ListCard text={'メールアドレス変更'} />
          </Grid>
          <Grid item xs={12} >
            <ListCard text={'パスワード変更'} />
          </Grid>
      </PanelTemplate>
    );
  }
}
export default connect(
  (state) => ({
      firstPanelVisible:state.homePage.get('firstPanel'),
      secondPanelVisible:state.homePage.get('seconPanel'),
      thirdPanelVisible:state.homePage.get('thirdPanel'),
  }),
  (dispatch) => ({
      HomeActions: bindActionCreators(homeActions, dispatch),
  })
)(withStyles(styles)(HomePanel));
