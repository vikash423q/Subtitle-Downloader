import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    card: {
        width: 160,
        height: 240
    },
    media: {
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    text: {
        fontSize: 15
    }
});

const CardView = (props) => {
    const classes = useStyles();
    const { item } = props;
    console.log(item);
    return (
        <Card className={classes.card}>
            <CardMedia
                classes={classes.media}
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
            </CardContent>
        </Card>
    );
}

export default CardView;