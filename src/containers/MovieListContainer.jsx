import React from 'react'
import MoviePreviewContainer from './MoviePreviewContainer'
import Emperty from './Emperty'

function MovieListContainer (props) {
    if(props.movies.length === 0 ) {
        return <Emperty/>
    }

    return (
        <div className="container">
                {props.movies.map((item) => {
                        return  <div key={item.id}>
                                    <MoviePreviewContainer 
                                        image={item.poster_path ? `https://image.tmdb.org/t/p/w300${item.poster_path}` :  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/600px-No_image_available_600_x_450.svg.png"}
                                        title={item.title}
                                        average={item.vote_average}
                                        overview={item.overview}
                                        id={item.id}
                                        isFavorite={item.isFavorite}
                                    />
                                </div>
                    })}
        </div>
    )
}

export default MovieListContainer 