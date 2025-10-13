import React, { useEffect, useState, useTransition } from "react";

function SearchList() {
  let [list, setList] = useState([]);
  let [filterList, setFilterList] = useState([]);
  let [input, setInput] = useState("");
  let [isPending, startTransition] = useTransition();

  let filterResult = (event) => {
    let { value } = event.target;
    setInput(value);
    console.log("start");
    startTransition(() => {
      let newList = list.filter((product) => {
        console.log("loop");
        return product.title.toLowerCase().includes(value.toLowerCase());
      });
      setFilterList(newList);
    });
    console.log("top");
  };
  useEffect(() => {
    (async () => {
      let response = await fetch(`https://fakestoreapi.com/products`);
      let data = await response.json();
      setList(data);
      setFilterList(data);
    })();
  }, []);

  return (
    <>
      <p>Total project are {list.length}</p>
      <input
        value={input}
        onChange={filterResult}
        type="text"
        placeholder="enter project name"
      />
      <ul>
        {isPending && <p>Loading...</p>}
        {filterList.map((products, index) => {
          return <li key={index}>{products.title}</li>;
        })}
      </ul>
    </>
  );
}

export default SearchList;
