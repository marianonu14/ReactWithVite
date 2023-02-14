import { useState } from 'react';
import PropTypes from 'prop-types';

const App = ({ title, initialNumber }) => {
  const [count, setCount] = useState(initialNumber);

  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <>
      <h1>{title}</h1>
      <p>{count}</p>
      <div className="btn-container">
        <button onClick={handleAdd}>+ 1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubtract}>- 1</button>
      </div>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  initialNumber: PropTypes.number.isRequired,
};

App.defaultProps = {
  title: 'Default Title',
  initialNumber: 0,
};

export default App;
