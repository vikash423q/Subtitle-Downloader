import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import withStyles from '@material-ui/styles/withStyles';
import React from 'react';
import SubtitleView from './SubtitleView';

const styles = {
    root: {
        paddingBottom: 40,
        minHeight: 320
    },
    media: {
        backgroundPosition: 'center',
        objectFit: 'scale-down',
        minHeight: 200
    }

}

const poster = (item, classes) => {
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.Poster}
                    title={item.Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.Title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const view = (props) => {
    return (
        <React.Fragment>
            <Grid item md={8}>
                <SubtitleView />
            </Grid>
            <Grid item md={4}>
            </Grid>
        </React.Fragment>
    );
}

const DownloadView = (props) => {
    const { classes } = props;
    return (
        <Grid container className={classes.root}>
            {view(props)}
        </Grid >
    );
}
export default withStyles(styles)(DownloadView);