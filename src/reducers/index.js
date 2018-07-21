import { SET_ITEMS, 
         REQUEST_START,
         SET_FAVORITE_MOVIE,
         CLEAR_MOVIE_LIST} from '../actions/index' 

import { SET_SEARCH_STRING, 
         CLEAR_SEARCH_STRING } from '../actions/search'

import {ADD_TO_FAVORITES,
        IS_FAVORITE,
        REMOVE_FROM_FAVORITES, 
        INITIAL_FAVORITES } from '../actions/favorites' 


function reducer (state = {}, action) {
    switch(action.type) {
        case REQUEST_START: 
            return Object.assign({}, state, {fetching: true})

        case SET_ITEMS: 
            const items = action.items
            return Object.assign({}, state, 
                {items: items.results, 
                fetching: false, 
                page: items.page,
                total_pages: items.total_pages})
            
        case IS_FAVORITE:
            const favoritesChecked = state.items.map(item => {
                    if(state.favorites.includes(item.id.toString())) {
                        return Object.assign({}, item, {isFavorite: true})
                    } else {
                        return Object.assign({}, item, {isFavorite: false})
                    }
                })
            return Object.assign({}, state, {items: favoritesChecked})

        case SET_FAVORITE_MOVIE:
            const movie = state.items.concat(action.info)
            return Object.assign({}, state, {items: movie, fetching: false})

        case CLEAR_MOVIE_LIST:
            return Object.assign({}, state, {items: []})

        case ADD_TO_FAVORITES: 
            const arr = JSON.parse(localStorage.getItem("favorites")).concat(action.id)
            localStorage.setItem("favorites", JSON.stringify(arr))
            return Object.assign({}, state, {favorites: arr})

        case REMOVE_FROM_FAVORITES: 
            const filteredArr = JSON.parse(localStorage.getItem("favorites")).filter(item => item !== action.id)
            localStorage.setItem("favorites", JSON.stringify(filteredArr))
            return Object.assign({}, state,  {favorites: filteredArr})

        case INITIAL_FAVORITES:
            const favorites = JSON.parse(localStorage.getItem("favorites"))
            return Object.assign({}, state, {favorites})
            
        case SET_SEARCH_STRING: 
            return Object.assign({}, state, {searchString: action.string})

        case CLEAR_SEARCH_STRING:
            return Object.assign({}, state, {searchString: ""})

        default: 
            return state
    }
}

export default reducer