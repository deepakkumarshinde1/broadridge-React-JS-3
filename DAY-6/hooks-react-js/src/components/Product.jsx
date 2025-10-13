import React, { useEffect, useReducer } from "react";
import {
  initialState,
  productAction,
  reducer,
} from "../reducers/product.reducer";
import Li from "./Li";
import Header from "./Header";

function Product() {
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      let response = await fetch(`https://fakestoreapi.com/products`);
      let data = await response.json();
      dispatch({ type: productAction.SAVE, payload: data });
    })();
  }, []);
  return (
    <>
      <Header />
      <ul>
        {state.list.map((product, index) => {
          return (
            <Li
              key={product.id}
              product={product}
              dispatch={dispatch}
              cart={product.cart ? true : false}
              index={index}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Product;
