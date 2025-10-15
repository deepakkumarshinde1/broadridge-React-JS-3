import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slice/counter.slice";
import { handelInput } from "./redux/slice/login_form.slice";
import { useEffect } from "react";
import { getProductList } from "./redux/slice/products.slice";

function App() {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.counter);
  let { text } = useSelector((state) => state.users);
  let { list, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductList(1));
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <section>
        <h1>List Count is {list.length}</h1>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(event) => dispatch(handelInput(event.target.value))}
        />
        <h1>{text}</h1>
      </section>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>count inc</button>
        <button onClick={() => dispatch(decrement())}>count dec</button>
      </div>
    </>
  );
}

export default App;
