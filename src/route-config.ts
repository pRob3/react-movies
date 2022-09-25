import CreateGenre from './movies/genres/CreateGenre';
import EditGenre from './movies/genres/EditGenre';
import IndexGenres from './movies/genres/IndexGenres';

import CreateActor from './movies/actors/CreateActor';
import EditActor from './movies/actors/EditActor';
import IndexActors from './movies/actors/IndexActors';

import IndexMovieTheaters from './movies/movietheaters/IndexMovieTheaters';
import CreateMovieTheater from './movies/movietheaters/CreateMovieTheater';
import EditMovieTheater from './movies/movietheaters/EditMovieTheater';

import CreateMovie from './movies/CreateMovie';
import EditMovie from './movies/EditMovie';
import FilterMovies from './movies/FilterMovies';

import LandingPage from './movies/LandingPage';

const routes = [
  { path: '/genres', component: IndexGenres, exact: true },
  { path: '/genres/create', component: CreateGenre },
  { path: '/genres/edit', component: EditGenre },

  { path: '/actors', component: IndexActors, exact: true },
  { path: '/actors/create', component: CreateActor },
  { path: '/actors/edit', component: EditActor },

  { path: '/movietheaters', component: IndexMovieTheaters, exact: true },
  { path: '/movietheaters/create', component: CreateMovieTheater },
  { path: '/movietheaters/edit', component: EditMovieTheater },

  { path: '/movies/create', component: CreateMovie },
  { path: '/movies/edit', component: EditMovie },
  { path: '/movies/filter', component: FilterMovies },

  { path: '/', component: LandingPage, exact: true },
];

export default routes;
