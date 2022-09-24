import { useEffect, useState } from 'react';

export default function UseEffectExamples() {
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    // Executed immeditely after the component is rendered
    console.log('component loaded');

    return () => {
      // Run before the component is destroyed
      console.log('component unloaded');
    };
  }, []);

  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  }, [clicks]);
  return (
    <>
      <h1>UseEffect Examples</h1>
      <div>
        <button onClick={() => setClicks(clicks + 1)}>
          You have clicked {clicks} times
        </button>
      </div>
    </>
  );
}
