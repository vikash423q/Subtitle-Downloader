import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Close from '@material-ui/icons/Close';

const styles = {
    flex: {
        flex: 1
    },
    icon: {
        color: deepOrange
    }
}

const Header = (props) => {
    const { classes } = props;
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' color='inherit' className={classes.flex}>
                    Subtitle Downloader
                </Typography>
                <IconButton><Close className={classes.icon} /></IconButton>
            </Toolbar>
        </AppBar>
    );

}

export default withStyles(styles)(Header);