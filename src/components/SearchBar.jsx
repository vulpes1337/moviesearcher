import React from 'react'
import {connect} from 'react-redux'
import {getMovies} from '../actions/index'

class SearchBar extends React.Component {
    render() {
        return (
            <div className="container">
            <input className="search-input form-control mr-sm-2" onChange={(e) => this.props.search(e.currentTarget.value)} type="text" placeholder="Поиск..."/>
            </div>
        )
    }
}


function mapDispatchToProps (dispatch) {
    return {
        search: (string) => dispatch(getMovies(1, string))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)