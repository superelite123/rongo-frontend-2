import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#333333',
    },
}))
const NavigationWrapper = withStyles({
    root: {
      backgroundColor: '#333333',
      justifyContent:'left',
      color: 'white',
    },
  })(BottomNavigation);
const BlankFooter = () => {
    return (
        <NavigationWrapper showLabels={true}>
        </NavigationWrapper>
    )
}

export default BlankFooter