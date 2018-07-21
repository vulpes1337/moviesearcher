import React from 'react'
import {Link} from 'react-router-dom'

function NavBar () {
    return (
        <nav className="main-navbar navbar navbar-expand navbar-expand-lg">
         <div className="collapse navbar-collapse">
         <div className="container">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="main-link nav-link" to="/">Главная</Link>
                </li>
                <li className="nav-item">
                    <Link className="main-link nav-link" to="/favorites">Избранные</Link>
                </li>
            </ul>
         </div>
         </div>
        </nav>
    )
}

export default NavBar