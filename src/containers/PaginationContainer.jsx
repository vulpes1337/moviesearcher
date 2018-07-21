import React from 'react'

function PaginationContainer (props) {
    return (
        <div className="pagination-wrapper">
        <div className="container pagination-container">
        <button className="pagination-button pagination-button--prev btn btn-outline-secondary" disabled={props.currentPage === 1 ? true : false} onClick={props.prevPage}>Назад</button>
        <p className="pagination-page">Страница {props.currentPage} из {props.totalPages}</p>
        <button className="pagination-button pagination-button--next btn btn-outline-secondary" disabled={props.currentPage === props.totalPages ? true : false} onClick={props.nextPage}>Вперед</button>
        </div>
        </div>
    )
}

export default PaginationContainer