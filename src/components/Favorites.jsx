import React from 'react'
import {connect} from 'react-redux'
import {isFavorite} from '../actions/favorites'
import {getFavoriteMovies} from '../actions/index'
import MovieListContainer from '../containers/MovieListContainer'
import Prealoder from '../containers/Preloader'
import {clearMovieList} from '../actions/index'

class Favorites extends React.Component {
    componentDidMount() {
        this.props.favorites.forEach(item => {
            this.props.getMovies(item)
        })
    }

    componentWillUnmount() {
        this.props.clearMovieList()
    }

    render() {
        const movies = this.props.movies
        if(this.props.fetching) {
            return (
                <Prealoder/>
            )
        }
        return (
            <MovieListContainer
                movies={movies.filter(item => item.isFavorite)}
            />
        )
    }
}

function mapStateToProps (state) {
    return {
        favorites: state.favorites,
        movies: state.items,
        fetching: state.fetching
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getMovies: (id) => dispatch(getFavoriteMovies(id)),
        isFavorite: () => dispatch(isFavorite()),
        clearMovieList: () => dispatch(clearMovieList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)