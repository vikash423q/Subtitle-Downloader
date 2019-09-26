import { combineReducers } from 'redux';
import type_reducer from './type_reducer';
import movie_reducer from './movie_reducer';
import show_reducer from './show_reducer';
import download_reducer from './download_reducer';

const rootReducer = combineReducers({
    search: type_reducer,
    movies: movie_reducer,
    shows: show_reducer,
    download: download_reducer

});

export default rootReducer;
