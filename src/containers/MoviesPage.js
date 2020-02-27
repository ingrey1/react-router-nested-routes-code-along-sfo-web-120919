// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import ShowMovie from '../components/ShowMovie'

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={`${match.url}/:movieId`} render={routerProps => <ShowMovie {...routerProps} movies={movies}  />} />
  </div>
)

export default MoviesPage
