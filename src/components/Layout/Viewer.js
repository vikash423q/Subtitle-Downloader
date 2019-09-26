import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import { GET_MOVIE_IMDBID, LIST_MOVIES_SUBTITLES, GET_SERIES_IMDBID, apikey } from '../../config';
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
        paddingRight: 5
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
            type: null,
            term: null,
            items: []
        }
    }

    loadMovies = (type, term) => {
        fetch(GET_MOVIE_IMDBID(term, apikey)).then((results) => results.json()).then((res) => this.setState({
            items: res['Search'], type: type
        }));
    }

    loadSeries = (type, term) => {
        fetch(GET_SERIES_IMDBID(term, apikey)).then((results) => results.json()).then((res) => this.setState({
            items: res['Search'], type: type
        }));
    }


    selectView = (type, term) => {
        console.log(type, term);
        if (type === 'movie')
            this.loadMovies(type, term);
        else if (type === 'series')
            this.loadSeries(type, term);
    }


    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.grid}>
                <Paper className={classes.paper}>
                    <SearchBar click={this.selectView} />
                    <Catalog type={this.state.type} items={this.state.items} />
                    <DownloadView />
                </Paper>
            </Grid >
        );
    }
}

export default withStyles(styles)(Viewer);
