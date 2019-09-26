var initialState = {
    list: [],

}

const movie_reducer = (state = initialState, action) => {
    var newState = {}
    switch (action.type) {
        case 'MOVIE_UPDATED':
            newState.payload = action.payload;
            return newState;
        default:
            return state;
    }
}

export default movie_reducer;
