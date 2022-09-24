import { useState } from 'react';
import SelectNumber from './SelectNumber';
import Simple from './Simple';

export default function ConditionalsIfSeveralComponents() {
  const [selectedRate, setSelectedRate] = useState(1);

  function displayResult() {
    if (selectedRate === 1) {
      return <div>Noo!</div>;
    } else if (selectedRate === 2) {
      return <div>Result 2</div>;
    } else if (selectedRate === 3) {
      return <div>Result 3</div>;
    } else if (selectedRate === 4) {
      return <Simple />;
    } else {
      return <span>Thanks</span>;
    }
  }

  return (
    <>
      <h1>Conditionals If example</h1>
      <div>Rate this website</div>
      <SelectNumber maxValue={5} onSelected={setSelectedRate} />

      <div>{displayResult()}</div>
    </>
  );
}
