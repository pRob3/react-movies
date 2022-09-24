import css from './CSSExamples.module.css';

export default function CSSExamples() {
  const squareStyle = {
    backgroundColor: 'pink',
    height: '50px',
    width: '50px',
    marginLeft: '1rem',
  };

  return (
    <>
      <h1 className='red'>CSS Examples</h1>
      <h2 style={{ color: 'blue' }}>SubText</h2>
      <div style={squareStyle}></div>
      <div style={squareStyle}></div>
      <br />
      <h2 className={css['primary-color']}>yeah! From module</h2>
      <h2 className='primary-color'>yeah! Not from module</h2>
    </>
  );
}
