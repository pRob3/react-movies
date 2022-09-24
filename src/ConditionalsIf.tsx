import { useState } from 'react';
import Simple from './Simple';

export default function ConditionalsIf() {
  const [selectedValue, setSelectedValue] = useState('1');

  function displayResult() {
    if (selectedValue === '1') {
      return <div>Noo!</div>;
    } else if (selectedValue === '2') {
      return <div>Result 2</div>;
    } else if (selectedValue === '3') {
      return <div>Result 3</div>;
    } else if (selectedValue === '4') {
      return <Simple />;
    } else {
      return <span>Thanks</span>;
    }
  }

  return (
    <>
      <h1>Conditionals If example</h1>
      <div>Rate this website</div>
      <select
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setSelectedValue(e.currentTarget.value);
        }}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>

      <div>{displayResult()}</div>
    </>
  );
}
