import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';

function App() {
  const inTheaters: movieDTO[] = [
    {
      id: 1,
      title: 'Hackers',
      poster:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8H2KpRtpzwlxz5KrvINCVihok1.jpg',
    },
    {
      id: 2,
      title: 'Half Baked',
      poster:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/14TmEac4bquNaEld9t0uIliYoKE.jpg',
    },
  ];

  const upcomingReleases: movieDTO[] = [
    {
      id: 3,
      title: 'Con Air',
      poster:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kOKjgrEzGOP92rVQ6srA9jtp60l.jpg',
    },
    {
      id: 4,
      title: 'Thor: Love and Thunder',
      poster:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rrjmDk9ysLED1PdbAI2xTrftJnx.jpg',
    },
  ];

  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={upcomingReleases} />
    </>
  );
}

export default App;
