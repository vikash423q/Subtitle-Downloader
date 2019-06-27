import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import CardView from './CardView';


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    tile: {
        position: 'relative',
        float: 'left',
        width: '100%',
        margin: 2,
        minWidth: 160,
        minHeight: 250,
        overflow: 'hidden',
        height: '100% !important'
    }
}));


const MovieView = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={10}>
                {props.items.map(item => (
                    <GridListTile className={classes.tile} key={item.Poster}>
                        <CardView item={item} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}


export default MovieView;