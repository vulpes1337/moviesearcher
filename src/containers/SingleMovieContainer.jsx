import React from 'react'

function SingleMovieContainer (props) {
    const info = props.info
    const id = props.id
    return (
        <div className="container single-movie-wrapper">
             <img width="500" height="700" className="single-movie-img img-fluid" src={info.poster_path ? 
                `https://image.tmdb.org/t/p/w500${info.poster_path}` 
                : 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/600px-No_image_available_600_x_450.svg.png"} 
                alt="Movie"/>
            <div className="single-movie-content">
            <h2 className="single-movie-title">{info.title}</h2>
            <i className="single-movie-slogan">{info.tagline}</i>
            <p>Рейтинг зрителей: {info.vote_average*10}%</p>
            <p>Бюджет: {info.budget}$</p>
            <h3>Описание:</h3>
            <p>{info.overview}</p>
            <div>Жанры: {info.genres.map((item, i) => item.name).join(", ")}</div>
            <p>Дата выхода: {info.release_date.split("-").reverse().join(".")}</p>
            {info.isFavorite ? 
            <button className="btn btn-danger" value={id} onClick={(e) => props.deleteFavorite(e.currentTarget.value)}>Удалить из избранного</button>
            :
            <button className="btn btn-success" value={id} onClick={(e) => props.addFavorite(e.currentTarget.value)}>Добавить в избранное</button>
            }
            </div>
        </div>
    )
}

export default SingleMovieContainer