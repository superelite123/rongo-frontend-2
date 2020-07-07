import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import HomeFooter from './base/footer/HomeFooter'
import ListCard from './base/ListCard'
import PanelTemplate from './base/PanelTemplate'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
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
    const { classes } = this.props;

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
            <ListCard text={'商品管理'} number={'1,000'} />
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
            <ListCard text={'商品管理'} />
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

export default withStyles(styles)(HomePanel);
