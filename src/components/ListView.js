import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CardView from './CardView';


const useStyles = makeStyles(theme => ({
    root: {
        marginRight: 10,
        marginLeft: 10,
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'lightGrey',
        elevation: 8
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
        marginTop: 5,
        minWidth: 165,
        overflow: 'hidden',
        height: '100% !important'
    }
}));


const ListView = (props) => {
    const classes = useStyles();
    var items = props.type !== 'skeleton' ? props.items : [{ imdbID: 1 }, { imdbID: 2 }, { imdbID: 3 }, { imdbID: 4 }, { imdbID: 5 }, { imdbID: 6 }, { imdbID: 7 }, { imdbID: 8 }, { imdbID: 9 }];
    items = items || [];
    console.log(props.type, items);
    return (
        <div className={classes.root} my="auto">
            <GridList className={classes.gridList} cols={10} my="auto">
                {items.map(item => (
                    <GridListTile className={classes.tile} key={item.imdbID}>
                        <CardView item={item} type={props.type} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}


export default ListView;