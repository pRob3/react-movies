import { genreDTO } from './genres/genres.model';
import MovieForm from './MovieForm';
import { movieTheaterDTO } from './movietheaters/movieTheater.model';

export default function CreateMovie() {
  const nonSelectedGenres: genreDTO[] = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
  ];

  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: 'Bergakungen' },
    { id: 2, name: 'Filmstaden' },
  ];

  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm
        model={{ title: '', inTheaters: false, trailer: '' }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={[]}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={[]}
        selectedActors={[]}
      />
    </>
  );
}
