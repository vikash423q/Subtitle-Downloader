import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(() => ({
    button: {
        display: 'block',
        textAlign: 'initial'
    },
    card: {
        marginRight: 2,
        width: 150,
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

const CardView = (props) => {
    const classes = useStyles();
    const { item } = props;
    return (
        <Card className={classes.card}>
            <ButtonBase className={classes.button} onClick={() => { }}>
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

export default CardView;