import React, { memo } from "react";

function Count({ text }) {
  return <div>Count {text} </div>;
}

export default memo(Count);
