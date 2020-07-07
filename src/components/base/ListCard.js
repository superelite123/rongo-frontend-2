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
const useStyles = makeStyles((theme) => ({
    card:{
      borderTopWidth: '0px',
    },
    cardContent: {
      paddingBottom:'16px',
    },
    childToCenter: {
      margin:'auto'
    },
    selected:{
    }
}))
const ListCard = ({ text, link,isBottomBorder,number,isSelected }) => {
    const classes = useStyles();
    return (
        <CardActionArea component="a" href="">
          <Card variant="outlined" square className={classes.card} style={{background:isSelected?'rgb(93, 184, 61, 0.2)':''}}>
            <CardContent style={{paddingBottom: '16px',paddingLeft:'0px'}} className={classes.cardContent}>
              <Grid container >
                <Grid xs={4} item className={classes.childToCenter}>
                  <Typography component="h4">
                    <Box textAlign="center">{text}</Box>
                  </Typography>
                </Grid>
                <Grid xs={5} item>
                  <Box textAlign="center"></Box>
                </Grid>
                <Grid xs={2} item>
                <Typography component="p">{number}
                  </Typography>
                </Grid>
                <Grid xs={1} item>
                  <Typography component="p">
                    <ArrowForwardIosIcon />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
      </CardActionArea>
    );
};
export default ListCard;
