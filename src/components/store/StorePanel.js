import React,{ useState } from 'react'
import {makeStyles, withStyles} from '@material-ui/styles'
import SectionHeader from '../typo/SectionHeader'
import PanelTemplate from '../base/PanelTemplate'
import { Grid, Avatar, IconButton, Paper, 
         Badge, Typography, Button, Box, 
         TextField} 
        from "@material-ui/core"
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import TagsInput from 'react-tagsinput'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddIcon from '@material-ui/icons/Add';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import './tagInput.css'
const useStyles = makeStyles((theme) => ({
    root:{
      marginBottom:'50px'
    },
    listPaper:{
        paddingTop:theme.spacing(2),
        paddingBottom:theme.spacing(2)
    },
    avatar:{
        width:100,
        height:100
    },
    avatarBadge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: '$ripple 1.2s infinite ease-in-out',
          border: '1px solid currentColor',
          content: '""',
        },
    },
    avatarWrapper:{
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
        justifyContent: 'center'
    },
    label:{
        color:'#A5A5A5',
        fontWeight:"normal",
        fontSize:'13px',
        fontStyle:"normal",
        fontFamily:"Noto Sans JP",
        textAlign:"left",
        paddingBottom:theme.spacing(2),
        marginLeft:theme.spacing(1)
    },
    takePhotoPanel:{
        width:'93%',
        padding:'170px 0px',
        background:'#DEDCD4',
    },
    addBtn: {
        background: 'white',
        border: '2px solid #BDBDBD' ,
        fontSize: 16,
        borderRadius: 3,
        color: '#BDBDBD',
        height: 48,
        padding: '0 60px',
        marginTop:'30px',
    },
    listDescImage: {
        width:'100%',
        height: ''
    },
    BGTakePhoto:{
        width:'100%',
        padding:'100px 0px',
        background:'#e2e2e2',
    },
    confirmWrapper: {
        padding:'50px 0px',
    },
    confirmBtn:{
        background: '#BBA884',
        fontSize: 16,
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 60px',
    }
}));
const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 42,
      height: 42,
      border: `2px solid ${theme.palette.background.paper}`,
      cursor:'pointer'
    },
}))(Avatar);

