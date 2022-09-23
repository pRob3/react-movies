export default function Events() {
  let canSee = false;

  function handleCheckboxChanged() {
    console.log('Checkbox changed!');
    canSee = !canSee;
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
  }

  return (
    <>
      <h1>Events example</h1>

      <div>
        <input type='checkbox' onChange={handleCheckboxChanged} />
      </div>
      <div>
        <button
          onClick={() => {
            alert('Button clicked!');
          }}
        >
          Click me
        </button>
      </div>
      <div>
        <input type='text' onKeyUp={(e) => handleKeyUp(e)} />
      </div>

      {canSee ? <div>Can see secret</div> : <div>Can't see secret</div>}
    </>
  );
}
