import { genreDTO } from './genres/genres.model';
import MovieForm from './MovieForm';
import { movieTheaterDTO } from './movietheaters/movieTheater.model';

export default function EditMovie() {
  const nonSelectedGenres: genreDTO[] = [{ id: 2, name: 'Comedy' }];
  const selectedGenres: genreDTO[] = [{ id: 1, name: 'Action' }];

  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 2, name: 'Filmstaden' },
  ];
  const selectedMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: 'Bergakungen' },
  ];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: 'Kung Fury',
          inTheaters: false,
          trailer: 'url',
          releaseDate: new Date('2015-05-22T00:00:00'),
        }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={selectedGenres}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={selectedMovieTheaters}
        selectedActors={[]}
      />
    </>
  );
}
