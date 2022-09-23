export default function Conditionals() {
  const canSee = false;
  return (
    <>
      <h1>Conditionals example</h1>
      {canSee ? <div>Can see secret</div> : <div>Can't see secret</div>}
    </>
  );
}
