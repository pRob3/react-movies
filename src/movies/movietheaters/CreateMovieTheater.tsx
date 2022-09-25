import { useHistory } from 'react-router-dom';
import MovieTheaterForm from './MovieTheaterForm';

export default function CreateMovieTheater() {
  const history = useHistory();
  return (
    <>
      <h3>Create Movie Theaters</h3>
      <MovieTheaterForm
        model={{ name: '' }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
