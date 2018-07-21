import React from 'react'
import {connect} from 'react-redux'
import {getMovies, clearMovieList} from '../actions/index'
import {isFavorite} from '../actions/favorites'
import {clearSearchString} from '../actions/search'
import MovieListContainer from '../containers/MovieListContainer'
import PaginationContainer from '../containers/PaginationContainer'
import SearchBar from './SearchBar'
import Prealoder from '../containers/Preloader'

class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.url = this.props.match.url
        this.state = {
            currentPage: 1
        }
        this.nextPage = this.nextPage.bind(this)
        this.prevPage = this.prevPage.bind(this)
    }
    
    componentDidMount () {
        this.props.getData(this.state.currentPage, this.props.searchString)
    }

    componentWillUnmount() {
        this.props.clearSearch()
        this.props.clearMovieList()
    }
    
    nextPage() {
       this.props.getData(parseInt(this.props.currentPage, 10)+1, this.props.searchString)
    }

    prevPage() {
        this.props.getData(this.props.currentPage-1, this.props.searchString)
    }

    render() {   
        const movies = this.props.movies

        return (
                <div>
                <SearchBar/>
                {this.props.isFetching ? 
                   <Prealoder/>
                :
                    <div>
                        <MovieListContainer
                        movies={movies}
                        />
                        {movies.length===0 ? 
                        null
                        :
                        <PaginationContainer
                        prevPage={this.prevPage}
                        nextPage={this.nextPage}
                        currentPage={this.props.currentPage}
                        totalPages={this.props.totalPages}
                        />}
                    </div>
                }
                </div>
        )
    }
}
 

function mapDispatchToProps (dispatch) {
    return {
        getData: (page, string) => dispatch(getMovies(page, string)),
        clearSearch: () => dispatch(clearSearchString()),
        isFavorite: () => dispatch(isFavorite()),
        clearMovieList: () => dispatch(clearMovieList())
    }
} 

function mapStateToProps (state) {
    return {
        movies: state.items,
        searchString: state.searchString,
        isFetching: state.fetching,
        currentPage: state.page,
        totalPages: state.total_pages
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)




