import { useState } from "react";
import Counter from './Counter';

const App = () => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div className="App">
      <h1>Multiple Counters</h1>
      <div className="counters">
        <Counter count={count1} setCount={setCount1} />
        <Counter count={count2} setCount={setCount2} />
        <Counter count={count3} setCount={setCount3} />
      </div>
    </div>
  );
};

export default App;
