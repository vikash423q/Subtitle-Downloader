import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import { GET_MOVIE_IMDBID, LIST_MOVIES_SUBTITLES, apikey } from '../../config';
import SearchBar from '../SearchBar';
import Catalog from '../Catalog';
import DownloadView from '../DownloadView';

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

class Viewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view_selected: null,
            searchText: null,
            options: []
        }
    }

    loadResults = (view, text) => {
        fetch(GET_MOVIE_IMDBID(text, apikey)).then((results) => results.json()).then((res) => this.setState({
            options: res['Search'], view_selected: view,
            searchText: text
        }));
    }


    selectView = (view, text) => {
        console.log(view, text);
        this.loadResults(view, text);
    }


    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.grid}>
                <Paper className={classes.paper}>
                    <SearchBar click={this.selectView} />
                    <Catalog type={this.state.view_selected} items={this.state.options} />
                    <DownloadView />
                </Paper>
            </Grid >
        );
    }
}

export default withStyles(styles)(Viewer);
