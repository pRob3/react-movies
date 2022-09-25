import { useParams } from 'react-router-dom';
import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater() {
  const { id }: any = useParams();
  return (
    <>
      <h3>Edit Movie Theater</h3>
      <MovieTheaterForm
        model={{
          name: 'Bergakungen',
          latitude: 57.7021247429003,
          longitude: 11.98610544204712,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
