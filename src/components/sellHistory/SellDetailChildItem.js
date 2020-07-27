import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import { Grid, Paper, Checkbox, Box, Button, CardActionArea, Typography} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TextTruncate from 'react-text-truncate';

const useStyles = makeStyles((theme) => ({
    root: {
        backgrodund: 'red',
        height: '83px',
        width: '100%',
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
    productNumber: {
        margin: '2px auto',
        color: '#A5A5A5',
        textAlign: 'left'
    },
    price:{
        width: '100%',
        color: '#333333',
        fontFamily: 'Noto Sans JP',
        fontWeight: 'bolder',
        fontStyle: 'normal',
        fontSize: '14px',
    }

}))

const SellDetailChildItem = ({ order,first, end }) => {
    const classes = useStyles();
    const { thumbnail, label, number, price} = order
    return(
            <Paper className={classes.root} style={{marginTop:first?'10px':'0px',marginBottom:end?'30px':'0px'}} square variant="outlined">
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
                                        text={label}
                                    />
                                </Grid> 
                                <Grid item xs={12}>
                                    <div className={classes.tag}>品番：{number}</div>
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
    )
}

export default SellDetailChildItem;