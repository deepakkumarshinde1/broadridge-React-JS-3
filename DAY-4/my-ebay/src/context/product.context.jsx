import { createContext, useContext, useState } from "react";

// create context
let ProductContext = createContext({});

// create a custom hook
export function useProductContext() {
  return useContext(ProductContext);
}

// create a wrapper component
export function ProductContextProvider(props) {
  let [cart, setCart] = useState([]);

  let addToCart = (product) => {
    let newCart = [...cart]; // deep copy

    let isFound = cart.findIndex((cProduct) => cProduct.pId === product._id);

    if (isFound > -1) {
      newCart[isFound].count += 1;
    } else {
      newCart.push({
        pId: product._id,
        title: product.title,
        image: product.images[0],
        count: 1,
      });
    }
    setCart(newCart);
  };
  let handelCartCount = (index, type) => {
    let newCart = [...cart]; // deep copy
    if (type === "add") {
      newCart[index].count += 1;
    } else {
      if (newCart[index].count === 1) {
        newCart.splice(index, 1);
      } else {
        newCart[index].count -= 1;
      }
    }

    setCart(newCart);
  };
  let share = {
    cart,
    addToCart,
    handelCartCount,
  };
  return (
    <ProductContext.Provider value={share}>
      {props.children}
    </ProductContext.Provider>
  );
}
