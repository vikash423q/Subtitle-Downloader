var initialState = {
    type: 'movie',
    term: ''
}

const type_reducer = (state = initialState, action) => {
    var newState = { ...state };
    switch (action.type) {
        case 'TYPE_SELECT':
            newState.type = action.payload;
            return newState;
        case 'TERM_CHANGED':
            newState.term = action.payload;
            return newState;
        default:
            return state;
    }
}

export default type_reducer;
