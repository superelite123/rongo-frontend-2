import React,{ useState } from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import SectionHeader from '../typo/SectionHeader'
import PanelTemplate from '../base/PanelTemplate'
import { Grid,Typography, Paper,
        InputLabel,MenuItem,FormControl,Select
} from "@material-ui/core"
import {TakePhoto, CustomTextField, TagButton, CustomTextArea } from '../typo'
const useStyles = makeStyles((theme) => ({
    root:{
      marginBottom:'50px'
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
    },
    blank20:{
        height:'20px',
    },
    gridLabel:{
        fontSize:'13px',
        fontFamily:'Noto Sans JP',
        textAlign:'left',
        width:'100%',
        color:'#333333'
    },
    gridPaper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
    },
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(0),
    },
  }));
const handleTagClick = () => {
    
}
const handleTakePhoto = () => {

}
const handleSubmit = () => {

}
const ProductFormPanel = () => {
    const classes = useStyles();
    const takePhotos = [];
    for(let i = 0; i < 8; i ++)
    {
        takePhotos[i] = <TakePhoto handleChange={handleTakePhoto} />
    }
    return (
        <PanelTemplate>
            <form onSubmit={handleSubmit}>
                <SectionHeader title={'商品登録'} />
                <Grid container className={classes.root}>
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
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <CustomTextField />
                    </Paper>
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
                {/* Qty Input */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={8} item>
                                <Typography className={classes.gridLabel}>在庫</Typography>
                            </Grid>
                            <Grid xs={4} item>
                                <CustomTextField />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* DeliveryDat Input */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={8} item style={{margin:'auto'}}>
                                <Typography className={classes.gridLabel} style={{margin:'auto'}}>発送までの日数</Typography>
                            </Grid>
                            <Grid xs={4} item>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">選択してください</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* DeliveryDat Input */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={8} item style={{margin:'auto'}}>
                                <Typography className={classes.gridLabel} style={{margin:'auto'}}>発送業者</Typography>
                            </Grid>
                            <Grid xs={4} item>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">選択してください</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                
                {/* Price Input */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={8} item>
                                <Typography className={classes.gridLabel}>商品代金（税込）</Typography>
                            </Grid>
                            <Grid xs={4} item>
                                <CustomTextField />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* Delivery Fee Input */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={8} item>
                                <Typography className={classes.gridLabel}>配送料</Typography>
                            </Grid>
                            <Grid xs={4} item>
                                <CustomTextField />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
            </form>
        </PanelTemplate>
      )
}

export default ProductFormPanel