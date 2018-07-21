export const SET_SEARCH_STRING = "SET_SEARCH_STRING"
export const CLEAR_SEARCH_STRING = "CLEAR_SEARCH_STRING"

export function clearSearchString () {
    return {
        type: CLEAR_SEARCH_STRING
    }
}


export function setSearchString (string) {
    return {
        type: SET_SEARCH_STRING,
        string
    }
}