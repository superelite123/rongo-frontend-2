
import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { SvgIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    base: {
        verticalAlign: 'text-top',
    }
}))

const EmojiEmotionlessIcon = () => {
    const classes = useStyles();

    return (
        <SvgIcon viewBox={'0 0 172 172'} className={classes.base}>
            <g fill="#bdbdbd"><path d="M86,14.33333c-39.517,0 -71.66667,32.14967 -71.66667,71.66667c0,39.517 32.14967,71.66667 71.66667,71.66667c39.517,0 71.66667,-32.14967 71.66667,-71.66667c0,-39.517 -32.14967,-71.66667 -71.66667,-71.66667zM46.58333,71.552c0,-5.934 4.816,-10.75 10.75,-10.75c5.934,0 10.75,4.816 10.75,10.75c0,5.934 -4.816,10.75 -10.75,10.75c-5.934,0 -10.75,-4.816 -10.75,-10.75zM107.5,121.83333h-43c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667v0c0,-3.956 3.21067,-7.16667 7.16667,-7.16667h43c3.956,0 7.16667,3.21067 7.16667,7.16667v0c0,3.956 -3.21067,7.16667 -7.16667,7.16667zM114.66667,82.302c-5.934,0 -10.75,-4.816 -10.75,-10.75c0,-5.934 4.816,-10.75 10.75,-10.75c5.934,0 10.75,4.816 10.75,10.75c0,5.934 -4.816,10.75 -10.75,10.75z"></path></g>
        </SvgIcon>
    )
}

export default EmojiEmotionlessIcon;