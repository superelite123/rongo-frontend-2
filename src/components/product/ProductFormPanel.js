import React,{ useState } from 'react'
import {makeStyles, } from '@material-ui/styles'
import SectionHeader from '../typo/SectionHeader'
import PanelTemplate from '../base/PanelTemplate'
import DefaultButton from '../base/DefaultButton'
import { Grid,Typography, Box, Paper, TextField, MenuItem} from "@material-ui/core"
import { TakePhoto, CustomTextField, TagButton} from '../typo'
import TagsInput from 'react-tagsinput'
import '../store/tagInput.css'


const useStyles = makeStyles((theme) => ({
    root:{
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '95%',
        },
    },
    buttonWrapper:{
        width:'100%',
        margin:'auto',
        height:'100px',
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
const ProductFormPanel = (props) => {
    const classes = useStyles();
    const { handleChangePortfolio,handleChangeInput,handleTagChange,
            tags,portfolios,suggestTags,errors,currencies} = props
    const takePhotos = [];
    const tagInputProps = {
        className: 'react-tagsinput-input',
        placeholder: ''
    }
    const tagProps = {
        className: 'react-tagsinput-tag',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        padding: '7px 12px'
    }
    for(let i = 0; i < 8; i ++)
    {
        takePhotos[i] = <TakePhoto handleChangePortfolio={handleChangePortfolio} key={i} index={i} image={null}/>
    }
    return (
        <PanelTemplate>
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
                            portfolios.map((portfolio,index) => {
                                return <Grid item key={index} md={3} xs={6}>
                                            <TakePhoto 
                                                handleChangePortfolio={handleChangePortfolio} 
                                                key={index} 
                                                index={index} 
                                                image={portfolio}
                                            />
                                        </Grid>
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
                {/**Label Input */}
                <Grid item xs={12}>
                    <CustomTextField name='label' handleClick={handleChangeInput} />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.labelPanel}>
                        <Typography className={classes.label}>品番</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <CustomTextField name='number' handleClick={handleChangeInput} />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.labelPanel}>
                        <Typography className={classes.label}>商品タグ</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <TagsInput  value={tags} 
                                    onChange={handleTagChange} 
                                    inputProps={tagInputProps} 
                                    tagProps={tagProps}
                        />
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
                                    {
                                        suggestTags.map(
                                            (tag,i) => 
                                                <TagButton label={tag} key={i} index={i} handleClick={handleTagChange}/>
                                            )
                                    }
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
                {/**Description */}
                <Grid item xs={12} style={{background:'white'}}>
                    <TextField
                        error={errors.label}
                        handleClick={handleChangeInput} 
                        name='description'
                        id="outlined-multiline-static"
                        multiline
                        margin='normal'
                        rows={10}
                        defaultValue=""
                    />
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
                                <CustomTextField name='qty' handleClick={handleChangeInput} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* DeliveryDat Input */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={7} item style={{margin:'auto'}}>
                                <Typography className={classes.gridLabel} style={{margin:'auto'}}>発送までの日数</Typography>
                            </Grid>
                            <Grid xs={5} item>
                                <TextField
                                        id="standard-select-currency"
                                        select
                                        label="選択してください"
                                        value='EUR'
                                        >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* DeliveryDat Input */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={7} item style={{margin:'auto'}}>
                                <Typography className={classes.gridLabel} style={{margin:'auto'}}>発送業者</Typography>
                            </Grid>
                            <Grid xs={5} item>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="選択してください"
                                    value='EUR'
                                    >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
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
                                <CustomTextField  name='price' handleClick={handleChangeInput} />
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
                                <CustomTextField name='dFee' handleClick={handleChangeInput}  />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/**Button Group */}        
                <Grid item xs={12}>
                    <Box component='div' className={classes.buttonWrapper}>
                        <DefaultButton>登録する</DefaultButton>
                    </Box>
                </Grid>
            </Grid>
        </PanelTemplate>
      )
}

export default ProductFormPanel