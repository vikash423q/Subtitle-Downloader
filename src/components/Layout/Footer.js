import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import amber from '@material-ui/core/colors/amber';


const styles = {
    app: {
        padding: 5
    }

}


const Footer = (props) => {
    const { classes } = props;
    return (
        <AppBar position='static' className={classes.app}>
            <Typography >Subtitle DownloaderV.1 @2019</Typography>
        </AppBar>
    );

}

export default withStyles(styles)(Footer);