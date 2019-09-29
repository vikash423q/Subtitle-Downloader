import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import SubtitleDownloader from './SubtitleDownloader';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Skeleton from '@material-ui/lab/Skeleton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { change_season, change_episodes, select_episode, load_subtitles } from '../actions';
import { LIST_SERIES_EPISODES, apikey, LIST_SERIES_SUBTITLES } from '../config';



const styles = {
    root: {
        marginTop: 16
    },
    lang: {
        margin: 15,
        display: 'flex',
        flexWrap: 'no-wrap'
    },
    subtitle: {
        margin: 15,
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300
    },
    subselect: {
        marginLeft: 15
    },
    textSkeleton: {
        marginLeft: 15,
    },
    text: {
        display: 'inline',
        margin: 20,
        marginTop: 35,
        paddingRight: 15
    },
    fab: {
        marginTop: 35,
        marginLeft: 15
    },
    extendedIcon: {
        margin: 2,
        marginLeft: 8,
        marginRight: 10,

    }
}

const getEpisodes = (props, season) => {
    console.log('getting episodes');
    props.seasonChanged(season);
    fetch(LIST_SERIES_EPISODES(props.show.imdbID, season, apikey)).then(res => res.json())
        .then(data => { props.episodesChanged(data.Episodes) });
}

const getSubtitles = (props, episode) => {
    console.log('getting subtitles');
    props.episodeSelected(episode);
    fetch(LIST_SERIES_SUBTITLES(props.show.imdbID, props.season, episode)).then(res => res.json())
        .then(data => props.subtitlesLoaded(data.data));
}


const SubtitleView = (props) => {
    const { classes } = props;
    console.log(props);

    return (
        <React.Fragment>
            {props.type !== 'series' ? null :
                <Grid container className={classes.root}>
                    <Grid item xs={6} sm={4}>
                        {props.loading && !props.download ? <Skeleton className={classes.lang} height={50} width="90%" /> :
                            <FormControl variant="filled" className={classes.lang}>
                                <InputLabel htmlFor="filled-season-simple">Season</InputLabel>
                                <Select
                                    value={props.season}
                                    onChange={(e) => { getEpisodes(props, e.target.value) }}
                                    inputProps={{
                                        name: 'season',
                                        id: 'filled-season-simple'
                                    }}
                                >
                                    {[...Array(props.seasons)].map((item, idx) => <MenuItem value={idx + 1} key={idx}>{(idx < 9 ? "S0" : "S") + (idx + 1)}</MenuItem>)}
                                </Select>
                            </FormControl>
                        }
                    </Grid>
                    <Grid item xs={9} sm={8}>
                        {props.loading && !props.download ? <Skeleton className={classes.subtitle} height={50} width="100%" /> :
                            <FormControl variant="filled" className={classes.subtitle}>
                                <InputLabel htmlFor="filled-episode-simple">Episode</InputLabel>
                                <Select
                                    value={props.episode}
                                    onChange={(e) => { getSubtitles(props, e.target.value) }}
                                    inputProps={{
                                        name: 'episode',
                                        id: 'filled-episode-simple'
                                    }}
                                >
                                    {props.episodes.map((item, idx) => <MenuItem value={parseInt(item.Episode, 10)} key={idx}>{(item.Episode.length === 1 ? "E0" : "E") + item.Episode + ". " + item.Title}</MenuItem>)}
                                </Select>
                            </FormControl>
                        }
                    </Grid>
                </Grid>
            }
            <SubtitleDownloader />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        type: state.subtitle.type, show: state.subtitle.show, season: state.subtitle.season, episodes: state.subtitle.episodes,
        episode: state.subtitle.episode, subtitles: state.subtitle.subtitles, loading: state.subtitle.load, seasons: state.subtitle.seasons,
        download: state.subtitle.download
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        episodesChanged: change_episodes, seasonChanged: change_season,
        episodeSelected: select_episode, subtitlesLoaded: load_subtitles
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SubtitleView));