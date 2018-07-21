import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {API_KEY, MAIN_URL} from '../actions/index'
import Prealoder from '../containers/Preloader'

class SimilarMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            similar: {}
        }
        this.getSimilar = this.getSimilar.bind(this)
        this.clearCurrentMovie = this.clearCurrentMovie.bind(this)
    }
    componentDidMount () {
        this.getSimilar(this.props.id)
    }

    getSimilar(id) {
        fetch(`${MAIN_URL}/movie/${id}/similar?api_key=${API_KEY}&language=ru`)
        .then(res => res.json())
        .then(res => this.setState({similar: res}))
    }

    componentWillUpdate (nextProps) {
        if(this.props.id !== nextProps.id) {
            this.getSimilar(nextProps.id)
        }
    }

    clearCurrentMovie() {
        this.props.clearMovie()
    }
    
    render() {
        if(Object.keys(this.state.similar).length === 0) {
            return <Prealoder/>
        }
        return (
            <div>
            <div className="container">
            <h2 className="similar-header">Похожие фильмы: </h2>
            </div>
            <div className="container similar-container">
                {this.state.similar.results.slice(0, 10).map((item, i) => {
                    return (
                        <div key={item.id} className="movie-preview-bg">
                            <Link to={`${item.id}`} onClick={() => {
                                window.scrollTo(0, 0)
                                this.clearCurrentMovie()
                            }}>
                                <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="Movie"/>
                            </Link>
                            <p className="movie-title preview-title">{item.title}</p>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}


function mapStateToProps (state) {
    return {
        similar: state.similarMovies
    }
}


export default connect(mapStateToProps)(SimilarMovies)