// @flow
import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {
  SHOW_HOMEPANEL,
  SHOW_PPROUCTSPANEL,
  SHOW_TRANSACTIONSPANEL,
  SHOW_PADDLINK,
  SHOW_PFORM,
  SHOW_PDETAIL,
  SHOW_TRANSACTIONDETAIL
} from 'lib/constant'
const useStyles = makeStyles((theme) => ({
    card:{
      borderTopWidth: '0px',
    },
    cardContent: {
      paddingBottom:'16px',
    },
    childToCenter: {
      margin: 'auto 0'
    },
    selected:{
    },
    cardTitle: {
      fontFamily: 'Noto Sans JP',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '13px',
      lineHeight: '100%',
      color: '#333333'
    },
    cardDetail: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '15px',
      lineHeight: '100%',
      textAlign: 'center',
      color: '#333333',
      textAlign: 'right'
    },
    forwardArrow: {
      verticalAlign: 'text-top',
      fontSize: '1em',
      color: '#DEDCD4'
    }
}))

const ListCard = ({ text, link,isBottomBorder,number,isSelected,handleClick,panelNumber,panelLocation }) => {
    const classes = useStyles();
    return (
        <CardActionArea component="a" onClick={() => handleClick(panelNumber, panelLocation)}>
          <Card variant="outlined" square className={classes.card} style={{background:isSelected?'rgb(93, 184, 61, 0.2)':''}}>
            <CardContent style={{paddingBottom: '15px'}} className={classes.cardContent}>
              <Grid container>
                <Grid xs={9} item className={classes.childToCenter}>
                  <Typography component="h4" className={classes.cardTitle}>
                    <Box textAlign="left">{text}</Box>
                  </Typography>
                </Grid>
                <Grid xs={2} style={{margin: 'auto'}} item>
                <Typography component="p" className={classes.cardDetail}>{number}
                  </Typography>
                </Grid>
                <Grid xs={1} style={{margin: 'auto', maxWidth: '16px'}} item>
                  <Typography component="p">
                    <ArrowForwardIosIcon className={classes.forwardArrow}/>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
      </CardActionArea>
    );
};
export default ListCard;
