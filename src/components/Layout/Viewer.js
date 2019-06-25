import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import SearchBar from '../SearchBar';

const styles = {
    grid: {
        marginTop: 4,
        marginBottom: 4,
    },
    paper: {
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        height: 500
    },
    container: {
        display: 'flex',
        flexWrap: 'no-wrap',
        margin: 10
    },
    margin: {
        margin: 5
    }
}

const Viewer = ({ classes }) => {
    return (
        <Grid className={classes.grid}>
            <Paper className={classes.paper}>
                <SearchBar/>
            </Paper>
        </Grid >
    )
}

export default withStyles(styles)(Viewer);
