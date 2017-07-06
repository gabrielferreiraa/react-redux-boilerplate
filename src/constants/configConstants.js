'use strict'

const BASE_URL = 'https://api.themoviedb.org/'
const API_KEY = 'd02655ab95c478b5dfd0168cfd753279'

export const POPULAR_URL = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}`
export const API_URL = `${BASE_URL}3/search/movie?api_key=${API_KEY}`
export const IMG_URL = 'http://image.tmdb.org/t/p/w600'
export const VIDEO_URL = `${BASE_URL}3/movie/:movie_id:/videos?api_key=${API_KEY}`
export const MOVIE_DETAILS_URL = `${BASE_URL}3/movie/:movie_id:?api_key=${API_KEY}&language=en-US`
export const DEV_TOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
