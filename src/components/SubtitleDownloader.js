import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { Typography, Fab } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Skeleton from '@material-ui/lab/Skeleton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { change_language, select_subtitle } from '../actions';

const styles = {
    root: {
        marginTop: 10
    },
    lang: {
        margin: 15,
        display: 'flex',
        flexWrap: 'no-wrap'
    },
    subtitle: {
        margin: 15,
        display: 'flex',
        flexWrap: 'no-wrap',
        minWidth: 300,
        maxWidth: 700
    },
    textSkeleton: {
        marginLeft: 15,
    },
    text: {
        display: 'inline',
        margin: 15,
        marginTop: 40,
        paddingRight: 5
    },
    fab: {
        marginTop: 35,
        marginLeft: 15
    },
    extendedIcon: {
        paddingRight: 5

    }
}


const download = (selected) => {
    const link = document.createElement('a');
    link.href = selected.ZipDownloadLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const SubtitleDownloader = (props) => {
    const { classes } = props;
    const options = [];

    if (!props.loading) {
        for (var idx = 0; idx < props.subtitles.length; idx++) {
            if (!options.includes(props.subtitles[idx].LanguageName))
                options.push(props.subtitles[idx].LanguageName)
        }

    }

    return (
        (props.hide ? <div></div> :
            <Grid container className={classes.root}>
                <Grid item xs={6} sm={4}>
                    {props.loading ? <Skeleton className={classes.lang} height={50} width="90%" /> :
                        <FormControl variant="filled" className={classes.lang}>
                            <InputLabel htmlFor="fileed-language-simple">Language</InputLabel>
                            <Select
                                value={props.lang}
                                onChange={(event) => props.changeLang(event.target.value)}
                                inputProps={{
                                    name: "language",
                                    id: "filled-language-simple"
                                }}
                            >
                                {options.map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)}
                            </Select>
                        </FormControl>}
                </Grid>
                <Grid item xs={9} sm={8}>
                    <Grid container className={classes.subselect}>
                        <Grid item xs={12} >
                            {props.loading ? <Skeleton className={classes.subtitle} height={50} width="100%" /> :
                                <FormControl variant="filled" className={classes.subtitle}>
                                    <InputLabel htmlFor="filled-subtitle-simple">Subtitle</InputLabel>
                                    <Select
                                        value={props.selected.SubFileName}
                                        onChange={(event) => props.selectSubtitle(event.target.value)}
                                        inputProps={{
                                            name: "subtitle",
                                            id: "filled-subtitle-simple"
                                        }}
                                    >
                                        {props.filtered.map(item => <MenuItem value={item.SubFileName} item={item} key={item.IDSubtitleFile}>{item.SubFileName}</MenuItem>)}
                                    </Select>
                                </FormControl>}
                        </Grid>
                        <Grid container className={classes.textSkeleton} xs={12}>
                            <Grid item xs={4}>
                                {props.loading ? <Skeleton height={30} width="60%" /> :
                                    <Typography className={classes.text} variant="body1">
                                        Rating: {props.selected.SubRating}
                                    </Typography>}
                            </Grid>
                            <Grid item xs={6}>
                                {props.loading ? <Skeleton height={30} width="60%" /> :
                                    <Typography className={classes.text} variant="body1">
                                        Downloads: {props.selected.SubDownloadsCnt}
                                    </Typography>}
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            {props.loading ? <Skeleton className={classes.fab} height={40} width={125} /> :
                                <Fab variant="extended" color="primary" onClick={() => download(props.selected)} className={classes.fab}>
                                    <CloudDownloadIcon className={classes.extendedIcon} />
                                    Download
                                </Fab>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >)
    );
}

const mapStateToProps = (state) => {
    return {
        type: state.download.type, show: state.download.show, selected: state.download.selected,
        lang: state.download.lang, filtered: state.download.filtered, subtitles: state.download.subtitles,
        loading: state.download.loading, hide: state.download.hide
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeLang: change_language, selectSubtitle: select_subtitle }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SubtitleDownloader));