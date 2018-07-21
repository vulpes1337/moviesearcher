export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"
export const INITIAL_FAVORITES = "INITIAL_FAVORITES"
export const IS_FAVORITE = "IS_FAVORITE"

export function addToFavorites (id) {
    return {
        type: ADD_TO_FAVORITES,
        id
    }
}

export function removeFromFavorites (id) {
    return {
        type: REMOVE_FROM_FAVORITES,
        id
    }
}

export function initialFavorites () {
    return {
        type: INITIAL_FAVORITES
    }
}

export function isFavorite () {
    return {
        type: IS_FAVORITE
    }
}