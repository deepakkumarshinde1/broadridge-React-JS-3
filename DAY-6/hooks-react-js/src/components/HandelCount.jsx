import React, { useCallback, useMemo, useState } from "react";
import Count from "./Count";
import Count2 from "./Count2";

function HandelCount() {
  let [count, setCount] = useState(1);
  let [count2, setCount2] = useState(100);
  let text = useMemo(() => {
    return count % 5 === 0 ? "Yes" : "No";
  }, [count]);

  let incCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h1>Count : {count}</h1>
      <Count text={text} />
      <hr />
      <Count2 incCount2={incCount2} count={count2} />
    </div>
  );
}

export default HandelCount;
