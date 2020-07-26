import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import { Grid, Paper, Checkbox, Box, Button, CardActionArea, Typography} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TextTruncate from 'react-text-truncate';
import SellDetailChildItem from './SellDetailChildItem'
const useStyles = makeStyles((theme) => ({
    root: {
        backgrodund: 'red',
        height: '83px',
        width: '95%',
        margin:'auto',
        display: 'flex',
        position: 'relative',
        borderTopWidth: '0px',
    },
    thumbnail: {
        width: '83px',
        height: '83px',
        alignContent: 'center',
        position: 'relative'
    },
    descriptionContent: {
        padding: '6px 0 0 16px'
    },
    liveTitle: {
        width: '100%',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
    },
    tag:{
        width: '100%',
        color: '#BDBDBD',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontSize: '12px',
    },
    wacthers:{
        width: '100%',
        color: '#BDBDBD',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontSize: '12px',
    },
    price:{
        width: '100%',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontWeight: 'bolder',
        fontStyle: 'normal',
        fontSize: '16px',
    }

}))

const SellDetailItem = ({ live, index, handleClick }) => {
    const classes = useStyles();
    const { thumbnail, title, tag, price, nLiveWatchers, nReplayWatchers,orders,expand} = live
    return(
        <Grid container>
            <Grid item xs={12}>
                <CardActionArea component="a" onClick={() => handleClick(index)} >
                    <Paper className={classes.root} square variant="outlined">
                        <Box className={classes.thumbnail} component='div'>
                            <img className={classes.thumbnail} src={thumbnail} alt="" />
                        </Box>
                        <Box style={{width:'100%'}} component='div'>
                            <Grid className={classes.descriptionContent} container>
                                <Grid item xs={7} md={9}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <TextTruncate
                                                className={classes.liveTitle}
                                                line={1}
                                                element="div"
                                                truncateText="…"
                                                text={title}
                                            />
                                        </Grid> 
                                        <Grid item xs={12}>
                                            <div className={classes.tag}>{tag}</div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className={classes.wacthers}><VisibilityIcon />{nLiveWatchers}</div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className={classes.wacthers}><PlayCircleOutlineIcon />{nReplayWatchers}</div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={5} md={3} style={{margin:'auto'}}>
                                    <div className={classes.price}>
                                        ¥{price}
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </CardActionArea>
            </Grid>
            {
                expand && 
                orders.map((order,index) => 
                    <Grid item xs={12}>
                        <SellDetailChildItem key={index} first={index === 0} end={index === (orders.length - 1)} order={order} />
                    </Grid>
                )
            }
        </Grid>
    )
}

export default SellDetailItem;