import React, { memo } from "react";

function Count2({ count, incCount2 }) {
  return (
    <>
      <h1>Count2 is {count}</h1>
      <button onClick={incCount2}>Click Count 2</button>
    </>
  );
}

export default memo(Count2);
