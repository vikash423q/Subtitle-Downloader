var initialState = {
    list: [],

}

const show_reducer = (state = initialState, action) => {
    var newState = {}
    switch (action.type) {
        case 'SHOW_UPDATED':
            newState.payload = action.payload;
            return newState;
        default:
            return state;
    }
}

export default show_reducer;
