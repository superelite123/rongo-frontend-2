import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import ListCard from './base/ListCard';
import PanelTemplate from './base/PanelTemplate';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EmojiEmotionlessIcon from './base/icons/EmojiEmotionlessIcon';
import EmojiEmotionsadIcon from './base/icons/EmojiEmotionsadIcon';
import Box from '@material-ui/core/Box';
import * as homeActions from 'redux/modules/homePage';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  SHOW_HOMEPANEL,
  SHOW_FOLLOWPANEL,
  SHOW_PPROUCTSPANEL,
  SHOW_TRANSACTIONSPANEL,
  SHOW_LIVELISTPANEL,
  SHOW_PADDLINK,
  SHOW_PFORM,
  SHOW_PDETAIL,
  SHOW_TRANSACTIONDETAIL,
  SHOW_SELLHISTORYLISTPANEL
} from 'lib/constant'

const styles = theme => ({
  root: {
    height: '100%',
    padding: 0,
    background: '#F5F5F5'
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    paddingTop: '24px',
    paddingBottom: '17px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: '80px',
    height: '80px',
    borderRadius: '40px'
  },
  card: {
    marginTop: 50
  },
  cardDetails: {
    flex: 1,
    display: 'flex',
    padding: 0,
  },
  followList: {
    marginTop: 50,
    padding: 20
  },
  followDetails: {
    margin: 0,
    padding: 0,
    borderTopWidth: '0px'
  },
  childToCenter: {
    margin: 'auto'
  },

  userName: {
    fontFamily: 'Noto Sans JP',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '17px',
    lineHeight: '100%',
  },

  evaluation: {
    fontFamily: 'Noto Sans JP',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '100%',
  },

  emotion: {
    fontFamily: 'Noto Sans JP',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '10px',
    lineHeight: '100%',
    color: '#A5A5A5'
  },

  emotionCount: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '100%',
  },

  thumbnail: {
    width: '80px',
    height: '80px'
  }

});

class HomePanel extends Component {
  render() {
    const { classes, HomeActions, userInfo } = this.props;

    const handleClick = (panelNumber, panelType) => {
      console.log(panelNumber + ',' + panelType)
      switch (panelType) {
        case 1:
          HomeActions.changeFirstStatus(panelNumber)
          HomeActions.changeSecondStatus(0)
          HomeActions.changeThirdStatus(0)
          break;
        case 2:
          HomeActions.changeSecondStatus(panelNumber)
          HomeActions.changeThirdStatus(0)
          break;
        case 3:
          HomeActions.changeThirdStatus(panelNumber)
          break;
        default:
          break;
      }

    }

    let avatar
    if (userInfo.thumbnail == null) {
      avatar = <Avatar className={classes.avatar}></Avatar>
    } else {
      avatar = <img className={classes.avatar} src={userInfo.thumbnail} />
    }

    return (
      <PanelTemplate >

        <Grid xs={12} item>
          <Paper variant="outlined" square elevation={1} className={classes.avatarWrapper}>
            {avatar}
            <Typography component="h1" variant="h5" className={classes.userName}>
              {userInfo.nickname}
            </Typography>
          </Paper>
        </Grid>
        {/* /.Avatar */}

        {/* Link to Follow List */}
        <Grid item style={{ marginTop: '35px' }} xs={12} >
          <ListCard text={'フォロワー'}
            number={userInfo.numFollowers}
            panelNumber={SHOW_FOLLOWPANEL}
            panelLocation={2}
            handleClick={handleClick} />
        </Grid>
        {/* Link to Follow List */}
        {/* Follow Detail */}
        <Grid item style={{ paddingBottom: '40px' }} xs={12}>
          <Paper variant="outlined" square className={classes.followDetails}>
            <Grid container style={{ padding: '0 16px' }}>
              <Grid xs={4} className={classes.childToCenter} item>
                <Typography component="h4">
                  <Box textAlign="left" className={classes.evaluation}>評価一覧</Box>
                </Typography>
              </Grid>
              <Grid xs={2} item></Grid>
              <Grid xs={2} item>
                <Typography component="div">
                  <Box lineHeight={1} mt={1.5}><EmojiEmotionsIcon style={{ verticalAlign: 'text-top', color: '#4BD458' }} /></Box>
                  <Box lineHeight={1} mt={0.2} className={classes.emotion}>良い</Box>
                  <Box lineHeight={1} mt={0.75} mb={1.5} className={classes.emotionCount}>1</Box>
                </Typography>
              </Grid>
              <Grid xs={2} item>
                <Typography component="div">
                  <Box lineHeight={1} mt={1.5}><EmojiEmotionlessIcon style={{ verticalAlign: 'text-top', color: '#BDBDBD' }} /></Box>
                  <Box lineHeight={1} mt={0.2} className={classes.emotion}>普通</Box>
                  <Box lineHeight={1} mt={0.75} mb={1.5} className={classes.emotionCount}></Box>
                </Typography>
              </Grid>
              <Grid xs={2} item>
                <Typography component="div">
                  <Box lineHeight={1} mt={1.5}><EmojiEmotionsadIcon style={{ verticalAlign: 'text-top', color: '#D74936' }} /></Box>
                  <Box lineHeight={1} mt={0.2} className={classes.emotion}>悪い</Box>
                  <Box lineHeight={1} mt={0.75} mb={1.5} className={classes.emotionCount}></Box>
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
          <ListCard text={'取引管理'}
            panelNumber={SHOW_TRANSACTIONSPANEL}
            panelLocation={2}
            handleClick={handleClick} />
        </Grid>
        <Grid item xs={12} >
          <ListCard text={'売上管理'}
            panelNumber={SHOW_SELLHISTORYLISTPANEL}
            panelLocation={2}
            handleClick={handleClick} />
        </Grid>
        <Grid item xs={12} >
          <ListCard text={'配信管理'}
            panelNumber={SHOW_LIVELISTPANEL}
            panelLocation={2}
            handleClick={handleClick} />
        </Grid>
        <Grid item xs={12} >
          <ListCard text={'ストア管理'}
            panelNumber={SHOW_PPROUCTSPANEL}
            panelLocation={2}
            handleClick={handleClick} />
        </Grid>

        <Grid item style={{ paddingTop: '40px' }} xs={12} >
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
    firstPanelVisible: state.homePage.get('firstPanel'),
    secondPanelVisible: state.homePage.get('seconPanel'),
    thirdPanelVisible: state.homePage.get('thirdPanel'),
    userInfo: state.user.get('userInfo')
  }),
  (dispatch) => ({
    HomeActions: bindActionCreators(homeActions, dispatch),
  })
)(withStyles(styles)(HomePanel));
