import React from 'react'
import {makeStyles,withStyles } from '@material-ui/styles'
import BasePanel from 'components/base/BasePanel';
import PanelHeader from 'components/base/PanelHeader';
import { Grid,Typography, Paper, TextField, MenuItem, Button} from "@material-ui/core"
import { TakePhoto, TagButton} from '../typo'
import TagsInput from 'react-tagsinput'
import { useForm, Controller  } from 'react-hook-form';
import '../store/tagInput.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles((theme) => ({
    root:{
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '95%',
        },
    },
    inputField:{
        flex: 1,
        fontSize: '15px',
        outline: 'none',
        border: '1px',
        width:'100%',
        height:'35px',
        background:'white',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#333333',
    
        '&::placeholder': {
            color: '#BDBDBD'
        },
    
        '&:-ms-input-placeholder': {
            color: '#BDBDBD'
        }
    },
    buttonWrapper:{
        width:'100%',
        margin:'auto',
        height:'10px',
    },
    headerLabel: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
    },
    errorMessage: {
        textAlign: 'initial',
        color:'red',
        paddingBottom:'10px'
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

const SaveButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #BBA884 30%, #BBA884 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 80px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);
const ProductFormPanel = (props) => {
    const classes = useStyles();
    const { handleChangePortfolio,handleSave,handleDelete,handleGoBack,
            handleTagChange,handleSuggestTagChange,deleteDisable,initData,
            confirmDelete, handleCloseConfirmDialog, hanleOnDelete} = props
    const { portfolios,label,number,tags,suggestTags,
            description,qty,shipDay,shipDays,shipper,shippers,price,dFee,portfolioError,tagError} = initData
    
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

    //make Product Form
    const { register, control, handleSubmit,errors } = useForm({
        defaultValues: {
            label:label,
            number:number,
            qty:qty,
            shipDay:shipDay,
            shipper:shipper,
            price:price,
            dFee:dFee
        },
    });
    const onSubmit = (data,mode) => {
        handleSave(data,mode)
    }
    //End Product Form making
    return (
        <BasePanel mode={0}>
            <PanelHeader 
              title="商品登録"
              leftButtonType={2}
              rightButtonType={0}
              handleLeftButton={handleGoBack}
            />
            <form>
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
                                portfolios.map((portfolio,index) =>  (
                                            <Grid item key={index} md={3} xs={6}>
                                                <TakePhoto 
                                                    handleChangePortfolio={handleChangePortfolio} 
                                                    key={index} 
                                                    index={index} 
                                                    image={portfolio}
                                                />
                                            </Grid>)
                                )
                            }
                        </Grid>
                    </Paper>
                    {portfolioError && 
                        <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                            商品写真を追加してください。
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.labelPanel}>
                        <Typography className={classes.label}>商品名</Typography>
                    </div>
                </Grid>
                {/**Label */}
                <Grid item xs={12}>
                    <input type="text" className={classes.inputField} name="label" ref={register({required:true})}/>
                    {errors.label && 
                        <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                            商品名を入力してください。
                        </Typography>
                    }
                </Grid>
                {/**Number */}
                <Grid item xs={12}>
                    <div className={classes.labelPanel}>
                        <Typography className={classes.label}>品番</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <input type="text" className={classes.inputField} name="number" ref={register({required:true})}/>
                    {errors.number && 
                        <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                            品番を入力してください。
                        </Typography>
                    }
                </Grid>
                {/** Tags */}
                <Grid item xs={12}>
                    <div className={classes.labelPanel}>
                        <Typography className={classes.label}>商品タグ</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <TagsInput  
                                    value={tags} 
                                    onChange={handleTagChange} 
                                    inputProps={tagInputProps} 
                                    tagProps={tagProps}
                                    onlyUnique={true}
                        />
                    </Paper>

                    {tagError && 
                        <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                        商品タグを追加してください。
                        </Typography>
                    }
                </Grid>
                {/**Suggested Tags */}
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
                                                <TagButton label={tag} key={i} index={i} handleClick={handleSuggestTagChange}/>
                                            )
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/**Description */}
                <Grid item xs={12} style={{background:'white'}}>
                    <Controller
                        as={TextField}
                        name="description"
                        control={control}
                        multiline
                        margin='normal'
                        rows={10}
                        defaultValue={description}
                        rules={{ required: true }}
                    />
                    {errors.description&& (
                        <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                        商品説明を入力してください。
                        </Typography>
                    )}
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
                                <input type="number" className={classes.inputField} name="qty" ref={register({required:true})}/>
                            </Grid>
                        </Grid>
                    </Paper>

                    {errors.qty && 
                        <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                        在庫数を入力してください。
                        </Typography>
                    }
                </Grid>
                {/* DeliveryDate Input */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={7} item style={{margin:'auto'}}>
                                <Typography className={classes.gridLabel} style={{margin:'auto'}}>発送までの日数</Typography>
                            </Grid>
                            <Grid xs={5} item>

                            <Controller
                                name="shipDay"
                                control={control}
                                rules={{ required: true }}
                                as={
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        value={shipDay}
                                        >
                                        {shipDays.map((option,index) => (
                                            <MenuItem key={1} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                </TextField>
                                }
                            />
                            </Grid>
                        </Grid>
                    </Paper>
                    {errors.shipDay&& (
                        <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                        発送までの日数を入力してください。
                        </Typography>
                    )}
                </Grid>
                {/* Shipper */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={7} item style={{margin:'auto'}}>
                                <Typography className={classes.gridLabel} style={{margin:'auto'}}>発送業者</Typography>
                            </Grid>
                            <Grid xs={5} item>
                                <Controller
                                    name="shipper"
                                    control={control}
                                    rules={{ required: true }}
                                    as={
                                        <TextField
                                            id="standard-select-currency"
                                            select
                                            value={shipper}
                                            >
                                            {shippers.map((option,index) => (
                                                <MenuItem key={1} value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                    </TextField>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                    {errors.shipper&& (
                        <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                        発送業者を入力してください。
                        </Typography>
                    )}
                </Grid>
                {/* Price Input */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={8} item>
                                <Typography className={classes.gridLabel}>商品代金（税込）</Typography>
                            </Grid>
                            <Grid item xs={1} style={{margin:'auto'}}>
                                <Typography style={{color:'#333333',fontWeight:'bold',fontSize:'20px'}}>¥</Typography>
                            </Grid>
                            <Grid xs={3} item>
                                <input type="number" style={{fontSize:'20px'}} className={classes.inputField} name="price" ref={register({required:true})}/>
                            </Grid>
                        </Grid>
                    </Paper>

                    {errors.price && 
                        <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                        商品代金（税込)を入力してください。
                        </Typography>
                    }
                </Grid>
                {/* dFee Input */}
                <Grid item xs={12}>
                    <Paper variant="outlined" square className={classes.gridPaper}>
                        <Grid container>
                            <Grid xs={8} item>
                                <Typography className={classes.gridLabel}>配送料</Typography>
                            </Grid>
                            <Grid xs={1} item style={{margin:'auto'}}>
                                <Typography style={{color:'#333333'}}>¥</Typography>
                            </Grid>
                            <Grid xs={3} item>
                                <input type="number" className={classes.inputField} name="dFee" ref={register({required:true})}/>
                            </Grid>
                        </Grid>
                    </Paper>

                    {errors.dFee     && 
                        <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                        配送料を入力してください。
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} style={{marginTop:'30px',textAlign:"center"}}>
                        <Grid item xs={12}>
                            <SaveButton onClick={handleSubmit((data) => onSubmit(data,1))}>保存する</SaveButton>
                        </Grid>
                        <Grid item xs={12}>
                            <SaveButton
                                style={{background: 'linear-gradient(45deg, #FFFFFF 30%, #FFFFFF 90%)',color:'#BDBDBD'}}
                                onClick={handleSubmit((data) => onSubmit(data,2))}>
                                下書きで保存する
                            </SaveButton>
                        </Grid>
                        <Grid item xs={12}>
                            <SaveButton
                                style={{background: 'linear-gradient(45deg, #D74936 30%, #D74936 90%)'}}
                                onClick={hanleOnDelete} disabled={deleteDisable}>
                                削除
                            </SaveButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </form>
            <Dialog
                open={confirmDelete}
                onClose={handleCloseConfirmDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"放送を開始しますか？"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    放送を開始しますか？
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseConfirmDialog} color="primary">
                    キャンセル
                </Button>
                <Button onClick={handleDelete} color="primary" autoFocus>
                    はい
                </Button>
                </DialogActions>
            </Dialog>
        </BasePanel>
      )
}

export default ProductFormPanel