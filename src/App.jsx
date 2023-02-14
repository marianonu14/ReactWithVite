import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter App with Vite</h1>
      <p>{count}</p>
      <div className="btn-container">
        <button onClick={() => setCount(count + 1)}>+ 1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>- 1</button>
      </div>
    </>
  );
};

export default App;
