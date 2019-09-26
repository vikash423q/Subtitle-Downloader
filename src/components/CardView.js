import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';
import ButtonBase from '@material-ui/core/ButtonBase';
import request from 'request';
import { LIST_MOVIES_SUBTITLES, LIST_SERIES_SUBTITLES } from '../config';
import { select_show } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles(() => ({
    button: {
        display: 'block',
        textAlign: 'initial'
    },
    card: {
        marginRight: 2,
        width: 160,
        height: 240,
        color: blueGrey
    },
    media: {
        backgroundPosition: 'center',
        objectFit: 'scale-down'
    },
    text: {
        fontSize: 15,
        fontFamily: 'Roboto'
    }
}));

const onclick = (props) => {
    var type = props.type;
    var show = props.show;
    var subtitles = [];
    if (type === 'movie') {
        request.get(LIST_MOVIES_SUBTITLES(show.imdbID), (err, res, body) => {
            if (err) { console.log(err); }
            if (body.message !== 'success') { return console.log(body.message); }
            subtitles = body.data;
            return props.selectShow(type, show, subtitles);
        });
    } else if (type === 'series') {
        request.get(LIST_SERIES_SUBTITLES(show.imdbID), (err, res, body) => {
            if (err) { console.log(err); }
            if (body.message !== 'success') { return console.log(body.message); }
            subtitles = body.data;
            return props.selectShow(type, show, subtitles);
        });
    }
}

const CardView = (props) => {
    const classes = useStyles();
    const { item } = props;
    console.log(item);
    return (
        <Card className={classes.card}>
            <ButtonBase className={classes.button} onClick={() => onclick(props)} >
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt={item.Title}
                    height="160"
                    src={item.Poster}
                    title={item.Title}
                />
                <CardContent>
                    <Typography variant="p" className={classes.text}>
                        {item.Title}
                    </Typography>
                    <br />
                    <Typography variant="p" className={classes.text}>
                        Year : {item.Year}
                    </Typography>
                </CardContent>
            </ButtonBase>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectShow: select_show }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardView);