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

export const select_show = (type, show, data, skeleton) => {
    return {
        'show': show,
        'show_type': type,
        'data': data,
        'type': 'SHOW_SELECTED',
        'skeleton': skeleton
    }
}

export const type_change = (payload) => {
    return {
        type: 'CHANGE_TYPE',
        payload: payload
    }
}

export const change_season = (payload) => {
    return {
        type: 'SEASON_CHANGED',
        payload: payload
    }
}

export const change_episodes = (payload) => {
    return {
        type: 'EPISODES_CHANGED',
        payload: payload
    }
}

export const select_episode = (payload) => {
    return {
        type: 'EPISODE_SELECTED',
        payload: payload
    }
}

export const load_subtitles = (payload) => {
    return {
        type: 'SUBTITLES_LOADED',
        payload: payload
    }
}

export const hide_downloader = (payload) => {
    return {
        type: 'HIDE_DOWNLOADER',
        payload: payload
    }
}

export const change_language = (payload) => {
    return {
        type: 'CHANGE_LANGUAGE',
        payload: payload
    }
}

export const download_subtitle = (show_type, show, subtitles, loading) => {
    return {
        type: 'SUBTITLE_DOWNLOAD',
        show_type: show_type,
        show: show,
        subtitles: subtitles,
        loading: loading
    }
}

export const select_subtitle = (payload) => {
    return {
        type: 'SELECT_SUBTITLE',
        payload: payload
    }
}