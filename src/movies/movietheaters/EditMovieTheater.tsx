import { useParams } from 'react-router-dom';
import { urlMovieTheaters } from '../../endpoints';
import EditEntity from '../../utils/EditEntity';
import { movieTheaterCreationDTO, movieTheaterDTO } from './movieTheater.model';
import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater() {
  const { id }: any = useParams();
  return (
    <EditEntity<movieTheaterCreationDTO, movieTheaterDTO>
      url={urlMovieTheaters}
      indexURL='/movietheaters'
      entityName='Movie Theater'
    >
      {(entity, edit) => (
        <MovieTheaterForm
          model={entity}
          onSubmit={async (values) => await edit(values)}
        />
      )}
    </EditEntity>
  );
}
