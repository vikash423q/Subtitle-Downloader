import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ListView from './ListView';

const styles = {
    root: {
        height: 250,
    },
}

const skeleton = {
    items: [],
    type: 'skeleton'
}

class Catalog extends Component {

    constructor(props) {
        super();
        this.props = props;
    }



    render() {
        return (
            <Grid className={this.props.classes.root} my="auto">
                {this.props.type !== 'skeleton' ?
                    (this.props.type !== null ? <ListView items={this.props.items} type={this.props.type} /> : null) :
                    <ListView items={skeleton.items} type={skeleton.type} />}
            </Grid>
        );
    }
}

export default withStyles(styles)(Catalog);