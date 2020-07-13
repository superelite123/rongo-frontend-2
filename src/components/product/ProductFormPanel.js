import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import SectionHeader from '../typo/SectionHeader'
import PanelTemplate from '../base/PanelTemplate'
import {Box, Button,Grid,Typography, Paper,TextField } from "@material-ui/core"
import {TakePhoto, CustomTextField, TagButton, CustomTextArea } from '../typo'
const useStyles = makeStyles((theme) => ({
    root:{
      height: '750px',
      width:'80%',
      background:'#DEDCD4',
      position:'relative'
    },
    addButton: {
        width:'63px',
        height:'63px',
        borderRadius:'50%',
        color:'white',
        background:'#BBA884',
        position:'absolute',
        fontSize: '13px',
        left:'calc(50% - 63px/2)',
        top:'calc(50% - 63px/2)',
        margin:'auto',
    },
    headerLabel: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
    },
    label:{
        color:'#A5A5A5',
        fontSize:'13px',
        position:'absolute',
        bottom: '12px',
        textAlign:'center',
        marginLeft:'17px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal'
    },
    topLabelPanel:{
        height:'70px',
        position:'relative'
    },
    labelPanel:{
        height:'50px',
        position:'relative'
    },
    takePhotoWrapper: {
        padding:'21px'
    },
    tagPanel:{
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom:'20px',
        margin: 'auto 16px'
    },
    tagPanelLabel: {
        textAlign:'left',
        marginTop:'20px',
        marginLeft:'10px',
        fontSize:'11px',
        fontWeight:500,
        color:'#333333',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal'
    },
    blank20:{
        height:'20px',
    },
    qtyWrapper:{
        marginLeft:'17px',
        marginRight:'17px',
        display:'flex',

    },
    qtyLabel:{
        fontSize:'13px',
        fontFamily:'Noto Sans JP',
        textAlign:'left',
        paddingTop:'17px',
        paddingBottom:'17px',
        width:'30%',
    },
    qtyNumber:{
        fontSize:'13px',
        fontFamily:'Roboto',
        textAlign:'right',
        paddingTop:'17px',
        paddingBottom:'17px',
        width:'70%',
    }
  }));
const handleClick = () => {
    console.log('a')
}
const handleTagClick = () => {

}
const ProductFormPanel = () => {
    const classes = useStyles();
    const takePhotos = [];
    for(let i = 0; i < 8; i ++)
    {
        takePhotos[i] = <TakePhoto />
    }
    return (
        <PanelTemplate>
            <SectionHeader title={'商品登録'} />
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.topLabelPanel}>
                        <Typography className={classes.label}>商品写真</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.takePhotoWrapper}>
                    <Grid container spacing={1}>
                        {
                            takePhotos.map((value,key) => {
                                return <Grid item key={key} md={3} xs={6}>{value}</Grid>
                            })
                        }
                    </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.labelPanel}>
                        <Typography className={classes.label}>商品名</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.labelPanel}>
                        <Typography className={classes.label}>品番</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.labelPanel}>
                        <Typography className={classes.label}>商品タグ</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField />
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={classes.tagPanelLabel}>商品タグを候補から選択</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.tagPanel}>
                                    <TagButton label={'ファッション'} handleClick={handleTagClick}/>
                                    <TagButton label={'パンツ'}/>
                                    <TagButton label={'小物'}/>
                                    <TagButton label={'小物'}/>
                                    <TagButton label={'パンツ'}/>
                                    <TagButton label={'ファッション'}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.labelPanel}>
                        <Typography className={classes.label}>商品説明</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <CustomTextArea />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.blank20}></div>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square>
                        <div className={classes.qtyWrapper} >
                            <Typography className={classes.qtyLabel}>在庫</Typography>
                            <Typography className={classes.qtyNumber}>100</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square>
                        <div className={classes.qtyWrapper} >
                            <Typography className={classes.qtyLabel}>発送までの日数</Typography>
                            <Typography className={classes.qtyNumber}>100</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square>
                        <div className={classes.qtyWrapper} >
                            <Typography className={classes.qtyLabel}>発送までの日数</Typography>
                            <Typography className={classes.qtyNumber}>100</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square>
                        <div className={classes.qtyWrapper} >
                            <Typography className={classes.qtyLabel}>発送までの日数</Typography>
                            <Typography className={classes.qtyNumber}>100</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square>
                        <div className={classes.qtyWrapper} >
                            <Typography className={classes.qtyLabel}>発送までの日数</Typography>
                            <Typography className={classes.qtyNumber}>100</Typography>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </PanelTemplate>
      )
}

export default ProductFormPanel