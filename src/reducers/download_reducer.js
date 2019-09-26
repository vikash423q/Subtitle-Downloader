var initialState = {
    show_type: '',
    show: {},
    subtitles: []
};

const download_reducer = (state = initialState, action) => {
    var newState = {}
    switch (action.type) {
        case 'SHOW_SELECTED':
            newState.show_type = action.show_type;
            newState.show = action.show;
            newState.subtitles = action.subtitles;
            return newState;
        default:
            return state;
    }
}

export default download_reducer;
