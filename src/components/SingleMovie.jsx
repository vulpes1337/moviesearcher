import React from 'react'
import {connect} from 'react-redux'
import SimilarMovies from './SimilarMovies'
import {API_KEY, MAIN_URL} from '../actions/index'
import {addToFavorites, removeFromFavorites, isFavorite} from '../actions/favorites'
import SingleMovieContainer from '../containers/SingleMovieContainer'
import Prealoder from '../containers/Preloader'

class SingleMovie extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            details: {}
        }
        this.getMovies = this.getMovies.bind(this)
        this.addFavorite = this.addFavorite.bind(this)
        this.deleteFavorite = this.deleteFavorite.bind(this)
        this.clearMovie = this.clearMovie.bind(this)
    }

    componentDidMount() {
        this.getMovies(this.props.match.params.id)
    }

    getMovies(id) {
        fetch(`${MAIN_URL}/movie/${id}?api_key=${API_KEY}&language=ru`)
        .then(res => res.json())
        .then(res => this.setState(() => {
            if(this.props.favorites.includes(res.id.toString())) {
                res = Object.assign({}, res, {isFavorite: true})
                return {details: res}
            } else {
                return {details: res}
            }
        }))
    }

    componentWillReceiveProps (nextProps) {
        if(this.props.match.params.id !== nextProps.match.params.id) {
            this.getMovies(nextProps.match.params.id)
        }
    }

    addFavorite (id) {
        this.props.addToFavorites(id)
        this.setState(() => {
            return {details: Object.assign({}, this.state.details, {isFavorite: true})}
        })
    }

    deleteFavorite (id) {
        this.props.removeFromFavorites(id)
        this.setState(() => {
            return {details: Object.assign({}, this.state.details, {isFavorite: false})}
        })
    }
    
    clearMovie() {
        this.setState({details: {}})
    }

    render() {
        

        if(Object.keys(this.state.details).length === 0) {
            return <Prealoder/>
        } 

        const id = this.props.match.params.id
        const info = this.state.details
            return (
                <div>
                    <SingleMovieContainer
                    info={info}
                    id={id}
                    addFavorite={(id) => this.addFavorite(id)}
                    deleteFavorite={(id) => this.deleteFavorite(id)}
                    />
                    <SimilarMovies clearMovie={() => this.clearMovie()} id={id}/>
                </div>
            )
    }
}


function mapDispatchToProps (dispatch) {
    return {
        addToFavorites: (id) => dispatch(addToFavorites(id)),
        removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
        favoriteCheck: () => dispatch(isFavorite())
    }
}

function mapStateToProps (state) {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)