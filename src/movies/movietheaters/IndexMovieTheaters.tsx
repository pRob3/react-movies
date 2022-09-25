import { Link } from 'react-router-dom';

export default function IndexMovieTheaters() {
  return (
    <div>
      <h3>Movie Theaters</h3>
      <Link className='btn btn-primary' to='/movietheaters/create'>
        Create a Movie Theater
      </Link>
    </div>
  );
}
