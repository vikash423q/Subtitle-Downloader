import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = {
    root: {
        height: 320
    }
}

const DownloadView = (props) => {
    const { classes } = props;
    console.log('printing props');
    console.log(props);
    return (
        <Grid className={classes.root}>

        </Grid >
    );
}

const mapStateToProps = (state) => {
    return { type: state.download.type, show: state.download.show, subtitles: state.download.subtitles };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DownloadView));