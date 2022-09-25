import { useEffect, useState } from 'react';
import './App.css';
import { landingPageDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
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
        ],
        upcomingReleases: [
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
        ],
      });
    }, 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <div className='container'>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </div>
  );
}

export default App;
