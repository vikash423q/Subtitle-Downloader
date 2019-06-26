import React, { Component } from 'react';

class SeriesView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item
        }
    }

    render() {
        return (
            <div>{this.props.item}</div>
        );
    }
}

export default SeriesView;