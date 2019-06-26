export const GET_MOVIE_IMDBID = (movie_name, apikey) => `http://www.omdbapi.com/?s=${movie_name}&type=movie%20&apikey=${apikey}`;

export const GET_SERIES_IMDBID = (series_name, apikey) => `http://www.omdbapi.com/?s=${series_name}&type=series&apikey=${apikey}`;

export const LIST_SERIES_SEASONS = (imdbid, apikey) => `http://www.omdbapi.com/?i=${imdbid}&type=series&apikey=${apikey}`;

export const LIST_SERIES_EPISODES = (imdbid, season_number, apikey) => `http://www.omdbapi.com/?i=${imdbid}&Season=${season_number}&apikey=${apikey}`;

export const LIST_SERIES_SUBTITLES = (imdbid, season_number, episode_number) => `https://rest.opensubtitles.org/search/imdbid-${imdbid}/season-${season_number}/episode-${episode_number}`;

export const LIST_MOVIES_SUBTITLES = (imdbid) => `https://rest.opensubtitles.org/search/imdbid-${imdbid}`;

export const apikey = 'c6208303'