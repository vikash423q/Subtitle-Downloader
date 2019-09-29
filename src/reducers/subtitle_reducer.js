const initialState = {
    subtitles: [],
    season: 1,
    episode: 1,
    seasons: 1,
    episodes: [],
    show: {},
    type: null,
    load: false,
    download: false
}

const subtitle_reducer = (state = initialState, action) => {
    var newState = { ...state };
    switch (action.type) {
        case 'SHOW_SELECTED':
            newState.type = action.show_type;
            newState.show = action.show;
            newState.load = action.skeleton;
            if (action.show !== state.show) {
                newState.season = 1;
                newState.episode = 1;
            }
            if (action.show_type === 'series') {
                newState.download = false;
                newState.seasons = parseInt(action.data.totalSeasons) || 0;
                newState.episodes = action.data.Episodes || [];
            } else if (action.show_type === 'movie') {
                newState.download = true;
                newState.subtitles = action.data.data || [];
            }
            return newState;
        case 'SEASON_CHANGED':
            newState.season = action.payload;
            return newState;
        case 'EPISODE_SELECTED':
            newState.download = true;
            newState.load = true;
            newState.episode = action.payload;
            return newState;
        case 'EPISODES_CHANGED':
            newState.episodes = action.payload || [];
            return newState;
        case 'SUBTITLES_LOADED':
            newState.download = true;
            newState.load = false;
            newState.subtitles = action.payload || [];
            return newState;
        case 'CHANGE_TYPE':
            newState.type = action.payload;
            return newState;
        default:
            return state;
    }
}

export default subtitle_reducer;