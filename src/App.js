import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './containers/NavBar'
import store from './store/store'
import MovieList from './components/MovieList'
import SingleMovie from './components/SingleMovie'
import Favorites from './components/Favorites'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'
import NotFound from './containers/NotFound'
import Error from './containers/Error'

function App () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavBar/>
            <Error>
            <Switch>
              <Route path="/" exact component={MovieList}/>
              <Route path="/movie/:id" component={SingleMovie}/>
              <Route path="/favorites" component={Favorites}/>
              <Route path="*" component={NotFound}/>
            </Switch>
            </Error>
          </div>
        </BrowserRouter>
      </Provider>
    )
}

export default App;
