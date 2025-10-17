import { useState } from "react";
import { deepCopy } from "./shared/common";

function ListHandling() {
  const [list, setList] = useState(["a", "b", "c"]);
  const [input, setInput] = useState("");

  let addToList = (event) => {
    if (event.keyCode === 13) {
      let _list = deepCopy(list);
      _list.push(input);
      setList(_list);
      setInput("");
    }
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={addToList}
      />

      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
}

export default ListHandling;
