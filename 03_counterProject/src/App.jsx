import { useState } from "react";

function App() {
  const [counterVal, setCounterVal] = useState(0);

  const addValue = () => {
    // if (counterVal < 20) {
    //   setCounterVal(counterVal + 1);
    // } else {
    //   alert(`The Value is Greater then ${counterVal}`);
    // }

    // const value = counterVal < 20;

    counterVal < 20
      ? setCounterVal(counterVal + 1)
      : alert(`The Value is Greater then ${counterVal}`);
  };

  const removeVal = () => {
    // setCounterVal(counterVal - 1);

    // if (counterVal > 0) {
    //   setCounterVal(counterVal - 1);
    // } else {
    //   alert(`The Value is less then ${counterVal}`);
    // }

    counterVal > 0
      ? setCounterVal(counterVal - 1)
      : alert(`The Value is less then ${counterVal}`);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counterVal}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={removeVal}>Decrease Value</button>
    </>
  );
}

export default App;
