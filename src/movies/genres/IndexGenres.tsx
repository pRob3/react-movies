import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { urlGenres } from '../../endpoints';
import Button from '../../utils/Button';
import GenericList from '../../utils/GenericList';
import Pagination from '../../utils/Pagination';
import RecordsPerPageSelect from '../../utils/RecordsPerPageSelect';
import { genreDTO } from './genres.model';
import customDeleteConfirm from '../../utils/customConfirms';

export default function IndexGenres() {
  const [genres, setGenres] = useState<genreDTO[]>([]);
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
  }, [page, recordsPerPage]);

  function loadData() {
    axios
      .get(urlGenres, {
        params: { page, recordsPerPage },
      })
      .then((response: AxiosResponse<genreDTO[]>) => {
        const totalAmountOfRecords = parseInt(
          response.headers['totalamountofrecords'],
          10
        );
        setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
        setGenres(response.data);
      });
  }

  async function deleteGenre(id: number) {
    try {
      await axios.delete(`${urlGenres}/${id}`);

      setGenres(genres.filter((x) => x.id !== id));
      // loadData();
    } catch (error) {
      if (error && error.response) {
        console.error(error.response.data);
      }
    }
  }

  return (
    <div>
      <h3>Genres</h3>
      <Link className='btn btn-primary' to='/genres/create'>
        Create a Genre
      </Link>

      <RecordsPerPageSelect
        onChange={(amountOfRecords) => {
          setPage(1);
          setRecordsPerPage(amountOfRecords);
        }}
      />
      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
      />

      <GenericList list={genres}>
        <table className='table table-stripe'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre) => (
              <tr key={genre.id}>
                <td>{genre.name}</td>
                <td>
                  <Link
                    className='btn btn-primary'
                    to={`/genres/edit/${genre.id}`}
                  >
                    Edit
                  </Link>
                  <Button
                    onClick={() =>
                      customDeleteConfirm(() => deleteGenre(genre.id))
                    }
                    className='btn btn-danger'
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </div>
  );
}
