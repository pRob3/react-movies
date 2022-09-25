import { useParams } from 'react-router-dom';
import ActorForm from './ActorForm';

export default function EditActor() {
  const { id }: any = useParams();
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: 'Danny McBride',
          dateOfBirth: new Date('1976-12-29T00:00:00'),
          biography:
            'Danny McBride is an **American** actor, writer, and producer.',
          pictureURL:
            'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sVFPzl2t5QlGudQKWAszIWZCXZv.jpg',
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
