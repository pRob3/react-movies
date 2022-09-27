import { urlGenres } from '../../endpoints';
import { genreDTO } from './genres.model';
import IndexEntity from '../../utils/IndexEntity';

export default function IndexGenres() {
  return (
    <div>
      <IndexEntity<genreDTO>
        url={urlGenres}
        createURL='genres/create'
        title='Genres'
        entityName='Genre'
      >
        {(genres, buttons) => (
          <>
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {genres?.map((genre) => (
                <tr key={genre.id}>
                  <td>{genre.name}</td>
                  <td>{buttons(`genres/edit/${genre.id}`, genre.id)}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntity>
    </div>
  );
}
