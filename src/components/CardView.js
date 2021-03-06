import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';
import ButtonBase from '@material-ui/core/ButtonBase';
import Skeleton from '@material-ui/lab/Skeleton';
import { LIST_MOVIES_SUBTITLES, LIST_SERIES_EPISODES, apikey } from '../config';
import { select_show, download_subtitle, type_change } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles(() => ({
    button: {
        display: 'block',
        textAlign: 'initial'
    },
    card: {
        marginLeft: 1.5,
        marginRight: 1.5,
        width: 160,
        height: 240,
        color: blueGrey
    },
    media: {
        backgroundPosition: 'center',
        objectFit: 'scale-down'
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto',
        lineHeight: 1
    },
    subtext: {
        fontSize: 14,
        fontWeight: 200,
        fontFamily: 'Roboto',
        color: 'Grey'
    }
}));

const onclick = (props) => {
    var type = props.type;
    var show = props.item;
    if (type === 'skeleton') return;

    if (type === 'movie') {
        props.openSelected(type, show, [], true);
        props.changeType(type);
        fetch(LIST_MOVIES_SUBTITLES(show.imdbID)).then((res) => res.json())
            .then((body) => props.openSelected(type, show, body.data, false));

    } else if (type === 'series') {
        props.selectShow(type, show, {}, true);
        fetch(LIST_SERIES_EPISODES(show.imdbID, 1, apikey)).then((res) => res.json())
            .then((body) => props.selectShow(type, show, body, false));
    }
}

const CardView = (props) => {
    const classes = useStyles();
    const { item, type } = props;
    return (
        <Card className={classes.card}>
            <ButtonBase className={classes.button} onClick={() => onclick(props)} >
                {type !== 'skeleton' ?
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt={item.Title}
                        height="160"
                        src={item.Poster}
                        title={item.Title}
                    /> :
                    <Skeleton variant="rect" className={classes.media} height={160} width={160} />}
                <CardContent>
                    {type !== 'skeleton' ?
                        <Typography variant="caption" className={classes.text}>
                            {item.Title}
                        </Typography> :
                        <Skeleton variant="rect" width="100%" />}
                    <br />
                    {type !== 'skeleton' ?
                        <Typography variant="subtitle1" className={classes.subtext}>
                            Release : {item.Year}
                        </Typography> :
                        <Skeleton variant="rect" width="60%" />}
                </CardContent>
            </ButtonBase>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ openSelected: download_subtitle, selectShow: select_show, changeType: type_change }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardView);