import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/index'
import {initialFavorites} from '../actions/favorites'


const initialState = {
    page: 0,
    total_pages: 0,
    items: [],
    favorites: [],
    fetching: false,
    searchString: ""
}

const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware))

localStorage.getItem("favorites") ?  null : localStorage.setItem("favorites", JSON.stringify([]))
store.dispatch(initialFavorites())


export default store