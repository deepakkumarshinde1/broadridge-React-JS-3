import React, {
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";

function SearchList() {
  let [list, setList] = useState([]);

  let [input, setInput] = useState("");
  let differValue = useDeferredValue(input);

  let handleInput = (event) => {
    let { value } = event.target;
    setInput(value);
  };

  let filterList = useMemo(() => {
    return list.filter((product) => {
      return product.title.toLowerCase().includes(differValue.toLowerCase());
    });
  }, [differValue]);

  useEffect(() => {
    (async () => {
      let response = await fetch(`https://fakestoreapi.com/products`);
      let data = await response.json();
      setList(data);
    })();
  }, []);
  console.log(differValue);
  return (
    <>
      <p>Total project are {list.length}</p>
      <input
        value={input}
        onChange={handleInput}
        type="text"
        placeholder="enter project name"
      />
      <ul>
        {filterList.map((products, index) => {
          return <li key={index}>{products.title}</li>;
        })}
      </ul>
    </>
  );
}

export default SearchList;
