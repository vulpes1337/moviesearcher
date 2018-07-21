import React from 'react'
import {connect} from 'react-redux'
import {addToFavorites, removeFromFavorites, isFavorite} from '../actions/favorites'
import {Link} from 'react-router-dom'

function MoviePreviewContainer (props) {
    return (
        <div className="movie-preview-bg">
        <div className="movie-preview-wrapper" key={props.id}>
            <div className="img-wrapper">
            <Link to={`movie/${props.id}`}>
            <img src={props.image} alt="Movie" className="movie-preview-img"/>
            </Link>
            <div className="movie-title--bg">
            <h3 className="movie-title">{props.title.length > 22 ? props.title.slice(0, 22)+"..." : props.title}</h3>
            {props.isFavorite ? 
            <button className="fav-button fav-button--del" value={props.id} onClick={(e) => {
                props.removeFromFavorites(e.currentTarget.value)
                props.favoriteCheck()
            }}></button>
            :
            <button className="fav-button fav-button--add" value={props.id} onClick={(e) => {
                props.addToFavorites(e.currentTarget.value)
                props.favoriteCheck()
            }}></button>
            }
            </div>
            </div>
        </div>
        </div>
    )
}

function mapDispatchToProps (dispatch) {
    return {
        addToFavorites: (id) => dispatch(addToFavorites(id)),
        removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
        favoriteCheck: () => dispatch(isFavorite())
    }
}

export default connect(null, mapDispatchToProps)(MoviePreviewContainer)