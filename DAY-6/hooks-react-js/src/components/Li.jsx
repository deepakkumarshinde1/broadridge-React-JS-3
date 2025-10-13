import { productAction } from "../reducers/product.reducer";
import { memo } from "react";

function Li({ product, cart, dispatch, index }) {
  return (
    <>
      <li>
        {product.title}
        <button
          onClick={() =>
            dispatch({ type: productAction.ADD_CART, payload: index })
          }
          disabled={cart}
        >
          {cart ? "Added" : "Add to Cart"}
        </button>
        <button
          className="remove"
          onClick={() =>
            dispatch({ type: productAction.REMOVE, payload: index })
          }
        >
          Remove
        </button>
      </li>
    </>
  );
}

export default memo(Li);
