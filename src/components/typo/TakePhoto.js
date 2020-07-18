import React, { useState, useRef  } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
const useStyles = makeStyles((theme) => ({
  root:{
    background:'#DEDCD4',
    color:'white',
    width:'82px',
    height:'82px',
    display: 'flex',
    cursor:'pointer'
  },
  cameraIcon: {
    margin: 'auto'
  },
  img: {
    width:'100%',
    height:'100%'
  }
}));

const TakePhoto = ({handleChange}) => {
    const classes = useStyles();
    const inputRef = useRef();
    const [imgBase64, setImgBase64] = useState(""); 
    const [imgFile, setImgFile] = useState(null);
    const handleClick = (e) => {
      this.inputElement.click();
    }
    const handleChangeFile = (event) => {
      let reader = new FileReader();
  
      reader.onloadend = () => {
        // 2. 읽기가 완료되면 아래코드가 실행됩니다.
        const base64 = reader.result;
        if (base64) {
          setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
        }
      }
      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
        setImgFile(event.target.files[0]); // 파일 상태 업데이트
      }
    }

    return (
      <div className={classes.root} onClick={handleClick} >
        { imgFile == null && <PhotoCameraIcon className={classes.cameraIcon}/> }
        <input type="file" name="imgFile" id="imgFile" hidden={true} onChange={handleChangeFile} accept="image/*" />
        { imgFile != null && <img className={classes.img} src={process.env.PUBLIC_URL + '/images/logo.png'} /> }
      </div>
    )
}

export default TakePhoto
