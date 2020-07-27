import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import VideocamIcon from '@material-ui/icons/Videocam';
import NotificationsIcon from '@material-ui/icons/Notifications';
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#333333',
        height:'100%'
    },
}))
const NavigationWrapper = withStyles({
    root: {
      backgroundColor: '#333333',
      justifyContent:'left',
      color: 'white',
    },
  })(BottomNavigation);
  const NavigationAction = withStyles({
    root: {
      color: 'white',
    },
  })(BottomNavigationAction);
const HomeFooter = ({mode}) => {
    const classes = useStyles();
    const navigationMode = mode !== 0
    return (
        <NavigationWrapper style={{width: "100%"}} showLabels={true} >
            {
              navigationMode && 
              <NavigationAction href='/home' label="ホーム" value="home" icon={<HomeIcon />} />
            }
            {
              navigationMode && 
              <NavigationAction href='/live' label="配信" value="live" icon={<VideocamIcon />} />
            }
            {
              navigationMode && 
              <NavigationAction label="お知らせ" value="notification" icon={<NotificationsIcon />} />
            }
        </NavigationWrapper>
    )
}

export default HomeFooter