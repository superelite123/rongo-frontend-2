import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import { Grid, Typography} from "@material-ui/core"
import ConfirmButton from 'components/base/ConfirmButton';
import Alert from '@material-ui/lab/Alert';
import BasePanel from 'components/base/BasePanel';
import PanelHeader from 'components/base/PanelHeader';
import { useForm  } from 'react-hook-form';
import {isMobile} from "react-device-detect"
const useStyles = makeStyles((theme) => ({
    header: {
        paddingTop: 'px',
        paddingBottom: 'px',
    },
    leftTopButton: {
        margin: '10px auto 6px auto'
    },
    searchButton: {
        verticalAlign: 'text-bottom',
        color: '#BBA884',
        fontSize: '1.5em'
    },
    headerLabel: {
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '17px',
        marginTop: '15px',
        marginBottom: '14px',
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
    topSeperate: {
        margin: 0,
        borderTopWidth: '0px',
        borderBottomWidth: '3px',
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderColor: '#BBA884'
    },
    labelPanel: {
        height: '70px',
        position: 'relative'
    },
    label: {
        color: '#A5A5A5',
        fontSize: '12px',
        position: 'absolute',
        bottom: '12px',
        textAlign: 'center',
        marginLeft: '17px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: 'normal'
    },
    bottomBtnWrapper: {
        marginTop: '34px',
        marginBottom: '16px',
        padding: '0 50px'
    },
    errorMessage: {
        textAlign: 'initial',
        color:'red',
        paddingBottom:'10px'
    },
}))


const ChangePasswordPanel = ({ showFollow,onSubmit, onReturn, onCloseAlert, hasUpdated }) => {

    const classes = useStyles();
    //generate form
    const { register, handleSubmit, watch,errors } = useForm();
    return (
        <BasePanel mode={0}>
            <PanelHeader 
              title="メールアドレス変更"
              leftButtonType={isMobile?2:0}
              rightButtonType={0}
              handleLeftButton={onReturn}
            />
            {
                hasUpdated &&
                <Grid item xs={12}>
                    <Alert severity="success" color="success" onClose={onCloseAlert}>
                        正しく更新されました。!
                    </Alert>
                </Grid>
            }
            <Grid item xs={12}>
                <div className={classes.labelPanel}>
                    <Typography className={classes.label}>現在のパスワード</Typography>
                </div>
            </Grid>
            <Grid item xs={12}>
                <input  type="password" className={classes.inputField} placeholder='入力してください'
                        name="password" ref={register({required:true})}/>
                {errors.password && 
                    <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                    *入力したパスワードが一致しません。
                    </Typography>
                }
            </Grid>
            <Grid item xs={12}>
                <div className={classes.labelPanel}>
                    <Typography className={classes.label}>新しいパスワード</Typography>
                </div>
            </Grid>
            <Grid item xs={12}>
                <input  type="password" className={classes.inputField} placeholder='半角英数字で8文字以上'
                        name="passwordConfirm" ref={register({
                            validate: (value) => value === watch('password')
                        })} required/>
                {errors.passwordConfirm && 
                    <Typography className={classes.errorMessage} variant="subtitle1" gutterBottom>
                        *入力したパスワードが一致しません。
                    </Typography>
                }
            </Grid>
            <Grid xs={12} item className={classes.bottomBtnWrapper}>
                <ConfirmButton onClick={handleSubmit((data) => onSubmit(data))}>変更する</ConfirmButton>
            </Grid>
        </BasePanel>
    )
}

export default ChangePasswordPanel;