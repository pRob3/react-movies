import Genericlist from '../utils/GenericList';
import Loading from '../utils/Loading';
import IndividualMovie from './IndividualMovie';
import { movieDTO } from './movies.model';
import css from './MoviesList.module.css';

export default function MoviesList(props: moviesListProps) {
  return (
    <Genericlist list={props.movies}>
      <div className={css.div}>
        {props.movies?.map((movie) => (
          <IndividualMovie {...movie} key={movie.id} />
        ))}
      </div>
    </Genericlist>
  );
}

interface moviesListProps {
  movies?: movieDTO[];
}
