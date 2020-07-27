import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { Box,Grid,
         Paper ,IconButton
         } from "@material-ui/core"
import LivePanelTemplete from '../base/LivePanelTemplete'
import LiveButton from 'components/base/LiveButton';
import LiveConfirmButton from 'components/base/LiveConfirmButton';
import AddIcon from '@material-ui/icons/Add';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ProductAddedListItem from './ProductAddedListItem'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    paperView: {
        boxShadow: '0 0 #00000000',
        background: '#00000000',
        borderRadius: '0px',
        display: 'flex'
    },
    infoWrapper: {
        height: '100%',
        display: 'flex',
        paddingLeft: '10px',
        paddingRight: '16px',
        flexGrow: '1',
    },
    nameField: {
        height: '47px',
        resize: 'inherit',
        boxShadow: '0 0 #00000000',
        border: '0 solid black',
        padding: '10px 15px',
        flexGrow: '1',
        borderRadius: '5px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
    },
    tagField: {
        height: '22px',
        resize: 'inherit',
        boxShadow: '0 0 #00000000',
        border: '0 solid black',
        padding: '10px 15px',
        flexGrow: '1',
        borderRadius: '5px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
    },
    productListHeader:{
        background:'#333333',
        height:'50px',
        color:'white',
        display:'flex',
        fontSize:'13px'
    },
    productListContent:{
        maxHeight:'400px',
        overflow:'scroll'
    },
    confirmButton:{

    }
}))

const LiveForm = (props) => {
    const classes = useStyles();
    const { handleChangeInput,handleTakePhoto,handleAddProduct,handleSubmit,thumbnail,products,backDrop } = props
    
    const thumbnailWrapperStyle = {
        border: '2px solid white',
        marginLeft: '16px',
        minWidth: '115px',
        height: '115px',
        backgroundSize: '100% 100%',
        background: `url(${thumbnail})`,
        display: 'flex',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
        color: 'white'
    }
    return (
        <LivePanelTemplete mode={1}>
            <Box component="div" className={classes.root}>
                <Grid container>
                    
                    {/**Live Form */}
                    {
                        props.status === 0 &&
                    <Grid xs={12} item style={{ padding: '0 20px' }}>
                        <Paper className={classes.paperView}>
                            <Box component='div' style={thumbnailWrapperStyle}>
                                <Grid container style={{ margin: 'auto' }}>
                                    <Grid item xs={12}  style={{ textAlign: 'center' }}>
                                    <input accept="image/*" hidden={true} id="fileDescriptionImage" type="file" 
                                        onChange={handleTakePhoto} />
                                        <label htmlFor="fileDescriptionImage">
                                            <IconButton style={{color:'white'}} aria-label="upload picture" component="span">
                                                <PhotoCamera />
                                            </IconButton>
                                        </label>
                                    </Grid>
                                    <Grid item xs={12} style={{ textAlign:'center' }}>
                                        <span>サムネール</span>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component='div' className={classes.infoWrapper}>
                                <Grid container>
                                    <Grid xs={12} item style={{ display: 'flex' }}>
                                        <textarea className={classes.nameField} name='title' placeholder={"タイトル"} onChange={handleChangeInput} />
                                    </Grid>
                                    <Grid xs={12} item style={{ display: 'flex', marginTop: '10px' }}>
                                        <textarea className={classes.tagField} name='tag' placeholder={"ライブタグ"} onChange={handleChangeInput} />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    }
                    {/**Added Product */}
                    <Grid xs={12} item style={{ padding: '20px' }}>
                        <Grid container>
                            <Grid item xs={12}>
                                <div className={classes.productListHeader}>
                                    <Grid container>
                                        <Grid item xs={5}><p style={{marginLeft:'20px'}}>出品商品一覧</p></Grid>
                                        <Grid item xs={4}><p>{products.length}商品</p></Grid>
                                        <Grid item xs={3}><p>編集</p></Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.productListContent}>
                                    {
                                        products.map(
                                            (product,index) => (
                                                <ProductAddedListItem 
                                                    key={index} 
                                                    product={product} />
                                            )
                                        )
                                    }
                                </div>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid xs={12} item style={{ padding: '20px' }}>
                        <LiveButton onClick={() => {handleAddProduct()}} >
                            <div style={{ display: 'flex', margin: 'auto' }}>
                                <AddIcon style={{ margin: 'auto 0' }} />
                                <span style={{ margin: 'auto 0' }}>出品する商品を選択する</span>
                            </div>
                        </LiveButton>
                    </Grid>
                    {
                        props.status === 0 && 
                        <Grid xs={12} item style={{ padding: '20px' }}>
                            <LiveConfirmButton onClick={handleSubmit} >
                                <div style={{ display: 'flex', margin: 'auto' }}>
                                    <span style={{ margin: 'auto 0' }}>配信確認</span>
                                </div>
                            </LiveConfirmButton>
                        </Grid>
                    }
                </Grid>
            </Box>
            
            <Backdrop className={classes.backdrop} open={backDrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </LivePanelTemplete>
    )
}

export default LiveForm;