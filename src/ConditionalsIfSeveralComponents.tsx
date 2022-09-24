import { useState } from 'react';
import ProjectContent from './ProjectContent';
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
      <SelectNumber
        selectContent={(value) => `select ${value}`}
        maxValue={5}
        onSelected={setSelectedRate}
      />

      {/* <div>{displayResult()}</div> */}
      <div>
        <ProjectContent
          bottomPart={
            <>
              <span>The end?</span>
            </>
          }
        >
          <>
            <Simple />
            <button>This is a button as a parameter</button>
          </>
        </ProjectContent>
      </div>
    </>
  );
}
