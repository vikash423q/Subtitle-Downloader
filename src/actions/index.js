export const type_selected = (type) => {
    return {
        'payload': type,
        'type': 'TYPE_SELECT'
    }
}

export const change_term = (term) => {
    return {
        'payload': term,
        'type': 'TERM_CHANGED'
    }
}

export const update_movies = (movies) => {
    return {
        'payload': movies,
        'type': 'MOVIE_UPDATED'
    }
}

export const update_series = (series) => {
    return {
        'payload': series,
        'type': 'SERIES_UPDATED'
    }
}

export const select_show = (type, show, subtitles) => {
    return {
        'show': show,
        'show_type': type,
        'subtitles': subtitles,
        'type': 'SHOW_SELECTED'
    }
}