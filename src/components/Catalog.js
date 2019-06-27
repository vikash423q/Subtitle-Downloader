import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MovieView from './MovieView';
import SeriesView from './SeriesView';

class Catalog extends Component {


    render() {
        return (
            <Grid>
                {this.props.type != null ? (this.props.type === 'movie' ? <MovieView items={this.props.items} /> : <SeriesView items={this.props.items} />) : null}
            </Grid>
        );
    }
}

export default Catalog;