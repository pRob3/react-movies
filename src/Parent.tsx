import { useContext } from 'react';
import Child from './Child';
import ValueContext from './ValueContext';

export default function Parent() {
  const value = useContext(ValueContext);
  return (
    <>
      {value ? 'value is true' : 'value is false'}
      <Child />
    </>
  );
}
