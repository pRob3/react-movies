import GenreForm from './GenreForm';

export default function CreateGenre() {
  // const history = useHistory();
  return (
    <>
      <h3>Create Genre</h3>

      <GenreForm
        model={{ name: '' }}
        onSubmit={async (value) => {
          // When the form is submitted
          await new Promise((resolve) => setTimeout(resolve, 1));
          console.log(value);
        }}
      />
    </>
  );
}
