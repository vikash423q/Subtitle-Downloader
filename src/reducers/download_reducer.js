var initialState = {
    selected: {},
    lang: 'English',
    filtered: [],
    subtitles: [],
    loading: false,
    hide: true
};

const download_reducer = (state = initialState, action) => {
    var newState = { ...state };
    switch (action.type) {
        case 'SUBTITLE_DOWNLOAD':
            newState.lang = 'English';
            newState.type = action.show_type;
            newState.show = action.show;
            newState.subtitles = action.subtitles || [];
            newState.filtered = filterSubtitles(newState.subtitles, newState.lang);
            newState.loading = action.loading;
            newState.selected = newState.filtered[0] || {};
            newState.hide = false;
            return newState;
        case 'HIDE_DOWNLOADER':
            newState.hide = true;
            return newState;
        case 'CHANGE_LANGUAGE':
            newState.lang = action.payload;
            newState.filtered = filterSubtitles(state.subtitles, newState.lang);
            newState.selected = newState.filtered[0] || {};
            return newState;
        case 'SELECT_SUBTITLE':
            newState.selected = findSubtitle(action.payload, newState.filtered);
            return newState;
        case 'EPISODE_SELECTED':
            console.log('episode selected');
            newState.hide = false;
            newState.loading = true;
            return newState;
        case 'SUBTITLES_LOADED':
            console.log('subtitle loading');
            newState.subtitles = action.payload || [];
            newState.filtered = filterSubtitles(newState.subtitles, newState.lang);
            newState.selected = newState.filtered[0] || {};
            newState.hide = false;
            newState.loading = false;
            return newState;
        default:
            return state;
    }
}

const filterSubtitles = (subtitles, lang) => subtitles.filter((item) => item.LanguageName === lang);

const findSubtitle = (name, list) => {
    var element = {};
    for (var idx = 0; idx < list.length; idx++)
        if (list[idx].SubFileName === name) {
            element = list[idx];
            break;
        }
    return element;
}

export default download_reducer;
