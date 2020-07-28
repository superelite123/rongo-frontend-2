import React from 'react'
import { makeStyles, withStyles } from '@material-ui/styles'
import {
    Grid, Avatar, IconButton, Paper,
    Badge, Typography, Button, Box,
    TextField
}
    from "@material-ui/core"
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import TagsInput from 'react-tagsinput'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddIcon from '@material-ui/icons/Add';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import './tagInput.css'
import PanelHeader from 'components/base/PanelHeader';
import BasePanel from 'components/base/BasePanel';
import {isMobile} from "react-device-detect";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    listPaper: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    avatar: {
        width: 100,
        height: 100
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
    avatarWrapper: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    label: {
        color: '#A5A5A5',
        fontWeight: "normal",
        fontSize: '13px',
        fontStyle: "normal",
        fontFamily: "Noto Sans JP",
        textAlign: "left",
        paddingBottom: theme.spacing(2),
        marginLeft: theme.spacing(1)
    },
    takePhotoPanel: {
        width: '93%',
        padding: '170px 0px',
        background: '#DEDCD4',
    },
    addBtn: {
        background: 'white',
        border: '2px solid #BDBDBD',
        fontStyle: "normal",
        fontWeight: "500",
        fontFamily: "Noto Sans JP",
        fontSize: 15,
        borderRadius: 3,
        color: '#BDBDBD',
        height: 48,
        padding: '0 60px',
        marginLeft:isMobile?'9%':'18%',
        marginTop: '30px',
    },
    listDescImage: {
        width: '100%',
        height: ''
    },
    BGTakePhoto: {
        width: '100%',
        padding: '100px 0px',
        background: '#e2e2e2',
    },
    confirmWrapper: {
        padding: '50px 0px',
    },
    confirmBtn: {
        background: '#BBA884',
        fontSize: 16,
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 60px',
        marginLeft:isMobile?'25%':'30%'
    },
    nameField: {
        border: '0 solid black',
        flexGrow: '1',
        borderRadius: '5px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },
    input: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
    },
    buttonTitleStyle: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
    }
}));
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 42,
        height: 42,
        border: `0px solid ${theme.palette.background.paper}`,
        cursor: 'pointer',
        borderRadius: 0,
        background: '#00000000'
    },
}))(Avatar);

const BackgroundWrapper = ({ onMouseEnter, onMouseLeave, handleChange, handleRemove, url, isHovering, index,attrName }) => {
    const sectionStyle = {
        width: "100%",
        height: "200px",
        backgroundColor: 'rgb(0,0,0,0.2)',
        background: `url(${url})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        borderBottom: '2px solid white'
    };
    const layerStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
    const deleteBtnStyle = {
        color: '#D74936',
        fontSize: '12px',
        height: '50px'
    }

    const buttonTitleStyle = {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
    }
    const attr = attrName + index
    return (
        <div style={sectionStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {
                isHovering &&
                <div style={layerStyle}>
                    <input  accept="image/*" hidden={true} id={attr} type="file"
                            onChange={(e) => handleChange(e, index)} />
                    <div style={{ margin: 'auto' }} >
                    <label htmlFor={attr}>
                        <IconButton aria-label="upload picture" component="span" style={{ color: 'white' }}>
                            <div col>
                                <PhotoCamera row />
                                <div col style={buttonTitleStyle}>変更</div>
                            </div>
                        </IconButton>
                    </label>

                        <IconButton aria-label="takePhoto" component="span" style={deleteBtnStyle} onClick={() => handleRemove(index)}>
                            <div col>
                                <IndeterminateCheckBoxIcon row style={{ marginBottom: '4px' }} />
                                <div col style={buttonTitleStyle}>削除</div>
                            </div>
                        </IconButton>
                    </div>

                </div>
            }
        </div>
    );
}
const StorePanel = ({ nickname, avatar, description, tags, explantions, handleTagChange,
    backgrounds,
    handleBGMouseEnter, handleBGMouseLeave,
    handleEMouseEnter, handleEMouseLeave,
    isEHovered, isBGHovered,
    handleChangeAvatar,
    handleDescChange,
    handleAdd1Explantion, handleAddExplantion,
    handleChangeExplantion, handleRemoveExplantion,
    selectedExplantion,
    handleAddBackground, handleChangeBackground, handleRemoveBackground,
    handleSubmit,onGoBack,
    handleCloseSnackbar,saveSuccess
}) => {
    const classes = useStyles()
    const explantionStyle = selectedExplantion != null ? `url(${selectedExplantion})` : '#DEDCD4'

    const selectedExplantionStyle = {
        width: '93%',
        margin:'auto',
        padding: '170px 0px',
        background: explantionStyle,
        backgroundRepeat: '100% 100%',
        backgroundSize: 'auto',
    };

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
    return (
        <BasePanel mode={0}>
            <PanelHeader 
              title="ストア管理"
              leftButtonType={isMobile?2:0}
              rightButtonType={0}
              handleLeftButton={onGoBack}
            />
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
                                        badgeContent={<SmallAvatar alt="Remy Sharp"><PhotoCameraIcon style={{color: '#DEDCD4', marginLeft: '-20px'}}/></SmallAvatar>}
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
                                        textAlign="center"
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
                    <Paper variant="outlined" square style={{ display: 'flex', marginBottom: '0', padding: '16px' }}>
                        <TextField
                            id="outlined-multiline-flexible"
                            classes={classes.nameField}
                            multiline
                            rowsMax={15}
                            fullWidth
                            defaultValue={description}
                            onChange={handleDescChange}
                            InputProps={{ classes }}
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
                            <div style={{width:'100%',marginLeft:'42%'}}>
                                <label htmlFor="fileDescriptionImage">
                                    <IconButton style={{ color: 'white' }} aria-label="upload picture" component="span">
                                        <div col>
                                            <PhotoCamera row />
                                            <div col className={classes.buttonTitleStyle}>追加</div>
                                        </div>
                                    </IconButton>
                                </label>
                            </div>
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
                            //isHovering={true}
                            isHovering={isEHovered[index]}
                            handleChange={handleChangeExplantion}
                            handleRemove={handleRemoveExplantion}
                            index={index}
                            key={index}
                            attrName='explantion'
                        />
                    ))}
                </Grid>

                <Grid item xs={12}>
                    <Box className={classes.label} pt={3}>ストアタグ</Box>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.listPaper} variant="outlined" square>
                        <TagsInput value={tags} onChange={handleTagChange} inputProps={tagInputProps} tagProps = {tagProps} />
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
                            attrName='background'
                        />
                    ))}
                    <div className={classes.BGTakePhoto}>
                        <input accept="image/*" hidden={true} onChange={handleAddBackground} id="fileBGImage" type="file" />
                        <div style={{marginLeft:'42%'}}>
                            <label htmlFor="fileBGImage">
                                <IconButton style={{ color: 'white' }} aria-label="upload picture" component="span">
                                    <div col>
                                        <PhotoCamera row />
                                        <div col className={classes.buttonTitleStyle}>追加</div>
                                    </div>
                                </IconButton>
                            </label>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.confirmWrapper} variant="outlined" square>
                        <Button onClick={handleSubmit} className={classes.confirmBtn} variant="outlined">変更する</Button>
                    </Paper>
                </Grid>
                <Snackbar anchorOrigin={{ vertical:'top', horizontal:'center' }} style={{marginTop:'50px'}} open={saveSuccess} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success">
                    ストア－情報が正常に保存されました。
                    </Alert>
                </Snackbar>
            </Grid>
        </BasePanel>
    )
}

export default StorePanel