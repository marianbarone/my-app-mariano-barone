import React from 'react'
import MovieListContainer from '../../MovieListContainer/MovieListContainer';
import { Route, Switch } from 'react-router-dom';
import Signup from '../Signup/Signup';
import ShopCart from '../../NavBar/ShopCart';
import MovieDetailContainer from '../../MovieDetailContainer/MovieDetailContainer';


const Routes = (movie) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <MovieListContainer />
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route path="/Cart" exact>
                    <ShopCart />
                </Route>
                {/* Esto me rompe todo*/}
                <Route exact path="/movie/:id">
                    <MovieDetailContainer movie={movie}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;