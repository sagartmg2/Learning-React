import { useState } from "react";

function CounterOld() {
  let countValue = 111;

  let [CountValue, setCountValue] = useState(111);

  function increment() {
    console.log("increment");
    setCountValue(CountValue + 1);
    console.log({ countValue });
  }

  function decrement() {
    console.log("decrement");
    setCountValue(CountValue - 1);
    console.log({ countValue });
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl">{CountValue}</h1>

      <button
        onClick={increment}
        className="hover:bg-amber-500 capitalize px-6 py-2 border border-gray-300 bg-amber-700 text-white"
      >
        increment
      </button>

      <button
        onClick={decrement}
        className="hover:bg-amber-500 capitalize px-6 py-2 border border-gray-300 bg-amber-700 text-white"
      >
        decrement
      </button>
    </div>
  );
}

export default CounterOld;