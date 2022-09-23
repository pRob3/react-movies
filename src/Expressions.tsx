export default function Expressions() {
  const subText = 'Expressions Text';
  const reactLogo = 'https://reactjs.org/logo-og.png';

  const dublicate = (values: number) => values * 2;
  return (
    <>
      <h1>Expressions example</h1>
      <h2>{subText.toUpperCase()}</h2>
      <h3>The double of 3 is equal to {dublicate(3)}</h3>
      <img src={reactLogo} alt='' />
    </>
  );
}