const BackgroundWrapper = ({ onMouseEnter, onMouseLeave,handleChange,handleRemove, url, isHovering,index }) => {
    const sectionStyle = {
        width: "100%",
        height: "200px",
        backgroundColor:'rgb(0,0,0,0.2)',
        background: `url(${url})`,
        position:'relative',
        borderBottom:'2px solid white'
    };
    const layerStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent: 'center'
    }
    const cameraBtnStyle = {
        color:'white',
        fontSize:'12px',
        height:'50px'
    }
    const deleteBtnStyle = {
        color:'#D74936',
        fontSize:'12px',
        height:'50px'
    }
    
    return (
      <div style={ sectionStyle } onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        { 
           isHovering && 
           <div style={ layerStyle }>
                <input accept="image/*" hidden={true} id="fileImage" type="file" 
                onChange={(e) => handleChange(e,index)}/>
                <label htmlFor="fileImage">
                    <IconButton aria-label="upload picture" component="span" style={{color:'white'}}>
                        <PhotoCamera />変更
                    </IconButton>
                </label>

                <IconButton aria-label="takePhoto" style={deleteBtnStyle} onClick={() => handleRemove(index)}>
                    <IndeterminateCheckBoxIcon />削除
                </IconButton>
            </div>
        }
      </div>
    );
}
const StorePanel = ({nickname,avatar,description,tags,explantions,handleTagChange,
                    backgrounds,
                    handleBGMouseEnter,handleBGMouseLeave,
                    handleEMouseEnter,handleEMouseLeave,
                    isEHovered,isBGHovered,
                    handleChangeAvatar,
                    handleDescChange,
                    handleAdd1Explantion,handleAddExplantion,
                    handleChangeExplantion,handleRemoveExplantion,
                    selectedExplantion,
                    handleAddBackground,handleChangeBackground,handleRemoveBackground,
                    handleSubmit
                }) => {
    const classes = useStyles()
    const explantionStyle = selectedExplantion != null?`url(${selectedExplantion})`:'#DEDCD4'
    
    const selectedExplantionStyle = {
        width:'93%',
        padding:'170px 0px',
        background:explantionStyle,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
    };
    return (
        <PanelTemplate>
            <SectionHeader title={'ストア管理'} />
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.listPaper} variant="outlined" square>
                        <Grid container>
                            <Grid item xs={12} className={classes.avatarWrapper}>
                                <Avatar className={classes.avatar} src={avatar} />
                                <input accept="image/*" hidden={true} id="fileAvatar" 
                                onChange={handleChangeAvatar} type="file" />
                                <label htmlFor="fileAvatar">
                                    <Badge
                                        overlap="circle"
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                        }}
                                        badgeContent={<SmallAvatar alt="Remy Sharp"><PhotoCameraIcon/></SmallAvatar>}
                                    /> 
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="div">
                                <Box
                                    fontWeight="500"
                                    fontSize={16}
                                    fontStyle="normal"
                                    fontFamily="Noto Sans JP"
                                >{nickname}</Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.label} pt={5}>ストア説明文</Box>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="outlined" square>
                        <TextField
                            id="outlined-multiline-flexible"
                            multiline
                            rowsMax={15}
                            fullWidth 
                            defaultValue={description} 
                            onChange={handleDescChange}
                        />
                    </Paper>
                </Grid>
            
                <Grid item xs={12}>
                    <Box className={classes.label} pt={3}>ストア説明図</Box>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.listPaper} variant="outlined" square>
                        <div style={selectedExplantionStyle}>
                            <input accept="image/*" hidden={true} id="fileDescriptionImage" type="file" 
                            onChange={handleAddExplantion} />
                            <label htmlFor="fileDescriptionImage">
                                <IconButton style={{color:'white'}} aria-label="upload picture" component="span">
                                    <PhotoCamera />追加
                                </IconButton>
                            </label>
                        </div>

                        <Button className={classes.addBtn} onClick={handleAdd1Explantion} variant="outlined" size="large">
                            <AddIcon />    ストア説明図を追加する
                        </Button>
                    </Paper>
                </Grid>
                
                <Grid item xs={12}>
                    {explantions.map((el, index) => (
                        <BackgroundWrapper
                            onMouseEnter={() => handleEMouseEnter(index)}
                            onMouseLeave={() => handleEMouseLeave(index)}
                            url={el}
                            isHovering={isEHovered[index]}
                            handleChange={handleChangeExplantion}
                            handleRemove={handleRemoveExplantion}
                            index={index}
                            key={index}
                        />
                    ))}
                </Grid>

                <Grid item xs={12}>
                    <Box className={classes.label} pt={3}>ストアタグ</Box>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.listPaper} variant="outlined" square>
                        <TagsInput value={tags} onChange={handleTagChange} placeholder=""/>
                    </Paper>
                </Grid>
                
                <Grid item xs={12}>
                    <Box className={classes.label} pt={3}>ストアタグ</Box>
                </Grid>
                <Grid item xs={12}>
                    {backgrounds.map((el, index) => (
                        <BackgroundWrapper
                            onMouseEnter={() => handleBGMouseEnter(index)}
                            onMouseLeave={() => handleBGMouseLeave(index)}
                            url={el}
                            handleChange={handleChangeBackground}
                            handleRemove={handleRemoveBackground}
                            index={index}
                            isHovering={isBGHovered[index]}
                            key={index}
                        />
                    ))}
                    <div className={classes.BGTakePhoto}>
                        <input accept="image/*" hidden={true} onChange={handleAddBackground} id="fileBGImage" type="file" />
                        <label htmlFor="fileBGImage">
                            <IconButton style={{color:'white'}} aria-label="upload picture" component="span">
                                <PhotoCamera />
                                追加
                            </IconButton>
                        </label>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.confirmWrapper} variant="outlined" square>
                        <Button onClick={handleSubmit} className={classes.confirmBtn} variant="outlined">変更する</Button>
                    </Paper>
                </Grid>

            </Grid>
        </PanelTemplate>
      )
}

export default StorePanel