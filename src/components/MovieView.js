import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import GridList from '@material-ui/core/GridList';
import CardView from './CardView';


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    gridList: {
        flex: 'no-wrap',
        transform: 'translateZ(0)'

    }
}))

const MovieView = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={3}>
                {props.items.map((item) =>
                    <CardView item={item} />
                )}
            </GridList>
        </div>
    );
}


export default MovieView;