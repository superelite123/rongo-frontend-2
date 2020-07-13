import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { SvgIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    base: {
        verticalAlign: 'text-top',
    }
}))

const FavoriteStarIcon = ({className}) => {
    const classes = useStyles();

    return (
        <SvgIcon viewBox={'0 0 172 172'} className={className}>
            <g id="original-icon" fill="#bba884"><path d="M86,129.65217l35.61117,21.49283c5.61867,3.38983 12.54883,-1.64833 11.05817,-8.03383l-9.45283,-40.51317l31.46883,-27.262c4.95933,-4.29283 2.30767,-12.44133 -4.22833,-12.99317l-41.42333,-3.51167l-16.20383,-38.23417c-2.5585,-6.02717 -11.10117,-6.02717 -13.65967,0l-16.20383,38.23417l-41.42333,3.51167c-6.536,0.55183 -9.18767,8.70033 -4.22833,12.99317l31.46883,27.262l-9.45283,40.51317c-1.49067,6.3855 5.4395,11.42367 11.05817,8.03383z"></path></g>
        </SvgIcon>
    )
}

export default FavoriteStarIcon;