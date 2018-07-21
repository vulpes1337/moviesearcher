import {setSearchString} from './search'
import {isFavorite} from './favorites'

export const API_KEY = "a65fb716b5f6d9d84b66e8969f4694f5"
export const MAIN_URL = "https://api.themoviedb.org/3"

export const SET_ITEMS = "SET_ITEMS"
export const REQUEST_START = "REQUEST_START"
export const SET_FAVORITE_MOVIE = "SET_FAVORITE_MOVIE"
export const CLEAR_MOVIE_LIST = "CLEAR_MOVIE_LIST"


export function getMovies (page, string) {
    return (dispatch) => {
        dispatch({
            type: REQUEST_START
        }) 
        if(string) {
            dispatch(setSearchString(string))
            fetch(`${MAIN_URL}/search/movie?api_key=${API_KEY}&language=ru&query=${string}&page=${page}`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: SET_ITEMS,
                    items: res
                })
                dispatch(isFavorite())
            })
        } else {
            dispatch(setSearchString(string))
            fetch(`${MAIN_URL}/movie/popular?api_key=${API_KEY}&language=ru&page=${page}`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: SET_ITEMS,
                    items: res
                })
                dispatch(isFavorite())
            })
        }
    }
}


export function clearMovieList () {
    return {
        type: CLEAR_MOVIE_LIST
    }
}

export function getFavoriteMovies (id) {
    return (dispatch) => {
        dispatch({
            type: REQUEST_START
        }) 
        fetch(`${MAIN_URL}/movie/${id}?api_key=${API_KEY}&language=ru`)
        .then(res => res.json())
        .then(res => dispatch({
            type: SET_FAVORITE_MOVIE,
            info: res
        }))
        .then(() => dispatch(isFavorite()))
    }
}
