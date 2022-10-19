import React, {useState} from 'react'

const Test = () => {
    const [count, setCount] = useState(0);
    const [id, setId] = useState(0);
    const increment = () => {
        // if (count < 10) {
            setCount((co) => co + 5);
        // }
    };
    const timeHandler = () => {
            setId(setInterval(increment, 1000));
    };
    // timeHandler();
    const clearHandler = () => {
       if (count > 99) {
        clearInterval(id);
       }
    };
    clearHandler();
  return (
    <div>Test
        <h3>{count}</h3>
        <button onClick={timeHandler}>+</button>
        <button onClick={clearHandler}>stop</button>
    </div>
  )
}

export default Test;